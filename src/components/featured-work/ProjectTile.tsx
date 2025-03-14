import Tile from "@/components/tile/Tile"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
  project: Project
  transitionFrom?: "left" | "right" | "bottom"
  className?: string
}

export default function ProjectTile({
  project: { title, type, description, image, width, height, url },
  transitionFrom,
  className,
}: Props) {
  return (
    <Link href={url} target="_blank">
      <Tile className={cn("p-0 m-0", className)} transitionFrom={transitionFrom}>
        <Image
          src={image}
          alt={`Project ${title} Photo`}
          width={width}
          height={height}
          className={cn("rounded-xl object-cover w-full")}
        />
      </Tile>
    </Link>
  )
}
