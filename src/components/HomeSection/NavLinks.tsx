import { Link } from "react-router-dom";

type NavLinksProps = {
  src: string;
}

export function NavLinks({ src }: NavLinksProps) {
  
  return (
    <li>
      <Link to={`/${src !== 'home' ? src : ''}`} className="capitalize hover:text-pink-500 hover:underline">{src}</Link>
    </li>
  )
}