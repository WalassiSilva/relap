import work1 from "../../assets/images/works/work1.png";
import work2 from "../../assets/images/works/work2.png";
import work3 from "../../assets/images/works/work3.png";
import { TypeId } from "../../types";


export function WorksSection({id}:TypeId) {
  return (
    <section id={id} className="wrapper bg-[#FDF2FF] md:scroll-mt-[56px] min-h-dvh">
      <h5 className="text-lg font-bold text-slate-800 mb-6 md:mb-10 ">NISI UT ALIQUID</h5>
      <div className="lg:flex ">
        <article className="lg:w-1/2 self-start">
          <h3 className="title">Ullam corporis <br />suscipit</h3>
        </article>
        <article className="lg:w-1/2">
          <p className="text-neutral-500">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </article>
      </div>

      <div className="flex flex-col flex-wrap justify-between text-neutral-500 md:mt-10">
        <nav className="mb-10">
          <button className="btn-work">Quis Autem</button>
          <button className="btn-work">Reprehenderit</button>
          <button className="btn-work">Voluptate</button>
          <button className="btn-work">Molestiae</button>
          <button className="btn-work">Consequator</button>
        </nav>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="relative group ">
            <img src={work1} alt="" className="" />
            <div className="work-card hidden group-hover:flex ">
              <h3 className="text-white capitalize font-bold text-2xl">title</h3>
              <h4 className="capitalize text-white/80">subtitle</h4>
            </div>
          </div>
          <div className="relative group">
            <img src={work2} alt="" className="" />
            <div className="work-card group-hover:flex">
              <h3 className="text-white capitalize font-bold text-2xl ">title</h3>
              <h4 className="capitalize text-white/80">subtitle</h4>
            </div>
          </div>
          <div className="relative group">
            <img src={work3} alt="" className="" />
            <div className="work-card group-hover:flex">
              <h3 className="text-white capitalize font-bold text-2xl">title</h3>
              <h4 className="capitalize text-white/80">subtitle</h4>
            </div>
          </div>

        </div>
        <div className="self-center my-10"><button className="bg-[#c86dd7] hover:bg-[#993ea7] text-white font-semibold rounded-full px-10 py-2">All Works</button></div>
      </div>
    </section>
  )
}