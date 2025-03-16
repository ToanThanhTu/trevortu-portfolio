"use client"

import Tile from "@/components/tile/Tile"
import { cn } from "@/lib/utils"
import { animate, useMotionValue } from "motion/react"
import { motion } from "motion/react"
import React, { PropsWithChildren, useEffect } from "react"
import useMeasure from "react-use-measure"

interface Props {
  list: React.ReactNode[]
  carouselClassname?: string
  carouselTileClassname?: string
}

export default function InfiniteCarousel({
  list,
  carouselClassname,
  carouselTileClassname,
}: PropsWithChildren<Props>) {
  let [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 8

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
  })

  return (
    <div
      className={cn(
        `relative border-x border-stroke overflow-hidden mt-4 flex items-center`,
        carouselClassname
      )}
    >
      <motion.ul className="absolute left-0 flex gap-4 z-10" ref={ref} style={{ x: xTranslation }}>
        {[...list, ...list].map((item, index) => (
          <Tile
            className={cn(
              `flex items-center justify-center`,
              "m-0 p-5",
              "[&_svg]:size-9",
              "[&_svg]:shrink-0",
              carouselTileClassname
            )}
            key={index}
          >
            {item}
          </Tile>
        ))}
      </motion.ul>
    </div>
  )
}
