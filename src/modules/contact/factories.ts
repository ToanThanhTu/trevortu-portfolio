import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(2, {
      message: "Name must be at least 2 characters",
    }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z
    .string({
      required_error: "Please enter a message",
    })
    .min(10, {
      message: "Message must be at least 10 characters",
    }),
})

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>
