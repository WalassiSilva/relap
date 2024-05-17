import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {

  return (
    <footer className="w-full">
      <ul className=" flex absolute  bottom-[5%] left-1/2 -translate-x-1/2 items-center justify-center gap-2 text-white md:justify-end  md:translate-x-0 md:mr-[10%]  md:right-[10%] lg:mr-0">
        <li className="size-8 border-white border-2 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500"><a href="#"><FaFacebookF /></a></li>
        <li className="size-8 border-white border-2 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500"><a href="#"><FaTwitter /></a></li>
        <li className="size-8 border-white border-2 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500"><a href="#"><FaInstagram /></a></li>
      </ul>
    </footer>
  )
}