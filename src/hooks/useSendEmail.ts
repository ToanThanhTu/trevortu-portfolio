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
      setError(null)

      const response = await fetch("/api/email-to-trevor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok || data.error) {
        setError(data.error || "Failed to send email")
        setLoading(false)
        return data.error || "Failed to send email"
      }

      setSuccess(true)
      setLoading(false)
      return null
    } catch (error: any) {
      const errorMessage = error.message || "Something went wrong. Please try again later."      
      setError(errorMessage)
      setLoading(false)
      return errorMessage
    }
  }

  return { loading, error, success, sendEmail }
}
