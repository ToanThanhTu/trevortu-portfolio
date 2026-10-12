import type { Metadata } from "next"
import Playground from "@/components/playground"

export const metadata: Metadata = {
  title: "Playground",
  description: "Interactive experiments and side projects by Trevor Tu.",
  alternates: { canonical: "/playground" },
}

export default function PlaygroundPage() {
  return (
    <main>
      <Playground />
    </main>
  )
}
