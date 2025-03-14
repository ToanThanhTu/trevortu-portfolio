"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/shadcn/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
      <header
        className={cn(
          "uppercase fixed top-4 left-4 right-4 mx-auto bg-background-primary py-4 px-5 text-foreground-primary border border-stroke rounded-xl overflow-hidden h-18 z-50",
          "transition-[height] duration-300 ease-in-out",
          isMenuOpen ? "h-58 md:h-18" : "",
          "xl:max-w-[1248px] xl:mx-auto",
        )}
      >
        <div className={cn("flex items-center justify-between gap-4 w-full")}>
          <Link href="/" className="text-2xl">
            <span className="italic font-base">Trevor</span>
            <span className="font-semibold">Portfolio</span>
          </Link>

          {/* Mobile menu button */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn("p-0 block", "md:hidden")}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? (
                <X className={"size-8"} strokeWidth={1} />
              ) : (
                <Menu className="size-8" strokeWidth={1} />
              )}
            </motion.div>
          </Button>

          {/* Desktop navigation */}
          <nav className={cn("hidden", "md:block")}>
            <ul className="flex gap-12 justify-center mx-4">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav
          className={cn(
            "opacity-0",
            "py-4 transition-all duration-300 ease-in-out",
            isMenuOpen ? "opacity-100" : "",
            "md:hidden"
          )}
        >
          <ul className="flex flex-col gap-5 text-2xl">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </motion.header>
  )
}
