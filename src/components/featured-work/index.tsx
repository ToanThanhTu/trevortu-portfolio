import ProjectTile from "@/components/featured-work/ProjectTile"
import Tile from "@/components/tile/Tile"
import { projects } from "@/lib/data"

export default function FeaturedWork() {
  return (
    <div className="grid gap-4 max-w-[400px] mx-auto">
      <Tile className="m-0">
        <h2 className="uppercase text-4xl text-center italic font-semibold">Featured Work</h2>
      </Tile>

      <ProjectTile project={projects[0]} />
      <ProjectTile project={projects[1]} className="h-[350px] overflow-hidden" />
      <ProjectTile project={projects[2]} />
      <ProjectTile project={projects[3]} />
    </div>
  )
}
