import JobDescription from "@/components/about/experience/JobDesciption"
import Tile from "@/components/tile/Tile"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <Tile>
      <h1 className="uppercase text-3xl font-semibold border-b-2 border-stroke py-2">Experience</h1>

      <div className="py-2">
        {experience.map((job, index) => (
          <JobDescription key={index} {...job} />
        ))}
      </div>
    </Tile>
  )
}
