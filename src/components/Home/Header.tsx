import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="px-4 md:px-8 py-3 flex sticky flex-wrap top-0 z-20 mx-auto w-full justify-between bg-white  items-center
    md:bg-transparent">
      <Logo />
      <Navbar />
    </header>
  )
}