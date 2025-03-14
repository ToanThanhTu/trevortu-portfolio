"use client"

import ImageWithMotion from "@/components/image-with-motion"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { allProjects } from "@/lib/data"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function ProjectPage() {
  const isXl = useMediaQuery("xl")

  const pathname = usePathname()
  const slug = pathname.split("/").pop()

  const project: Project | undefined = allProjects.find((project) => project.slug === slug)

  if (!slug || !project) {
    return (
      <main className="h-[80vh] flex justify-center items-center">
        <Tile transitionFrom="bottom" className="text-foreground-primary text-3xl text-center">Project not found :(</Tile>
      </main>
    )
  }

  return (
    <main className={cn("grid grid-cols-1 gap-4 my-4", "xl:grid-cols-3")}>
      <div className={cn("flex flex-col gap-4", "xl:col-span-2")}>
        <Tile className={cn("m-0")} transitionFrom={isXl ? "left" : "right"}>
          <div>
            <h1 className="uppercase text-4xl font-medium">{project.title}</h1>
            <h2 className="italic text-2xl">{project.type}</h2>
          </div>
        </Tile>

        <ImageWithMotion
          src={project.images[0]}
          alt={`${project.title} Photo`}
          width={0}
          height={0}
          containerClassName={cn("md:h-[500px]", "xl:h-[565px]")}
          transitionFrom="left"
        />
      </div>

      <div className={cn("flex flex-col gap-4")}>
        <Tile className={cn("m-0")} transitionFrom="right">
          <p>{project.longDescription}</p>
        </Tile>

        <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2", "xl:grid-cols-1")}>
          <ImageWithMotion
            src={project.images[1]}
            alt={`${project.title} Photo`}
            width={0}
            height={0}
            transitionFrom="left"
          />
          <ImageWithMotion
            src={project.images[2]}
            alt={`${project.title} Photo`}
            width={0}
            height={0}
            transitionFrom="right"
          />
        </div>
      </div>
    </main>
  )
}
