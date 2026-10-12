import { Body, Container, Heading, Hr, Section, Tailwind, Text } from "@react-email/components"

interface Props {
  name: string
}

/**
 * Confirmation sent to whoever submitted the contact form.
 *
 * Deliberately does not echo the submitted email or message back. The
 * destination address is caller-supplied, so echoing caller-supplied content
 * into it would let this endpoint be used to deliver arbitrary text to
 * arbitrary inboxes.
 */
export default function EmailToClient({ name }: Props) {
  return (
    <Tailwind>
      <Body className="bg-gray-100 p-4 text-center">
        <Container>
          <Heading as="h1">Thanks {name} for contacting me!</Heading>

          <Hr />

          <Section>
            <Text>I&apos;m looking forward to discussing with you!</Text>
            <Text>I will get back to you soon.</Text>
          </Section>

          <Hr />

          <Text>© 2026 | Sydney, NSW 2200 Australia | trevortu.com</Text>
        </Container>
      </Body>
    </Tailwind>
  )
}
