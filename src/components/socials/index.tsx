import Tile from "@/components/tile/Tile"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Socials({ containerClassName }: { containerClassName?: string }) {
  return (
    <Tile
      className={cn("flex justify-center gap-6 border-none bg-black p-0 m-0")}
      containerClassName={containerClassName}
      transitionFrom="right"
    >
      <Link
        href={"https://www.linkedin.com/in/trevor-tu/"}
        target="_blank"
        className="text-5xl font-bold text-white bg-linkedin h-20 w-22 rounded-xl flex items-center justify-center"
      >
        in
      </Link>

      <Link href="https://github.com/ToanThanhTu" target="_blank">
        <FaGithub size={74} color="white" />
      </Link>
    </Tile>
  )
}
