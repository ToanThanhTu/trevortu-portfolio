"use client"

import { useEffect, useState } from "react"

type MediaQuery = "sm" | "md" | "lg" | "xl" | "2xl"

export default function useMediaQuery(query: MediaQuery) {
  const [isMatched, setIsMatched] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (typeof window === "undefined") return undefined

    const getQuerySize = (query: MediaQuery) => {
      switch (query) {
        case "sm":
          return 640
        case "md":
          return 768
        case "lg":
          return 1024
        case "xl":
          return 1280
        case "2xl":
          return 1536
        default:
          return 0
      }
    }

    const handleResize = () => {
      const width = window.innerWidth
      setIsMatched(width >= getQuerySize(query))
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [query])  

  return isMatched
}
