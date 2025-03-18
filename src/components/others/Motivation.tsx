"use client"

import ErrorTile from "@/components/error/ErrorTile"
import Tile from "@/components/tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Motivation() {
  const isXl = useMediaQuery("xl")

  if (isXl === undefined || typeof isXl !== "boolean") {
    return <ErrorTile message="Please try again later." />
  }

  return (
    <Tile
      className={cn("flex flex-col gap-4 md:h-[580px] my-0 py-8", "xl:my-4 xl:h-fit")}
      transitionFrom={isXl ? "right" : "left"}
    >
      <h2 className="uppercase text-3xl font-medium">Motivation</h2>

      <p className="text-sm text-foreground-secondary h-[336px] overflow-y-auto">
        I am passionate about building high-quality, scalable web applications that enhance user
        experience and drive business success. My motivation comes from solving complex problems,
        optimizing performance, and continuously learning new technologies. Whether developing
        intuitive user interfaces, designing efficient backend systems, or integrating APIs, I
        thrive on creating seamless digital experiences. I believe in writing clean, maintainable
        code and leveraging modern frameworks to build innovative solutions. My goal is to
        contribute to projects that make a meaningful impact while growing as a developer in a
        collaborative and fast-paced environment.
      </p>

      <Image
        src="/signature.png"
        alt="placeholder"
        width={801}
        height={240}
        className="object-contain w-40 self-end mx-4"
      />
    </Tile>
  )
}
