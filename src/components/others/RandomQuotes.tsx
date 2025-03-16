"use client"

import Tile from "@/components/tile/Tile"
import { quotes } from "@/lib/data"
import { Quote } from "@/lib/types"
import { useEffect, useState } from "react"

export default function RandomQuotes() {
  const [quote, setQuote] = useState<Quote>(quotes[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * quotes.length)
      setQuote(quotes[index])
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Tile
      className="my-0 px-8 h-[288px] flex flex-col items-start justify-center gap-4"
      transitionFrom="right"
    >
      <p className="italic text-foreground-secondary">"{quote.quote}"</p>
      <p className="text-foreground-primary">- {quote.author}</p>
    </Tile>
  )
}
