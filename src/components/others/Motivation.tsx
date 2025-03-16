"use client"

import ErrorTile from "@/components/error/ErrorTile"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Motivation() {
  const isXl = useMediaQuery("xl")

  if (isXl === undefined || typeof isXl !== "boolean") {
    return <ErrorTile message="Please try again later." />
  }

  return (
    <Tile className={cn("flex flex-col gap-4 md:h-[580px] my-0 py-8", "xl:my-4 xl:h-fit")} transitionFrom={isXl ? "right" : "left"}>
      <h2 className="uppercase text-3xl font-medium">Motivation</h2>

      <p className="text-foreground-secondary h-[336px] overflow-y-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et
        consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in
        volutpat eros, eget sollicitudin leo. Praesent consectetur egestas tempus. Etiam in finibus
        nibh. Mauris posuere dignissim leo ac consectetur. Duis id dui pretium, fermentum lorem
        pellentesque, mollis eros. Donec ut vestibulum dui, non viverra nibh. Duis ultricies
        ultrices lectus, eu rhoncus orci molestie in. Quisque scelerisque, neque facilisis malesuada
        sodales, mi ipsum auctor leo, ac luctus lacus neque in risus.
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
