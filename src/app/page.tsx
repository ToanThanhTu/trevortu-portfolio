"use client"

import About from "@/components/about"
import Contact from "@/components/contact"
import FeaturedWork from "@/components/featured-work"
import AvailableForWork from "@/components/others/AvailableForWork"
import Motivation from "@/components/others/Motivation"
import Testimonials from "@/components/testimonials"
import Toolbox from "@/components/toolbox"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "motion/react"

export default function Home() {
  return (
    <main>
      <About />
      <FeaturedWork />

      {/* Layout for desktop */}
      <div className={cn("hidden", "xl:grid grid-cols-3 gap-4")}>
        <div className={cn("col-span-2")}>
          <Toolbox />

          <div className={cn("grid grid-cols-2 gap-4")}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://placehold.co/400x600"
                alt="placeholder"
                width={400}
                height={600}
                className={cn("w-full rounded-xl object-cover")}
              />
            </motion.div>

            <div>
              <AvailableForWork />
              <Contact />
            </div>
          </div>
        </div>

        <Motivation />
      </div>

      {/* Layout for smaller screens */}
      <div className="block xl:hidden">
        <Toolbox />
        <div className={cn("md:grid md:grid-cols-2 md:gap-4")}>
          <div className={cn("md:order-2")}>
            <AvailableForWork />
            <Contact />
          </div>
          <div className={cn("md:order-1")}>
            <Motivation />
          </div>
        </div>
      </div>

      <Testimonials />
    </main>
  )
}
