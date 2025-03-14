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
import Tile from "@/components/tile/Tile"
import { Textarea } from "@/components/shadcn/textarea"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function Contact() {
  const controller = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormSchemaType) {
    console.log(values)
    toast.success("Message sent!", {
      description: `Thanks ${values.name} for contacting me! I'll get back to you soon.`,
      action: {
        label: "Close",
        onClick: () => {},
      },
    })
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
                  <Textarea placeholder="Tell me more..." {...field} className="xl:min-h-36" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-white text-black w-full">
            Submit
          </Button>
        </form>
      </Form>
    </Tile>
  )
}
