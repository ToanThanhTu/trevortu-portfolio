import { DefaultAzureCredential } from "@azure/identity"
import { NextRequest, NextResponse } from "next/server"
import EmailToTrevor from "@/components/email/to-trevor"

const nodemailer = require("nodemailer")

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()
  const subject = `New message from ${name} through your portfolio website`

  const credential = new DefaultAzureCredential()
  const tokenResponse = await credential.getToken("https://graph.microsoft.com/.default")

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      type: 'OAuth2',
      user: process.env.OUTLOOK_EMAIL,
      accssToken: tokenResponse.token,
    },
  })

  const mailOptions = {
    from: {
      name: "Trevor Tu",
      address: "trevor.tu@outlook.com",
    },
    to: "toantu3005@gmail.com",
    subject: subject,
    html: `
      <p>You have a new message from ${name} (${email}):</p>
      <br />
      <p>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error: any) {
    console.log("error: ", error)
    return NextResponse.json({ error: 'Error sending email', details: error.message }, { status: 500 })
  }
}
