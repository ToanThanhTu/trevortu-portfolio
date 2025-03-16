import ErrorTile from "@/components/error/ErrorTile"
import ImageWithMotion from "@/components/image-with-motion"
import Tile from "@/components/tile/Tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  project: Project
}

export default function ProjectDetails({ project }: Props) {
  const isXl = useMediaQuery("xl")

  if (isXl === undefined || typeof isXl !== "boolean") {
    return <ErrorTile message="Please try again later" />
  }

  return (
    <div className={cn("grid grid-cols-1 gap-4 my-4", "xl:grid-cols-3")}>
      <div className={cn("flex flex-col gap-4", "xl:col-span-2")}>
        <Tile className={cn("m-0")} transitionFrom={isXl ? "left" : "right"}>
          <div>
            <h1 className="uppercase text-4xl font-medium">{project.title}</h1>
            <h2 className="italic text-2xl">{project.type}</h2>
          </div>
        </Tile>

        <ImageWithMotion
          src={project.images[0]}
          alt={`${project.title} Photo`}
          width={1280}
          height={0}
          containerClassName={cn(
            "h-[300px] bg-blue-50 px-8 pt-6",
            "md:h-[500px] md:pt-12 md:px-20",
            "xl:h-[660px]"
          )}
          imageClassName={cn("shadow-[12px_20px_40px_rgba(28,25,23)]")}
          transitionFrom="left"
        />
      </div>

      <div className={cn("flex flex-col gap-4")}>
        <Tile className={cn("m-0", "xl:h-[272px]")} transitionFrom="right">
          <p>{project.longDescription}</p>
        </Tile>

        <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2", "xl:grid-cols-1")}>
          <ImageWithMotion
            src={project.images[1]}
            alt={`${project.title} Photo`}
            width={1200}
            height={0}
            transitionFrom={isXl ? "right" : "left"}
            containerClassName={cn("md:h-[300px]", "xl:h-[250px]")}
          />
          <ImageWithMotion
            src={project.images[2]}
            alt={`${project.title} Photo`}
            width={1200}
            height={0}
            transitionFrom="right"
            containerClassName={cn("md:h-[300px]", "xl:h-[250px]")}
          />
        </div>
      </div>
    </div>
  )
}
