import { FaPlayCircle } from "react-icons/fa";

import painting from "../../assets/images/painting.png"
import { Accordion } from "./Accordion";
import { TypeId } from "../../types";

export function FeaturesSection({id}:TypeId) {
  return (
    <section id={id} className="bg-white px-4 py-6 md:flex md:items-center md:justify-center ">
      <article className="pr-0 md:pl-[10%] flex flex-col gap-5 w-full">
        <div className="md:pt-6 ">
          <h5 className="text-lg font-bold uppercase font-title text-gray-800">Quis autem</h5>
          <h3 className="text-4xl font-bold font-title text-gray-800 md:my-5 md:text-6xl">Corporis suscipit <br />laboriosam</h3>
        </div>
        {/* DROP DOWN */}
        <div>
          <div>
            <Accordion />
            <Accordion />
            <Accordion />
          </div>

        </div>
      </article>
      {/* IMAGE/VIDEO SECTION*/}
      <article className="relative w-full">
        <img src={painting} alt="Painting" className="w-full translate-x-4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:left-0"><FaPlayCircle className="text-white bg-[#c86dd7] rounded-full size-14 hover:scale-110 duration-200 " /></div>
      </article>
      {/* PLAY BUTTON */}
    </section>
  )
}