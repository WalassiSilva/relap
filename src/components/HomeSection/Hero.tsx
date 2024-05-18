import hero from "../../assets/images/hero.png"

export function Hero() {
  return (
    <main className="overflow-hidden p-3 md:flex md:justify-between">
      <section className="container flex flex-col gap-6 px-2 text-white 
      md:px-4 lg:px-10 md:gap-8 ">
        <h1 className="text-5xl text-white font-bold w-4/5 
        md:mt-40 md:text-7xl">Omnis <br />Voluptas</h1>
        <p className="max-w-[364px]">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
        <div>
          <button className="bg-[#ffc300] px-10 py-2 rounded-full font-semibold hover:bg-yellow-500">Explore</button>
        </div>
      </section>
      <section>
        <img className="ml-7 z-20 mt-20 md:m-0 md:size-full"
          src={hero} alt="Hero image of a laptop" />
      </section>
    </main>
  )
}