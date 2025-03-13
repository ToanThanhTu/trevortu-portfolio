import About from "@/components/about";
import Contact from "@/components/contact";
import FeaturedWork from "@/components/featured-work";
import AvailableForWork from "@/components/others/AvailableForWork";
import Motivation from "@/components/others/Motivation";
import Toolbox from "@/components/toolbox";

export default function Home() {
  return (
    <main>
      <About />
      <FeaturedWork />
      <Toolbox />
      <AvailableForWork />
      <Contact />
      <Motivation />
    </main>
  )
}
