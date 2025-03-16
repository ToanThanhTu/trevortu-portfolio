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
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
      <header className={cn("w-full fixed top-4 z-50 min-w-[380px]")}>
        <div className="2xl:max-w-screen-xl 2xl:mx-auto">
          <div
            className={cn(
              "uppercase bg-background-primary mx-4 p-5 text-foreground-primary border border-stroke rounded-xl h-20",
              "transition-[height] duration-300 ease-in-out",
              isMenuOpen ? "h-60 md:h-20" : ""
            )}
          >
            <div className={cn("flex items-center justify-between gap-4")}>
              <Link href="/" className="text-2xl">
                <span className="italic font-base">Trevor</span>
                <span className="font-semibold">Portfolio</span>
              </Link>

              {/* Mobile menu button */}
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn("p-0 block", "md:hidden")}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className={"size-8"} strokeWidth={1} />
                  ) : (
                    <Menu className="size-8" strokeWidth={1} />
                  )}
                </motion.div>
              </Button>

              {/* Bigger screens navigation */}
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
                "py-4 transition-all duration-300 ease-in-out",
                isMenuOpen ? "opacity-100" : "opacity-0",
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
          </div>
        </div>
      </header>
    </motion.div>
  )
}
