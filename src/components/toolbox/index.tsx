"use client"

import InfiniteCarousel from "@/components/infinite-carousel"
import Tile from "@/components/tile/Tile"
import { FaFigma } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandTypescript } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"
import { DiVisualstudio } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { TbSql } from "react-icons/tb"
import { FaGithub } from "react-icons/fa"
import { FaDocker } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"

export default function Toolbox() {
  const toolList = [
    <FaHtml5 size={44} strokeWidth={1} />,
    <FaCss3 size={44} strokeWidth={1} />,
    <IoLogoJavascript size={44} strokeWidth={1} />,
    <TbBrandTypescript size={44} strokeWidth={1} />,
    <FaReact size={44} strokeWidth={1} />,
    <RiNextjsFill size={44} strokeWidth={1} />,
    <RiTailwindCssFill size={44} strokeWidth={1} />,
    <FaNodeJs size={44} strokeWidth={1} />,
    <TbBrandCSharp size={44} strokeWidth={1} />,
    <SiMongodb size={44} strokeWidth={1} />,
    <TbSql size={44} strokeWidth={1} />,
    <FaDocker size={44} strokeWidth={1} />,
    <FaGithub size={44} strokeWidth={1} />,
    <VscVscode size={44} strokeWidth={1} />,
    <DiVisualstudio size={44} strokeWidth={1} />,
    <FaFigma size={44} strokeWidth={1} />,
  ]

  return (
    <Tile transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-semibold">Toolbox</h2>

      <InfiniteCarousel list={toolList} carouselClassname="h-22" />
    </Tile>
  )
}
