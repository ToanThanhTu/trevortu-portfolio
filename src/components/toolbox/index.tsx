"use client"

import Playwright from "@/components/icons/Playwright"
import InfiniteCarousel from "@/components/infinite-carousel"
import Tile from "@/components/tile"
import type { IconType } from "react-icons"
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import {
  SiClaude,
  SiCypress,
  SiDotnet,
  SiExpress,
  SiGithubactions,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiRedux,
  SiReplit,
  SiTypeorm,
  SiVercel,
} from "react-icons/si"
import { TbBrandAzure, TbBrandCSharp, TbBrandTypescript, TbSql } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"

/** Name doubles as the React key, so each must be unique. */
const tools: { name: string; Icon: IconType }[] = [
  // Languages
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3 },
  { name: "JavaScript", Icon: IoLogoJavascript },
  { name: "TypeScript", Icon: TbBrandTypescript },
  { name: "Python", Icon: SiPython },
  { name: "C#", Icon: TbBrandCSharp },
  { name: "Java", Icon: FaJava },
  // Frontend
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: RiNextjsFill },
  { name: "Redux", Icon: SiRedux },
  { name: "Tailwind CSS", Icon: RiTailwindCssFill },
  // Backend
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express", Icon: SiExpress },
  { name: "NestJS", Icon: SiNestjs },
  { name: ".NET", Icon: SiDotnet },
  // Databases
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "SQL", Icon: TbSql },
  { name: "TypeORM", Icon: SiTypeorm },
  // DevOps & Cloud
  { name: "Docker", Icon: FaDocker },
  { name: "AWS", Icon: FaAws },
  { name: "Azure", Icon: TbBrandAzure },
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: FaGithub },
  { name: "GitHub Actions", Icon: SiGithubactions },
  // Testing
  { name: "Jest", Icon: SiJest },
  { name: "Cypress", Icon: SiCypress },
  { name: "Playwright", Icon: Playwright },
  // AI & Tools
  { name: "Claude", Icon: SiClaude },
  { name: "Replit", Icon: SiReplit },
  { name: "VS Code", Icon: VscVscode },
  { name: "Figma", Icon: FaFigma },
]

export default function Toolbox() {
  const toolList = tools.map(({ name, Icon }) => <Icon key={name} size={44} strokeWidth={1} />)

  return (
    <Tile transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-semibold">Toolbox</h2>

      <InfiniteCarousel list={toolList} carouselClassname="h-22" />
    </Tile>
  )
}
