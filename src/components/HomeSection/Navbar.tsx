import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="flex justify-between text-white ">
        <ul className="hidden w-full md:flex gap-5">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#people">People</a>
          <a href="#feedbacks">Feedbacks</a>
          <a href="#news">News</a>
          <a href="#contacts" className="ml-32 px-10 py-1 rounded-full border border-zinc-500 hover:border-pink-500  ">Contacts Us</a>
        </ul>
        <div className="md:hidden">
          <button className="" onClick={toggleNavbar}>{!isOpen ? <FaBars className="size-6 text-pink-400" /> : <FaTimes className="text-pink-400 size-6" />}</button>
        </div>
      </div >

      {isOpen && (
        <nav className="md:hidden relative flex basis-full flex-col items-end z-50">
          <div className=" absolute bg-white p-2 rounded-xl rounded-tr-none border shadow text-black flex  flex-col items-end">
            <ul className=" flex flex-col items-center gap-5 ">
              <a href="#home" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">Home</a>
              <a href="#features" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">Features</a>
              <a href="#works" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">Works</a>
              <a href="#about" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">About</a>
              <a href="#people" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">People</a>
              <a href="#feedbacks" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">Feedbacks</a>
              <a href="#news" onClick={toggleNavbar} className="hover:outline rounded-full px-1 outline-pink-400 outline-1 font-semibold">News</a>
              <a href="#contacts" onClick={toggleNavbar} className="md:ml-32 w-40 text-center px-8 py-1 rounded-full border border-zinc-500 hover:border-pink-500 font-bold ">Contacts Us</a>
            </ul>
          </div>
        </nav>
      )}
    </>
  )
}