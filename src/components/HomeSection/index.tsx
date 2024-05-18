import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { BgCircles } from "./BgCircles";


export function HomeSection() {
  return (
    <div className="bg-gradient-to-bl from-[#3023AE] to-[#C86DD7] z-20 relative bg-cover bg-no-repeat w-[100dvw-] h-[calc(100dvh-56px)] overflow-hidden lg:px-[10%]">
      <div className="">
        <Hero />
        <Footer />
      </div>
      <BgCircles />
    </div>
  )
}
