import { Body, Head, Html } from "@react-email/components"

interface Props {
  name: string
  email: string
  message: string
  subject: string
}

export default function EmailToTrevor({ name, email, message, subject }: Props) {
  return (
    <Html lang="en">
      <Head>{subject}</Head>

      <Body>
        You have a new message from {name} ({email}):
        <br />
        {message}
      </Body>
    </Html>
  )
}
