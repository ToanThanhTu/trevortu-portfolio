"use client"

import PlaygroundTile from "@/components/playground/PlaygroundTile"
import Tile from "@/components/tile"
import { playgroundProjects } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Playground() {
  return (
    <section>
      <Tile className={cn("mb-0")} transitionFrom="bottom">
        <h1 className="uppercase text-3xl text-center italic font-semibold">Playground</h1>
        <p className="text-foreground-secondary text-center mt-2">
          Fun interactive experiments and side projects
        </p>
      </Tile>

      <div className={cn("grid grid-cols-1 gap-4 my-4", "md:grid-cols-2", "xl:grid-cols-3")}>
        {playgroundProjects.map((project, index) => (
          <PlaygroundTile project={project} transitionFrom="bottom" key={index} />
        ))}
      </div>
    </section>
  )
}