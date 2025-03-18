import JobDescription from "@/components/about/experience/JobDesciption"
import Tile from "@/components/tile"
import { experience } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Experience() {
  return (
    <Tile transitionFrom="right" className="py-9">
      <h1 className={cn("uppercase text-3xl font-semibold")}>
        Experience
      </h1>

      <div className={cn("border-y border-stroke", "xl:h-144 xl:overflow-y-auto")}>
        {experience.map((job, index) => (
          <JobDescription key={index} {...job} />
        ))}
      </div>
    </Tile>
  )
}
