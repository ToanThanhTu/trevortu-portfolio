import { render } from "@react-email/render"
import { NextRequest, NextResponse } from "next/server"
import EmailToClient from "@/components/email/to-client"
import { createElement } from "react"

const nodemailer = require("nodemailer")

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()
  const subject = 'Trevor Tu: Communication'

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const html = await render(createElement(EmailToClient, { name, email, message }), {
    pretty: true,
  })

  const mailOptions = {
    from: `"No-reply" <${process.env.GMAIL_FROM}>`,
    to: email,
    subject: subject,
    html,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.log("error: ", error)
    return NextResponse.json(
      { error: "Error sending email", details: error.message },
      { status: 500 }
    )
  }
}
