import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="z-40 px-4 py-3 flex fixed flex-wrap top-0 right-4 justify-between items-center
    md:bg-black/30 md:px-8 md:w-full md:right-0">
      <Logo />
      <Navbar />
    </header>)
}