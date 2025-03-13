"use client"

import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"
import { motion } from "motion/react"

interface Props {
  className?: string
  transitionFrom?: "left" | "right"
}

export default function Tile({ children, className, transitionFrom }: PropsWithChildren<Props>) {
  return (
    <motion.div
      initial={{ visibility: "hidden", position: "fixed", left: transitionFrom == "left" ? -9000 : 9000 }}
      animate={{ x: 0, visibility: "visible", position: "relative", left: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className={cn(
          "bg-background-primary px-6 pt-6 pb-8 text-foreground-primary border border-stroke rounded-xl my-4",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}
