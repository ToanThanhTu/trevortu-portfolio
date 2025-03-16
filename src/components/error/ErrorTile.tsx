import Tile from "@/components/tile/Tile"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
  transitionFrom?: "left" | "right" | "bottom"
  message: string
}

export default function ErrorTile({ className, message }: Props) {
  return (
    <Tile
      className={cn("w-full flex flex-col items-center justify-center", className)}
      transitionFrom="bottom"
    >
      <h2 className={cn("text-3xl")}>Something went wrong :(</h2>
      <p>{message}</p>
    </Tile>
  )
}
