import { NextRequest, NextResponse } from "next/server"

const nodemailer = require("nodemailer")

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()
  const subject = `Trevor Tu: Contact Confirmation`

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const mailOptions = {
    from: `"No-reply" <${process.env.GMAIL_FROM}>`,
    to: email,
    subject: subject,
    html: `
      <p>Thanks ${name} for contacting me!</p>
      <br />
      <p>Here is your contact form records:</p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      <br />
      <p>I'll get back to you soon.</p>
    `,
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
