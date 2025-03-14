"use client"

import Experience from "@/components/about/experience"
import Tile from "@/components/tile/Tile"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export default function About() {
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

          <motion.div
            initial={{ scale: 3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://placehold.co/400x500"
              alt="portrait"
              width={400}
              height={500}
              className={cn(
                "rounded-lg text-foreground-primary object-cover w-full",
                "md:h-86",
                "lg:h-120",
                "xl:h-96"
              )}
            />
          </motion.div>
        </div>

        <div className={cn("md:grid md:grid-cols-2 md:gap-4")}>
          <Tile transitionFrom="left" className={cn("md:my-0 md:h-full md:h-60")}>
            <p className="text-foreground-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et
              consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus.
              Ut in volutpat eros, eget sollicitudin leo. Praesent consectetur egestas tempus. Etiam
              in finibus nibh.
            </p>
          </Tile>

          <Link href="mailto:trevor.tu@outlook.com" target="_blank">
            <Tile
              className={cn(
                "flex flex-col justify-between h-60 bg-background-secondary my-0",
                "md:h-60",
                "xl:h-72"
              )}
              transitionFrom="bottom"
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
