"use client"

import Experience from "@/components/about/experience"
import Tile from "@/components/tile"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import ImageWithMotion from "@/components/image-with-motion"
import useMediaQuery from "@/hooks/useMediaQuery"
import ErrorTile from "@/components/error/ErrorTile"

export default function About() {
  const isXl = useMediaQuery("xl")
  const isMd = useMediaQuery("md")

  if (
    isXl === undefined ||
    typeof isXl !== "boolean" ||
    isMd === undefined ||
    typeof isMd !== "boolean"
  ) {
    return <ErrorTile message="Please try again later." />
  }

  return (
    <section className={cn("xl:grid xl:grid-cols-3 xl:gap-4")}>
      <div className={cn("xl:col-span-2")}>
        <div className={cn("md:grid md:grid-cols-3 md:my-4 md:gap-4 md:items-end")}>
          <Tile
            transitionFrom="left"
            containerClassName={cn("md:col-span-2")}
            className={cn("md:m-0 md:h-86 md:flex md:items-end", "lg:h-120", "xl:h-96")}
          >
            <div className={cn("uppercase font-bold tracking-wider")}>
              <h2 className={cn("text-4xl", "md:text-6xl")}>Tu</h2>
              <h1 className={cn("text-6xl", "md:text-8xl")}>Trevor</h1>
            </div>
          </Tile>

          {/* Scaling transition if XL screen, otherwise slide in from right side */}
          {isXl ? (
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/portrait.webp"
                alt="portrait"
                width={400}
                height={500}
                className={cn(
                  "rounded-lg text-foreground-primary object-cover w-full h-96",
                  "md:h-86",
                  "lg:h-120",
                  "xl:h-96"
                )}
              />
            </motion.div>
          ) : (
            <ImageWithMotion
              src="/portrait.webp"
              alt="portrait"
              width={400}
              height={500}
              imageClassName={cn(
                "rounded-lg text-foreground-primary object-cover w-full h-96",
                "md:h-86",
                "lg:h-120",
                "xl:h-96"
              )}
              transitionFrom="right"
            />
          )}
        </div>

        <div className={cn("md:grid md:grid-cols-2 md:gap-4")}>
          <Tile transitionFrom="left" className={cn("md:my-0 md:h-60", "xl:h-72")}>
            <p
              className={cn(
                "text-sm text-foreground-primary",
                "md:h-48 md:overflow-y-auto",
                "lg:h-auto"
              )}
            >
              Hey, I’m Trevor Tu, a full stack developer who loves building sleek, high-performance
              web applications with TypeScript, React, Next.js for smooth, responsive user
              experience, and Node.js, .NET, NoSQL/SQL databases for scalable, efficient systems.
              Whether it’s designing intuitive UIs, fine-tuning APIs, or deploying to the cloud, I
              enjoy turning ideas into functional, well-built applications all while writing clean,
              maintainable code, and learning new technologies and skills to craft seamless digital
              experiences.
            </p>
          </Tile>

          <Link
            href="mailto:trevor.tu@outlook.com"
            target="_blank"
            className={cn("transition-opacity ease-in-out duration-300 hover:opacity-80")}
          >
            <Tile
              className={cn(
                "flex flex-col justify-between h-60 bg-background-secondary my-0",
                "md:h-60",
                "xl:h-72"
              )}
              transitionFrom={isMd ? "right" : "bottom"}
            >
              <div className="flex justify-between items-center">
                <p className="text-foreground-secondary">Wanna get in touch?</p>
                <ArrowUpRight size={40} />
              </div>
              <h2 className="uppercase text-3xl font-medium tracking-wide">Email me</h2>
            </Tile>
          </Link>
        </div>
      </div>

      <Experience />
    </section>
  )
}
