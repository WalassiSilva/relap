import { Footer } from "../components/Home/Footer";
import { Hero } from "../components/Home/Hero";
import { Header } from "../components/Home/Header";
import { BgCircles } from "../components/Home/BgCircles";


export function Home() {
  return (
    <div className="z-20 relative bg-home bg-cover bg-no-repeat w-[100vw] h-[100vh] overflow-hidden lg:px-[10%]">

      <div className="">
        <Header />
        <Hero />
        <Footer />
      </div>
      <BgCircles />
    </div>
  )
}
