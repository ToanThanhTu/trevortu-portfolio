"use client"

import ProjectDetails from "@/components/project"
import RichProjectDetails from "@/components/project/RichProjectDetails"
import Tile from "@/components/tile"
import { allProjects } from "@/lib/data"
import { Project } from "@/lib/types"
import { usePathname } from "next/navigation"

export default function ProjectPage() {
  const pathname = usePathname()
  const slug = pathname.split("/").pop()

  const project: Project | undefined = allProjects.find((project) => project.slug === slug)

  if (!slug || !project) {
    return (
      <main className="h-[80vh] flex justify-center items-center">
        <Tile transitionFrom="bottom" className="text-foreground-primary text-3xl text-center">
          Project not found :(
        </Tile>
      </main>
    )
  }

  const isRichProject = project.sections && project.sections.length > 0

  return (
    <main>
      {isRichProject ? (
        <RichProjectDetails project={project} />
      ) : (
        <ProjectDetails project={project} />
      )}
    </main>
  )
}
