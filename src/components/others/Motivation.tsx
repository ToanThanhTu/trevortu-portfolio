import Tile from "@/components/tile/Tile"
import Image from "next/image"

export default function Motivation() {
  return (
    <Tile>
      <h2 className="uppercase text-3xl font-medium py-2">Motivation</h2>

      <p className="py-2 text-foreground-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis et
        consectetur consectetur, purus elit porta risus, nec tincidunt lorem ante quis metus. Ut in
        volutpat eros, eget sollicitudin leo. Praesent consectetur egestas tempus. Etiam in finibus
        nibh. Mauris posuere dignissim leo ac consectetur. Duis id dui pretium, fermentum lorem
        pellentesque, mollis eros. Donec ut vestibulum dui, non viverra nibh. Duis ultricies
        ultrices lectus, eu rhoncus orci molestie in. Quisque scelerisque, neque facilisis malesuada
        sodales, mi ipsum auctor leo, ac luctus lacus neque in risus.
      </p>

      <Image src="https://placehold.co/300x200" alt="placeholder" width={300} height={200} className="object-cover h-20 my-2" />
    </Tile>
  )
}
