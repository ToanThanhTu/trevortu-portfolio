import { NextRequest, NextResponse } from "next/server"

const nodemailer = require("nodemailer")

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()
  const subject = `New message from ${name} through your portfolio website`

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
    to: "trevor.tu@outlook.com",
    subject: subject,
    html: `
      <p>You have a new message from ${name} (${email}):</p>
      <br />
      <p>${message}</p>
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
