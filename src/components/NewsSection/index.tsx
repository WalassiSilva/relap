import img1 from "../../assets/images/news/1.png";

export function NewsSection() {
  return (
    <div className="min-h-[calc(100dvh-56px)] bg-[#fdf2ff] flex flex-col py-10 
    md:flex-row md:items-center md:justify-between 
    md:px-[10%] lg:px-[18%]">
      <section className="flex flex-col gap-6 px-4 md:max-w-md">
        <h5 className="font-bold text-slate-800">Nisi ut aliquid</h5>
        <h2 className="title mb-0">Omnis voluptas
          assumenda</h2>
        <p className="font-semibold text-slate-800 max-w-md md:max-w-xl">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
        <div className="mb-12">
          <button className="px-12 py-3 bg-[#C86DD7] rounded-full text-white font-semibold">Our blog</button>
        </div>
      </section>

      <section className="relative text-white px-4">       
          <img src={img1} alt="" className="w-full" />
        <div className="absolute bottom-10 px-8 *:mb-3
         md:*:mb-4 md:*:px-14">
          <h4 className="text-2xl font-bold ">Itaque earum rerum</h4>
          <p className="opacity-50">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</p>
          <div className="flex gap-4 items-center">
            <img src="https://picsum.photos/200" alt=""
              className="rounded-full size-12" />
            <p className="font-semibold">Adaora Azubuike</p>
          </div>
        </div>
      </section>
    </div>
  )
}