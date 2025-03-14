"use client"

import ProjectTile from "@/components/featured-work/ProjectTile"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { featuredProjects } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function FeaturedWork() {
  const isXl = useMediaQuery("xl")
  // console.log("isXl:", isXl)

  return (
    <div className={cn("flex flex-col gap-4 max-w-[400px] mx-auto", "md:max-w-screen-xl", "xl:flex xl:flex-row xl:gap-4")}>
      <div className={cn("flex flex-col gap-4", "md:grid md:grid-cols-2 md:gap-4", "xl:basis-2/3")}>
        <div
          className={cn(
            "md:h-[470px] md:rounded-xl md:overflow-hidden md:flex md:flex-col md:gap-4",
            "xl:h-[430px]"
          )}
        >
          <Tile className={cn("m-0 mb-4", "md:mb-0")} transitionFrom="left">
            <h2 className="uppercase text-4xl text-center italic font-semibold">Featured Work</h2>
          </Tile>

          <ProjectTile project={featuredProjects[0]} transitionFrom={isXl ? "left" : "bottom"} className={cn("lg:h-[360px]", "xl:h-[315px]")} />
        </div>

        <ProjectTile
          project={featuredProjects[1]}
          className={cn("h-[350px] overflow-hidden rounded-xl", "md:h-[470px]", "xl:h-[430px]")}
          transitionFrom={isXl ? "bottom" : "right"}
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-4",
          "md:grid md:grid-cols-2 md:gap-4",
          "xl:flex xl:flex-col xl:basis-1/3 xl:gap-4"
        )}
      >
        <ProjectTile project={featuredProjects[2]} transitionFrom={isXl ? "right" : "left"} className={cn("xl:overflow-hidden xl:rounded-xl")} />
        <ProjectTile project={featuredProjects[3]} transitionFrom="right" />
      </div>
    </div>
  )
}
