import aboutImgs from "../../assets/images/about";
import { TypeId } from "../../types";

export function AboutSection({id}:TypeId) {
  return (
    <main id={id} className=" min-h-dvh py-4 relative  overflow-hidden flex flex-col items-center justify-center lg:justify-evenly bg-white">
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <h3 className="title ">Fugiat quo</h3>
        <p className="font-semibold min-w-72 max-w-xl px-4 md:px-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto lg:grid-cols-3 lg:gap-4">

        <article className=" flex flex-col justify-center items-center gap-2 text-center hover:shadow-md cursor-pointer ">
          <img src={aboutImgs.img1} alt=""
          className="size-10" />
          <h4 className="font-title text-xl font-bold capitalize text-slate-800 ">Consequuntur</h4>
          <p className="max-w-[300px] lg:max-w-[350px] text-neutral-500" >Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        </article>

        <article className=" flex flex-col justify-center items-center gap-2 text-center hover:shadow-md cursor-pointer">
          <img src={aboutImgs.img2} alt=""
          className="size-10" />
          <h4 className="font-title text-xl font-bold capitalize text-slate-800 ">Voluptatem</h4>
          <p className="max-w-[300px] lg:max-w-[350px] text-neutral-500" >Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>
        </article>

        <article className=" flex flex-col justify-center items-center gap-2 text-center hover:shadow-md cursor-pointer">
          <img src={aboutImgs.img3} alt=""
          className="size-10" />
          <h4 className="font-title text-xl font-bold capitalize text-slate-800 ">Quisquam</h4>
          <p className="max-w-[300px] lg:max-w-[350px] text-neutral-500" >Quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
        </article>

        <article className=" flex flex-col justify-center items-center gap-2 text-center hover:shadow-md cursor-pointer">
          <img src={aboutImgs.img4} alt=""
          className="size-10" />
          <h4 className="font-title text-xl font-bold capitalize text-slate-800 ">Aliquid</h4>
          <p className="max-w-[300px] lg:max-w-[350px] text-neutral-500" >Quis autem vel eum iure reprehenderit voluptate velit esse quam nihil</p>
        </article>

        <article className=" flex flex-col justify-center items-center gap-2 text-center hover:shadow-md cursor-pointer">
          <img src={aboutImgs.img5} alt=""
          className="size-10" />
          <h4 className="font-title text-xl font-bold capitalize text-slate-800 ">Excepteur</h4>
          <p className="max-w-[300px] lg:max-w-[350px] text-neutral-500" >Sint occaecat cupidatat non proident culpa qui officia deserunt mollit anim</p>
        </article>

        <article className="  flex flex-col justify-center items-center gap-2 text-center hover:shadow-md cursor-pointer ">
          <img src={aboutImgs.img6} alt=""
          className="size-10" />
          <h4 className="font-title text-xl font-bold capitalize text-slate-800 ">Accusamus</h4>
          <p className="max-w-[300px] lg:max-w-[350px] text-neutral-500" >Odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
        </article>
      </section>
        <div className="z-10 absolute size-[46px] rounded-full bg-gradient-to-r to-[#3023ae] from-[#c86dd7] -bottom-5 -right-5 rotate-12
        md:-bottom-6 md:left-[30%] " >
      </div>

    </main>
  )
}