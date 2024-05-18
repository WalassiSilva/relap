import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="z-40 px-4 md:px-8 py-3 flex sticky flex-wrap top-0 bg-white mx-auto w-full justify-between items-center
    md:bg-black ">
      <Logo />
      <Navbar />
    </header>)
}