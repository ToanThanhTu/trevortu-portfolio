import nodemailer, { type Transporter } from "nodemailer"

/** Where contact form submissions are delivered. */
export const CONTACT_INBOX = "trevor.tu@outlook.com"

let transporter: Transporter | null = null

function requireEnv(name: "GMAIL_FROM" | "GMAIL_APP_PASSWORD"): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

/**
 * Shared Gmail transport, created once per server instance instead of once per
 * request so repeated submissions reuse the same pooled SMTP connection.
 */
export function getTransporter(): Transporter {
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    pool: true,
    auth: {
      user: requireEnv("GMAIL_FROM"),
      pass: requireEnv("GMAIL_APP_PASSWORD"),
    },
  })

  return transporter
}

/** Envelope sender. Gmail rewrites this to the authenticated account anyway. */
export function getFromAddress(): string {
  return `"Trevor Tu Portfolio" <${requireEnv("GMAIL_FROM")}>`
}
