
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
      <div className="flex justify-between text-white md:py-">
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
          <button className="" onClick={toggleNavbar}>{!isOpen ? <FaBars className="size-6 text-pink-400" /> : <FaTimes className="text-pink-400 size-6" />}</button>
        </div>
      </div >

      {isOpen && (
        <nav  className="md:hidden relative flex basis-full flex-col items-end">
          <div className=" absolute bg-white p-2 rounded-xl rounded-tr-none border shadow text-black flex  flex-col items-end">
            <ul className=" flex flex-col items-center gap-5">
              <NavLinks src="home" clicked={toggleNavbar} />
              <NavLinks src="features" clicked={toggleNavbar} />
              <NavLinks src="works" clicked={toggleNavbar} />
              <NavLinks src="about" clicked={toggleNavbar} />
              <NavLinks src="people" clicked={toggleNavbar} />
              <NavLinks src="news" clicked={toggleNavbar} />
              <button onClick={toggleNavbar}
              className="hover:text-white rounded-lg p-1 hover:bg-pink-500">Contact Us</button>
            </ul>
          </div>
        </nav>
      )}
    </>
  )
}