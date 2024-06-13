
import { FeedbackCard } from "./FeedbackCard";
import { FaReact } from "react-icons/fa";
import { SiVite,SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TypeId } from "../../types";

export function FeedbacksSection({id}:TypeId) {
  return (
    <main id={id} className="min-h-dvh bg-slate-50 flex flex-col gap-6 px-4 justify-around items-center text-center md:pt-10 ">
      <h2 className="title mt-10">Officis debitis</h2>
      <p className="font-semibold max-w-2xl">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella.</p>

      <section className="flex flex-col gap-4 md:flex-row md:gap-7">
        <FeedbackCard img="https://picsum.photos/200/200" name="Evelyn Allen" text="Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
        <FeedbackCard img="https://picsum.photos/id/1/200/200" name="Evelyn Allen" text="Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
        <FeedbackCard img="https://picsum.photos/id/12/200/200" name="Evelyn Allen" text="Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" />
      </section>

      <section className="flex  justify-around w-full opacity-50 *:size-16 py-4 md:flex-row">
        <SiTypescript />
        <FaReact />
        <SiVite />
        <RiTailwindCssFill />
      </section>
    </main>
  )
}