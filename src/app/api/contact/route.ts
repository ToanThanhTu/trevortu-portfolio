import { NextResponse, type NextRequest } from "next/server"
import { render } from "@react-email/components"
import { createElement } from "react"

import EmailToClient from "@/components/email/to-client"
import EmailToTrevor from "@/components/email/to-trevor"
import { CONTACT_INBOX, getFromAddress, getTransporter } from "@/lib/mailer"
import { ContactFormSchema } from "@/modules/contact/factories"

/**
 * Contact form endpoint.
 *
 * This is a public, unauthenticated route that causes mail to be sent, so the
 * recipient is never taken from the request. The submission always goes to
 * `CONTACT_INBOX`, and the only attacker-influenced destination is the
 * confirmation, which is sent to an address that has passed schema validation
 * and carries no caller-supplied content.
 *
 * Request volume is capped by a Vercel WAF rate limit rule rather than in code,
 * because serverless invocations are isolated and an in-process counter would
 * reset constantly.
 */
export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const parsed = ContactFormSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, message } = parsed.data

  try {
    const transporter = getTransporter()
    const from = getFromAddress()

    const [notificationHtml, confirmationHtml] = await Promise.all([
      render(createElement(EmailToTrevor, { name, email, message })),
      render(createElement(EmailToClient, { name })),
    ])

    // The submission itself must succeed for the request to be a success.
    await transporter.sendMail({
      from,
      to: CONTACT_INBOX,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: notificationHtml,
    })

    // The confirmation is best-effort. A sender missing their receipt is not
    // worth reporting a failure for when the message already landed.
    try {
      await transporter.sendMail({
        from,
        to: email,
        subject: "Thanks for getting in touch",
        html: confirmationHtml,
      })
    } catch (error: unknown) {
      console.error("Contact confirmation email failed:", error)
    }

    return NextResponse.json({ message: "Message sent" }, { status: 200 })
  } catch (error: unknown) {
    // Logged server-side only. The response stays generic so SMTP internals and
    // environment problems are not disclosed to the caller.
    console.error("Contact form submission failed:", error)

    return NextResponse.json({ error: "Unable to send message" }, { status: 500 })
  }
}
