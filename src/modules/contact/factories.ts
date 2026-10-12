import { z } from "zod"

/**
 * Contact form contract. Used by the client form for UX validation and by
 * `POST /api/contact` as the trust boundary, so the upper bounds matter: they
 * are what stops an unbounded body reaching the mail transport.
 */
export const ContactFormSchema = z.object({
  name: z
    .string({ error: "Please enter your name" })
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be 100 characters or fewer" }),
  email: z
    .email({ message: "Please enter a valid email address" })
    // RFC 5321 caps a forward path at 254 characters.
    .max(254, { message: "Email must be 254 characters or fewer" }),
  message: z
    .string({ error: "Please enter a message" })
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be 2000 characters or fewer" }),
})

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>
