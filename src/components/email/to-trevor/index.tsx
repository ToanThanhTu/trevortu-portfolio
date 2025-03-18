import {
  Body,
  Container,
  Heading,
  Hr,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface Props {
  name: string
  email: string
  message: string
}

export default function EmailToTrevor({ name, email, message }: Props) {
  return (
    <Tailwind>
      <Body className="bg-gray-100 px-8 pt-6 pb-16 text-center box-border">
        <Container className="mb-8">
          <Heading>
            You have a new message from {name} ({email}):
          </Heading>

          <Section className="text-left">
            <Text>{message}</Text>
          </Section>

          <Hr />
        </Container>

        <Link
          href={`mailto:${email}?subject=Trevor Tu: Communication`}
          className="px-6 py-4 bg-blue-700 text-blue-50 font-semibold rounded-xl"
        >
          Reply
        </Link>
      </Body>
    </Tailwind>
  )
}
