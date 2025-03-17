import { ClientSecretCredential, DefaultAzureCredential } from "@azure/identity"
import { NextRequest, NextResponse } from "next/server"

const nodemailer = require("nodemailer")

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()
  const subject = `New message from ${name} through your portfolio website`

  // const credential = new DefaultAzureCredential()
  const credential = new ClientSecretCredential(
    process.env.AZURE_TENANT_ID!,
    process.env.AZURE_CLIENT_ID!,
    process.env.AZURE_CLIENT_SECRET!
  )
  const tokenResponse = await credential.getToken("https://graph.microsoft.com/.default")

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      type: "OAuth2",
      user: process.env.OUTLOOK_EMAIL,
      accessToken: tokenResponse.token,
    },
    logger: true,
    debug: true,
  })

  const mailOptions = {
    from: process.env.OUTLOOK_EMAIL,
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
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.log("error: ", error)
    return NextResponse.json(
      { error: "Error sending email", details: error.message },
      { status: 500 }
    )
  }
}
