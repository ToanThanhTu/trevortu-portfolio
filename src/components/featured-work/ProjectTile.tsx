"use client"

import Tile from "@/components/tile"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

interface Props {
  project: Project
  transitionFrom?: "left" | "right" | "bottom"
  className?: string
}

export default function ProjectTile({
  project: { title, slug, type, images, width, height },
  transitionFrom,
  className,
}: Props) {
  return (
    <div className="relative group">
      <Link href={`work/${slug}`} className={cn("z-20", "transition-all duration-300")}>
        <Tile
          className={cn("m-0 rounded-xl overflow-hidden p-0 pt-6 px-6 bg-blue-50", className)}
          transitionFrom={transitionFrom}
        >
          <Image
            src={images[0]}
            alt={`Project ${title} Photo`}
            width={width}
            height={height}
            className={cn(
              "rounded-t-xl object-cover w-full shadow-[12px_20px_40px_rgba(28,25,23)]",
              "group-hover:blur-[2px]"
            )}
          />
        </Tile>
      </Link>

      <Link href={`work/${slug}`} className={cn("absolute inset-0 z-10 rounded-xl")}>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "absolute inset-0 bg-background-primary rounded-xl flex flex-col items-stretch justify-between p-8"
          )}
        >
          <ArrowUpRight
            size={44}
            strokeWidth={2}
            className={cn("self-end text-foreground-primary")}
          />

          <div>
            <h2 className={cn("text-2xl text-foreground-primary font-medium")}>{title}</h2>
            <h3 className={cn("text-lg text-foreground-primary italic")}>{type}</h3>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}
