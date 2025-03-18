import Tile from "@/components/tile"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Socials({ containerClassName }: { containerClassName?: string }) {
  return (
    <Tile
      className={cn("flex justify-center gap-6 border-none bg-black p-0 m-0", "xl:gap-4")}
      containerClassName={containerClassName}
      transitionFrom="right"
    >
      <Link
        href={"https://www.linkedin.com/in/trevor-tu/"}
        target="_blank"
        className={cn(
          "text-4xl font-bold text-foreground-primary bg-linkedin size-19 rounded-xl flex items-center justify-center transition-colors ease-in-out duration-300",
          "xl:bg-background-primary xl:text-foreground-secondary xl:hover:bg-linkedin xl:hover:text-foreground-primary xl:border xl:border-stroke"
        )}
      >
        in
      </Link>

      <Link
        href="https://github.com/ToanThanhTu"
        target="_blank"
        className={cn(
          "transition-colors ease-in-out duration-300",
          "xl:text-foreground-secondary xl:hover:text-foreground-primary"
        )}
      >
        <FaGithub size={74} />
      </Link>
    </Tile>
  )
}
