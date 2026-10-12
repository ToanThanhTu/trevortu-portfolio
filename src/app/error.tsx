"use client"

import { useEffect } from "react"
import Tile from "@/components/tile"
import { Button } from "@/components/shadcn/button"
import { cn } from "@/lib/utils"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="h-[80vh] flex justify-center items-center">
      <Tile transitionFrom="bottom" className={cn("flex flex-col items-center gap-4 text-center")}>
        <h1 className="text-3xl">Something went wrong :(</h1>
        <Button
          onClick={reset}
          className="bg-white text-black font-bold cursor-pointer transition-opacity duration-300 hover:opacity-80"
        >
          Try again
        </Button>
      </Tile>
    </main>
  )
}
