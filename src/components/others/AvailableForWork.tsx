import Tile from "@/components/tile/Tile";
import { cn } from "@/lib/utils";
import { GoDotFill } from "react-icons/go";

export default function AvailableForWork() {
  return (
    <Tile className="flex items-center gap-2 relative">
      <GoDotFill className={cn("absolute text-green-400 animate-ping")} size={20} />
      <GoDotFill className={cn("relative text-green-400")} size={20} />
      <h2 className="uppercase text-2xl font-base relative">Available For Work</h2>
    </Tile>
  )
}