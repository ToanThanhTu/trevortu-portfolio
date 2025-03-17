"use client"

import ErrorTile from "@/components/error/ErrorTile"
import Socials from "@/components/socials"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Footer() {
  const isMd = useMediaQuery("md")

  if (isMd === undefined || typeof isMd !== "boolean") {
    return <ErrorTile message="Please try again later." />
  }

  return (
    <footer className={cn("w-full")}>
      <div className={cn("w-full", "2xl:max-w-screen-xl 2xl:mx-auto")}>
        <div className={cn("text-foreground-primary mx-4", "md:flex md:items-center md:gap-4")}>
          <Socials containerClassName={cn("md:order-2")} />
          <Tile
            containerClassName={cn("md:order-1 grow")}
            className={cn("md:my-0")}
            transitionFrom={isMd ? "bottom" : "left"}
          >
            <p className="text-foreground-secondary">
              © 2025. All Rights Reserved. Designed & Built by{" "}
              <Link href="https://github.com/ToanThanhTu" target="_blank" className="text-white">
                Trevor Tu
              </Link>
            </p>
          </Tile>
        </div>
      </div>
    </footer>
  )
}
