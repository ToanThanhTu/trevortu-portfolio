"use client"

import { ContactFormSchemaType } from "@/modules/contact/factories"
import { useState } from "react"

export default function useSendEmail() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function sendEmail(values: ContactFormSchemaType) {
    try {
      setLoading(true)

      const response = await fetch("/api/email-to-trevor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok || data.error) {
        setError("Failed to send email")
        setLoading(false)
        return
      }
      setLoading(false)
      setSuccess(true)
    } catch (error) {
      setError("Something went wrong. Please try again later.")
      setLoading(false)
    }
  }

  return { loading, error, success, sendEmail }
}
