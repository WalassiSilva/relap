import { FaPlayCircle } from "react-icons/fa";

import painting from "../../assets/images/painting.png"
import { Accordion } from "./Accordion";

export function FeaturesSection() {



  return (
    <section className="bg-white px-4 py-6">
      <article className="pr-0 flex flex-col - gap-5">
        <div>
          <h5 className="text-lg font-bold uppercase font-title">Quis autem</h5>
          <h3 className="text-4xl font-bold font-title">Corporis suscipit <br />laboriosam</h3>
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
      <article>
        <img src={painting} alt="Painting" className="w-full" />
      </article>
      {/* PLAY BUTTON */}
      <div><FaPlayCircle /></div>
    </section>
  )
}