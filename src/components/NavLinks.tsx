import type { navLinkDetail } from "../interfaces/LoginTextField";

const NavLinks = ({ text, className }: navLinkDetail) => {
  return (
    <a className={`${className}`} href="#">
      {text}
    </a>
  );
};

export default NavLinks;
