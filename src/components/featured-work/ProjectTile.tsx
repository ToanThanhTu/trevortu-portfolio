import Tile from "@/components/tile/Tile"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
  project: Project
  className?: string
}

export default function ProjectTile({
  project: { title, type, description, image, width, height, url },
  className,
}: Props) {
  return (
    <Link href={url} target="_blank">
      <Tile className={cn("p-0 m-0", className)}>
        <Image
          src={image}
          alt={`Project ${title} Photo`}
          width={width}
          height={height}
          className="rounded-lg object-cover"
        />
      </Tile>
    </Link>
  )
}
