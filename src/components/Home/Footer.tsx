import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {

  return (
    <footer className="w-full">
      <ul className=" flex absolute md:static bottom-10 left-1/3 items-center justify-center gap-2 text-white md:justify-end">
        <li className="size-8 border-white border-2 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500"><a href="#"><FaFacebookF /></a></li>
        <li className="size-8 border-white border-2 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500"><a href="#"><FaTwitter /></a></li>
        <li className="size-8 border-white border-2 rounded-full flex items-center justify-center hover:border-pink-500 hover:text-pink-500"><a href="#"><FaInstagram /></a></li>
      </ul>
    </footer>
  )
}