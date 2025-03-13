"use client"

import Tile from "@/components/tile/Tile"
import { Figma } from "lucide-react"
import { RiNextjsFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandTypescript } from "react-icons/tb"
import { animate, motion, useMotionValue } from "motion/react"
import useMeasure from "react-use-measure"
import { useEffect } from "react"

export default function Toolbox() {
  const toolList = [
    <IoLogoJavascript size={44} strokeWidth={1} />,
    <TbBrandTypescript size={44} strokeWidth={1} />,
    <Figma size={44} strokeWidth={1} />,
    <RiNextjsFill size={44} strokeWidth={1} />,
    <FaReact size={44} strokeWidth={1} />,
    <IoLogoJavascript size={44} strokeWidth={1} />,
    <FaReact size={44} strokeWidth={1} />,
    <FaReact size={44} strokeWidth={1} />,
    <FaReact size={44} strokeWidth={1} />,
    <FaReact size={44} strokeWidth={1} />,
  ]

  let [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 8

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
  })

  return (
    <Tile>
      <h2 className="uppercase text-3xl font-semibold">Toolbox</h2>

      <div className="relative border-x border-stroke overflow-hidden h-20 mt-4">
        <motion.ul
          className="absolute left-0 flex gap-4 z-10"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...toolList, ...toolList].map((tool, index) => (
            <Tile className="m-0 p-0 size-20 flex items-center justify-center" key={index}>
              {tool}
            </Tile>
          ))}
        </motion.ul>
      </div>
    </Tile>
  )
}
