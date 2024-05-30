import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TypeId } from "../../types";

export function ContactsSection({id}:TypeId) {
  return (
    <div id={id} className="bg-contact bg-fit p-4 md:h-[calc(100dvh-56px)]">
      <div className="md:flex md:flex-col md:justify-between md:h-full">
        <div className="md:flex md:flex-col md:justify-center md:h-full">
          <h2 className="text-5xl font-bold font-title text-slate-800 py-8 text-center">Contact Us</h2>
          <p className="font-semibold text-slate-800 text-center pb-4 md:max-w-[40%] mx-auto">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.</p>
          <div className="flex flex-col gap-4  pb-10 md:flex-row md:justify-center md:self-center md:w-[40%]  ">
            <input type="text" placeholder="Your email"
              className="border rounded placeholder:px-4 placeholder:py-2 placeholder:text-sm md:w-full" />
            <div className="text-center"><button className="bg-[#C86DD7] px-16 py-3 rounded-full text-white font-semibold">Send</button></div>
          </div>
        </div>
        <footer className="border-t md:flex md:justify-around pt-10">
          <ul className="flex flex-col gap-3 my-10 md:my-0">
            <li className="font-semibold">Consectetur</li>
            <li className="text-slate-500">Adipiscing</li>
            <li className="text-slate-500">Elit</li>
            <li className="text-slate-500">Eiusmod</li>
          </ul>
          <ul className="flex flex-col gap-3 mb-10">
            <li className="font-semibold">Tempor</li>
            <li className="text-slate-500">Incididunt</li>
            <li className="text-slate-500">Labore</li>
            <li className="text-slate-500">Dolore</li>
          </ul>
          <ul className="flex flex-col gap-3 mb-10">
            <li className="font-semibold">Magna</li>
            <li className="text-slate-500">Aliqua</li>
            <li className="text-slate-500">Minim</li>
            <li className="text-slate-500">Veniam</li>
          </ul>

          <div>
            <ul className="flex gap-4 text-[#C86DD7] *:border-2 *:rounded-full *:border-[#c86dd7] *:p-1">
              <li><FaFacebookF /></li>
              <li><FaTwitter /></li>
              <li><RiInstagramFill /></li>
            </ul>
            <p className="pt-10 pb-20 text-slate-500 font-title">Copyright 2019. All Rights Reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  )
}