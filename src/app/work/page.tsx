"use client"

import ProjectTile from "@/components/featured-work/ProjectTile";
import { allProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Work() {
  return (
    <main className={cn("grid grid-cols-1 gap-4 my-4", "md:grid-cols-2")}>
      {allProjects.map((project, index) => (
        <ProjectTile project={project} transitionFrom="bottom" key={index} className={cn("h-80", "md:h-90", "lg:h-100", "xl:pt-10 xl:px-16")} />
      ))}
    </main>
  )
}
