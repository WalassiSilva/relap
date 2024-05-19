import { Link } from "react-router-dom";

type NavLinksProps = {
  src: string;
  clicked?: () => void;
}

export function NavLinks({ src, clicked }: NavLinksProps) {

  return (
    <li>
      <Link to={`/${src !== 'home' ? src : ''}`} 
      onClick={clicked}
      className="capitalize hover:text-pink-500 hover:underline">{src}</Link>
    </li>
  )
}