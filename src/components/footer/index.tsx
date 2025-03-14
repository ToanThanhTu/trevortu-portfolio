"use client"

import Socials from "@/components/socials"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Footer() {
const isMd = useMediaQuery("md")
  
  return (
    <footer className={cn("text-foreground-primary mx-4", "md:flex md:items-center md:gap-4")}>
      <Socials containerClassName={cn("md:order-2")} />
      <Tile containerClassName={cn("md:order-1 grow")} className={cn("md:my-0")} transitionFrom={isMd ? "bottom" : "left"}>
        <p className="text-foreground-secondary">
          © 2024. All Rights Reserved. Designed & Built by{" "}
          <Link href="https://github.com/ToanThanhTu" target="_blank" className="text-white">
            Trevor Tu
          </Link>
        </p>
      </Tile>
    </footer>
  )
}
