"use client"

import Tile from "@/components/tile"
import { PlaygroundProject } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { useState } from "react"

interface Props {
  project: PlaygroundProject
  transitionFrom?: "left" | "right" | "bottom"
}

export default function PlaygroundTile({ project, transitionFrom }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("z-20", "transition-all duration-300")}
      >
        <Tile
          className={cn("m-0 rounded-xl overflow-hidden p-0 pt-6 px-6 bg-blue-50")}
          transitionFrom={transitionFrom}
        >
          <div className="relative">
            {/* Static image (default) */}
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              width={600}
              height={400}
              className={cn(
                "rounded-t-xl object-cover w-full shadow-[12px_20px_40px_rgba(28,25,23)]",
                "transition-opacity duration-300",
                isHovered && project.animatedImage ? "opacity-0" : "opacity-100"
              )}
            />

            {/* Animated image (shown on hover when available) */}
            {project.animatedImage && (
              <Image
                src={project.animatedImage}
                alt={`${project.name} animated preview`}
                width={600}
                height={400}
                className={cn(
                  "rounded-t-xl object-cover w-full shadow-[12px_20px_40px_rgba(28,25,23)]",
                  "absolute inset-0",
                  "transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
                unoptimized
              />
            )}

            {/* Fallback: Framer Motion pulse when no animated image */}
            {!project.animatedImage && isHovered && (
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  width={600}
                  height={400}
                  className="rounded-t-xl object-cover w-full shadow-[12px_20px_40px_rgba(28,25,23)]"
                />
              </motion.div>
            )}
          </div>
        </Tile>
      </Link>

      {/* Hover overlay with description */}
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("absolute inset-0 z-10 rounded-xl")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.85 }}
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
            <h2 className={cn("text-2xl text-foreground-primary font-medium")}>
              {project.name}
            </h2>
            <p className={cn("text-sm text-foreground-secondary mt-2 line-clamp-3")}>
              {project.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}