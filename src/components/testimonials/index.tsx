import InfiniteCarousel from "@/components/infinite-carousel"
import Tile from "@/components/tile/Tile"
import { Testimonial } from "@/lib/types"
import Image from "next/image"

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Fredrick Widjaya",
      title: "Lead Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "https://placehold.co/100x50",
    },
    {
      name: "Kiran Kumar",
      title: "Lead Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "https://placehold.co/100x50",
    },
    {
      name: "Vysakh Shaji",
      title: "Senior Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "https://placehold.co/100x50",
    },
    {
      name: "Fredrick Widjaya",
      title: "Lead Software Engineer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisi id libero luctus.",
      companyLogo: "https://placehold.co/100x50",
    },
  ]

  return (
    <Tile transitionFrom="bottom">
      <h2 className="uppercase text-3xl font-medium">Testimonials</h2>

      <InfiniteCarousel
        list={testimonials.map(({ name, title, testimonial, companyLogo }) => (
          <div className="">
            <div className="flex justify-between items-center gap-4 pb-2 border-b border-stroke">
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-foreground-secondary">{title}</p>
              </div>
              <Image
                src={companyLogo}
                alt={name}
                width={100}
                height={50}
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-foreground-secondary">"{testimonial}"</p>
          </div>
        ))}
        carouselClassname="m-0 p-0 h-76"
        carouselTileClassname="h-68 w-80 p-6"
      />
    </Tile>
  )
}
