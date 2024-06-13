import img1 from "../../assets/images/people/1.png";
import { TypeId } from "../../types";

export function PeopleSection({id}:TypeId) {
  return (
    <main id={id} className=" relative bg-[#3023AE] text-white overflow-hidden md:flex md:py-2 md:justify-around md:items-center min-h-dvh">
      <section className="md:w-1/3">
        <img src={img1} alt="network image" />
      </section>
      <section className="p-4 flex flex-col gap-8 pb-20 md:w-1/3">
        <h5 className="font-title uppercase font-semibold">Repellendus</h5>
        <h3 className="font-title text-4xl font-bold text-white">Temporibus
          quibusdam</h3>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
        <div className="z-50"><button className="bg-[#ffc300] hover:bg-[#c59b27] rounded-full px-8 py-2 font-semibold ">Our team</button></div>
      </section>

      <div className="absolute bg-gradient-to-r to-[#3023ae] from-[#c86dd7] size-12 rounded-full -top-7 -right-[22px] md:-top-5 md:left-[30%]"></div>
      <div className="absolute bg-gradient-to-r to-[#3023ae] from-[#c86dd7] size-24 rounded-full -bottom-14 -right-10 md:left-[45%] "></div>
      <div className="absolute bg-gradient-to-r to-[#3023ae] from-[#c86dd7] size-80 rounded-full -bottom-56 -left-36 md:-bottom-36 "></div>
      

    </main>
  )
}