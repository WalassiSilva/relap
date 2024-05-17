
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "./NavLinks";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="flex justify-between text-white md:py-4">
        <ul className="hidden w-full md:flex gap-5">
          <NavLinks src="home" />
          <NavLinks src="features" />
          <NavLinks src="works" />
          <NavLinks src="about" />
          <NavLinks src="people" />
          <NavLinks src="news" />
          <button className="ml-32 px-10 py-1 rounded-full border border-zinc-500 hover:border-pink-500  ">Contact Us</button>
        </ul>
        <div className="md:hidden">
          <button className="" onClick={toggleNavbar}>{!isOpen ? <FaBars className="size-6 text-pink-400" /> : <FaTimes className="text-pink-400 size-6"/>}</button>
        </div>
      </div >

      {isOpen && (
        <div className="md:hidden text-black flex basis-full flex-col items-end">
          <ul className=" flex flex-col items-center gap-5">
            <NavLinks src="home" />
            <NavLinks src="features" />
            <NavLinks src="works" />
            <NavLinks src="about" />
            <NavLinks src="people" />
            <NavLinks src="news" />
            <button>Contact Us</button>
          </ul>
        </div>
      )}
    </>
  )
}