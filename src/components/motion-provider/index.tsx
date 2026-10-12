"use client"

import { MotionConfig } from "motion/react"
import { PropsWithChildren } from "react"

/** Drops transform animations (slides, scales) for users who prefer reduced motion. */
export default function MotionProvider({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
