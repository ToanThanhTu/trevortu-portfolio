"use client"

import { ContactFormSchemaType } from "@/modules/contact/factories"
import { useState } from "react"

// Kept short: the Contact form appends " :(" and its own description to these.
const GENERIC_ERROR = "Your message could not be sent"

export default function useSendEmail() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  /** Returns an error message on failure, or `null` when the message was sent. */
  async function sendEmail(values: ContactFormSchemaType): Promise<string | null> {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const message = response.status === 400 ? "Please check your details" : GENERIC_ERROR

        setError(message)
        return message
      }

      setSuccess(true)
      return null
    } catch {
      setError(GENERIC_ERROR)
      return GENERIC_ERROR
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, success, sendEmail }
}
