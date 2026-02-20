"use client"

import InfiniteCarousel from "@/components/infinite-carousel"
import Tile from "@/components/tile"
// Languages
import { FaHtml5, FaCss3, FaNodeJs, FaDocker, FaGithub, FaJava, FaAws } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandTypescript, TbBrandCSharp, TbSql, TbBrandAzure } from "react-icons/tb"
import { SiPython, SiRedux, SiNestjs, SiExpress, SiDotnet, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiJest, SiCypress } from "react-icons/si"
// Frontend
import { FaReact } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
// Tools
import { VscVscode } from "react-icons/vsc"
import { FaFigma } from "react-icons/fa"

export default function Toolbox() {
  const toolList = [
    // Languages
    <FaHtml5 size={44} strokeWidth={1} />,
    <FaCss3 size={44} strokeWidth={1} />,
    <IoLogoJavascript size={44} strokeWidth={1} />,
    <TbBrandTypescript size={44} strokeWidth={1} />,
    <SiPython size={44} strokeWidth={1} />,
    <TbBrandCSharp size={44} strokeWidth={1} />,
    <FaJava size={44} strokeWidth={1} />,
    // Frontend
    <FaReact size={44} strokeWidth={1} />,
    <RiNextjsFill size={44} strokeWidth={1} />,
    <SiRedux size={44} strokeWidth={1} />,
    <RiTailwindCssFill size={44} strokeWidth={1} />,
    // Backend
    <FaNodeJs size={44} strokeWidth={1} />,
    <SiExpress size={44} strokeWidth={1} />,
    <SiNestjs size={44} strokeWidth={1} />,
    <SiDotnet size={44} strokeWidth={1} />,
    // Databases
    <SiPostgresql size={44} strokeWidth={1} />,
    <SiMysql size={44} strokeWidth={1} />,
    <SiMongodb size={44} strokeWidth={1} />,
    <SiRedis size={44} strokeWidth={1} />,
    <TbSql size={44} strokeWidth={1} />,
    // DevOps & Cloud
    <FaDocker size={44} strokeWidth={1} />,
    <FaAws size={44} strokeWidth={1} />,
    <TbBrandAzure size={44} strokeWidth={1} />,
    <FaGithub size={44} strokeWidth={1} />,
    // Testing
    <SiJest size={44} strokeWidth={1} />,
    <SiCypress size={44} strokeWidth={1} />,
    // Tools
    <VscVscode size={44} strokeWidth={1} />,
    <FaFigma size={44} strokeWidth={1} />,
  ]

  return (
    <Tile transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-semibold">Toolbox</h2>

      <InfiniteCarousel list={toolList} carouselClassname="h-22" />
    </Tile>
  )
}
