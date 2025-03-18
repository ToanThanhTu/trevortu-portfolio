import InfiniteCarousel from "@/components/infinite-carousel"
import Tile from "@/components/tile"
import { testimonials } from "@/lib/data"
import Image from "next/image"

export default function Testimonials() {
  return (
    <Tile transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-medium">Testimonials</h2>

      <InfiniteCarousel
        list={testimonials.map(({ name, title, testimonial, companyLogo }) => (
          <div className="">
            <div className="flex justify-between items-center gap-4 pb-2 border-b border-stroke">
              <div className="h-18 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-xs text-foreground-secondary">{title}</p>
              </div>
              <Image
                src={companyLogo}
                alt={name}
                width={200}
                height={0}
                className="object-cover w-20"
              />
            </div>
            <p className="mt-2 text-sm text-foreground-secondary">"{testimonial}"</p>
          </div>
        ))}
        carouselClassname="m-0 p-0 h-76"
        carouselTileClassname="h-68 w-80 px-6 py-8 items-start"
      />
    </Tile>
  )
}
