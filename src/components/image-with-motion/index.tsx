import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image from "next/image"
import { PropsWithChildren } from "react"

interface Props {
  src: string
  alt: string
  width: number
  height: number
  containerClassName?: string
  imageClassName?: string
  transitionFrom?: "left" | "right" | "bottom"
  priority?: boolean
}

export default function ImageWithMotion({
  src,
  alt,
  width,
  height,
  containerClassName,
  imageClassName,
  transitionFrom,
  priority,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      initial={{
        x: transitionFrom === "left" ? -100 : transitionFrom === "right" ? 100 : 0,
        y: transitionFrom === "bottom" ? 50 : 0,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
      className={cn("overflow-hidden relative rounded-xl", containerClassName)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full rounded-xl object-cover", imageClassName)}
        priority={priority}
      />
    </motion.div>
  )
}
