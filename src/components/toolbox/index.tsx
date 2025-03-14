"use client"

import Tile from "@/components/tile/Tile"
import { Figma } from "lucide-react"
import { RiNextjsFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandTypescript } from "react-icons/tb"
import InfiniteCarousel from "@/components/infinite-carousel"

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

  return (
    <Tile transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-semibold">Toolbox</h2>

      <InfiniteCarousel list={toolList} carouselClassname="h-22" />
    </Tile>
  )
}
