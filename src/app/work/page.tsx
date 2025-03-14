import ProjectTile from "@/components/featured-work/ProjectTile";
import { featuredProjects, otherProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Work() {
  const projects = [...featuredProjects, ...otherProjects];

  return (
    <main className={cn("grid grid-cols-1 gap-4 my-4", "md:grid-cols-2")}>
      {projects.map((project, index) => (
        <ProjectTile project={project} transitionFrom="bottom" key={index} className={cn("md:max-h-[360px]", "lg:max-h-[440px]", "xl:max-h-[500px]")} />
      ))}
    </main>
  )
}
