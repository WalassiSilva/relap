import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="max-w-[350px]">
              <button onClick={() => setIsOpen(!isOpen)} className={`flex gap-2 border-b-4  ${isOpen ? ' border-purple-400' : 'border-transparent'}`}>
                <p className="text-lg font-semibold font-title">Nam libero tempore</p>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className="overflow-hidden text-gray-400 py-4 ">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
              </div>
            </article>
  )
}