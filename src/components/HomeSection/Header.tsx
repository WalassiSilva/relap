import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="z-40 px-4  py-3 flex sticky flex-wrap top-0 bg-white mx-auto w-full justify-between items-center
    md:bg-black md:px-8">
      <Logo />
      <Navbar />
    </header>)
}