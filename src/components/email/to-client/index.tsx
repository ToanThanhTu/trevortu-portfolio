import { Body, Container, Heading, Hr, Section, Tailwind, Text } from "@react-email/components"

interface Props {
  name: string
  email: string
  message: string
}

export default function EmailToClient({ name, email, message }: Props) {
  return (
    <Tailwind>
      <Body className="bg-gray-100 p-4 text-center">
        <Container>
          <Heading as="h1">Thanks {name} for contacting me!</Heading>

          <Hr />

          <Section>
            <Text>I'm looking forward to discuss with you!</Text>
            <Text>I will get back to you soon!</Text>
          </Section>

          <Hr />

          <Section>
            <Text className="text-center">Here is your contact form record:</Text>

            <Section className="text-left">
              <Heading as="h3">Name:</Heading>
              <Text>{name}</Text>

              <Heading as="h3">Email:</Heading>
              <Text>{email}</Text>

              <Heading as="h3">Message:</Heading>
              <Text>{message}</Text>
            </Section>
          </Section>

          <Hr />
          <Text>© 2025 | Sydney, NSW 2200 Australia | trevortu-portfolio.vercel.app</Text>
        </Container>
      </Body>
    </Tailwind>
  )
}
