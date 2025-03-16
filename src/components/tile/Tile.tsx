"use client"

import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"
import { motion } from "motion/react"

interface Props {
  containerClassName?: string
  className?: string
  transitionFrom?: "left" | "right" | "bottom"
}

export default function Tile({
  children,
  containerClassName,
  className,
  transitionFrom,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: transitionFrom === "left" ? -100 : transitionFrom === "right" ? 100 : 0,
        y: transitionFrom === "bottom" ? 50 : 0,
      }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(containerClassName)}
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
