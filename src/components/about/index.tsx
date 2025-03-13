import Experience from "@/components/about/experience"
import Tile from "@/components/tile/Tile"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section>
      <Tile transitionFrom="left">
        <h1 className="uppercase text-4xl font-semibold">Trevor Tu</h1>
      </Tile>

      <Tile className="p-0 m-0" transitionFrom="right">
        <Image
          src="https://placehold.co/400x500"
          alt="portrait"
          width={400}
          height={500}
          className="rounded-lg text-foreground-primary"
        />
      </Tile>

      <Tile transitionFrom="left">
        <p className="text-foreground-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et
          consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut
          in volutpat eros, eget sollicitudin leo. Praesent consectetur egestas tempus. Etiam in
          finibus nibh.
        </p>
      </Tile>

      <Link href="mailto:trevor.tu@outlook.com" target="_blank">
        <Tile
          className="flex flex-col justify-between h-60 bg-background-secondary"
          transitionFrom="right"
        >
          <div className="flex justify-between items-center">
            <p className="text-foreground-secondary">Wanna get in touch?</p>
            <ArrowUpRight size={40} />
          </div>
          <h2 className="uppercase text-3xl font-bold">Email me</h2>
        </Tile>
      </Link>

      <Experience />
    </section>
  )
}
