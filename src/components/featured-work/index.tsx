"use client"

import ErrorTile from "@/components/error/ErrorTile"
import ProjectTile from "@/components/featured-work/ProjectTile"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { featuredProjects } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function FeaturedWork() {
  const isMd = useMediaQuery("md")
  const isXl = useMediaQuery("xl")

  if (
    isMd === undefined ||
    isXl === undefined ||
    typeof isMd !== "boolean" ||
    typeof isXl !== "boolean"
  ) {
    return <ErrorTile message="Please try again later." />
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 max-w-[400px] mx-auto",
        "md:max-w-screen-2xl",
        "2xl:grid 2xl:grid-cols-3 2xl:gap-4"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          "md:grid md:grid-cols-2 md:gap-4",
          "2xl:basis-2/3 2xl:col-span-2"
        )}
      >
        <div
          className={cn(
            "md:h-[470px] md:rounded-xl md:overflow-hidden md:flex md:flex-col md:gap-4",
            "2xl:h-[436px]"
          )}
        >
          <Tile className={cn("m-0 mb-4 pb-6", "md:mb-0")} transitionFrom="left">
            <h2 className="uppercase text-3xl text-center italic font-semibold">Featured Work</h2>
          </Tile>

          <ProjectTile
            project={isMd ? featuredProjects[1] : featuredProjects[0]}
            transitionFrom={isXl ? "left" : "bottom"}
            className={cn("h-[368px]", "2xl:h-[334px]")}
          />
        </div>

        <ProjectTile
          project={isMd ? featuredProjects[0] : featuredProjects[1]}
          className={cn("h-[350px] overflow-hidden rounded-xl", "md:h-[470px]", "2xl:h-[436px]")}
          transitionFrom={isXl ? "bottom" : "right"}
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-4",
          "md:grid md:grid-cols-2 md:gap-4",
          "2xl:flex 2xl:flex-col 2xl:basis-1/3 2xl:gap-4"
        )}
      >
        <ProjectTile
          project={featuredProjects[2]}
          transitionFrom={isXl ? "right" : "left"}
          className={cn("h-[210px]", "2xl:overflow-hidden 2xl:rounded-xl")}
        />
        <ProjectTile
          project={featuredProjects[3]}
          transitionFrom="right"
          className={cn("h-[210px]")}
        />
      </div>
    </div>
  )
}
