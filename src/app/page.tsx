import type { Metadata } from "next"
import About from "@/components/about"
import Contact from "@/components/contact"
import FeaturedWork from "@/components/featured-work"
import ImageWithMotion from "@/components/image-with-motion"
import AvailableForWork from "@/components/others/AvailableForWork"
import Motivation from "@/components/others/Motivation"
import RandomQuotes from "@/components/others/RandomQuotes"
import Testimonials from "@/components/testimonials"
import Toolbox from "@/components/toolbox"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <main>
      <About />
      <FeaturedWork />

      {/* One tree for every breakpoint, so each section (and the #contact anchor) renders once. */}
      <div className={cn("xl:grid xl:grid-cols-3 xl:gap-4")}>
        <div className={cn("xl:col-span-2")}>
          <Toolbox />

          <div className={cn("md:grid md:grid-cols-2 md:gap-4")}>
            <ImageWithMotion
              src="/coffee-laptop.webp"
              alt="Coffee and laptop photo"
              width={400}
              height={600}
              transitionFrom="left"
              containerClassName={cn("hidden", "xl:block")}
              imageClassName={cn("h-[610px]")}
            />

            <div id="contact" className={cn("scroll-mt-28", "md:order-2", "xl:order-none")}>
              <AvailableForWork />
              <Contact />
            </div>

            <div className={cn("md:order-1", "xl:hidden")}>
              <Motivation />
            </div>
          </div>
        </div>

        <div className={cn("hidden", "xl:block")}>
          <Motivation />
          <RandomQuotes />
        </div>
      </div>

      <Testimonials />
    </main>
  )
}
