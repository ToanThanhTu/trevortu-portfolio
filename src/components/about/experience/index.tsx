import JobDescription from "@/components/about/experience/JobDesciption"
import Tile from "@/components/tile/Tile"
import { experience } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Experience() {
  return (
    <Tile transitionFrom="right">
      <h1 className={cn("uppercase text-3xl font-semibold border-b-2 border-stroke py-2")}>
        Experience
      </h1>

      <div className={cn("border-b border-stroke", "xl:h-144 xl:overflow-y-auto")}>
        {experience.map((job, index) => (
          <JobDescription key={index} {...job} />
        ))}
      </div>
    </Tile>
  )
}
