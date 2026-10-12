"use client"

import { useCallback, useSyncExternalStore } from "react"

// Tailwind 4's default breakpoints, in the same units it emits.
const breakpoints = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "96rem",
} as const

type MediaQuery = keyof typeof breakpoints

/**
 * Whether the viewport is at least the given Tailwind breakpoint.
 *
 * Returns `false` on the server and during hydration, then the real value, so the
 * first paint is the mobile variant. Prefer CSS (`xl:hidden`, `md:grid`) for
 * layout; reach for this only when CSS can't express it, like animation direction.
 */
export default function useMediaQuery(query: MediaQuery): boolean {
  const media = `(width >= ${breakpoints[query]})`

  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(media)
      list.addEventListener("change", onChange)
      return () => list.removeEventListener("change", onChange)
    },
    [media],
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(media).matches,
    () => false,
  )
}
