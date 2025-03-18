"use client"

import { ContactFormSchema, ContactFormSchemaType } from "@/modules/contact/factories"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form"
import { Input } from "@/components/shadcn/input"
import { Button } from "@/components/shadcn/button"
import Tile from "@/components/tile"
import { Textarea } from "@/components/shadcn/textarea"
import { cn } from "@/lib/utils"
import useSendEmail from "@/hooks/useSendEmail"
import { LoaderPinwheel } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const { loading, error, sendEmail } = useSendEmail()

  const controller = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormSchemaType) {
    const errorMessage = await sendEmail(values)

    if (errorMessage) {
      toast.error(`${errorMessage} :(`, {
        description: "Please try again later or contact me through other means.",
        action: {
          label: "Close",
          onClick: () => {},
        },
      })
      return
    }

    toast.success("Message sent!", {
      description: `Thanks ${values.name} for contacting me! I'll get back to you soon.`,
      action: {
        label: "Close",
        onClick: () => {},
      },
    })

    controller.reset()
  }

  return (
    <Tile className={cn("md:mb-0")} transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-medium py-2 border-b border-stroke">Contact Me</h2>

      <Form {...controller}>
        <form
          onSubmit={controller.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 pt-4 pb-2"
        >
          <FormField
            control={controller.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Trevor Tu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={controller.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="trevor.tu@outlook.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={controller.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell me more..." {...field} className={cn("md:min-h-32", "xl:min-h-40")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-white text-black font-bold w-full cursor-pointer transition-opacity ease-in-out duration-300 hover:opacity-80"
            disabled={loading}
          >
            {loading ? <LoaderPinwheel className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </Form>
    </Tile>
  )
}
