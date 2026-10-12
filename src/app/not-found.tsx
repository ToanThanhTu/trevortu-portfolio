import type { Metadata } from "next"
import Link from "next/link"
import Tile from "@/components/tile"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <main className="h-[80vh] flex justify-center items-center">
      <Tile transitionFrom="bottom" className={cn("flex flex-col items-center gap-4 text-center")}>
        <h1 className="text-3xl">Page not found :(</h1>
        <Link href="/" className="underline transition-opacity duration-300 hover:opacity-80">
          Back to the homepage
        </Link>
      </Tile>
    </main>
  )
}
