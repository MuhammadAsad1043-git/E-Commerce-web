import NavLinks from "./NavLinks";
import { NavLinkData } from "../data/NavLink";
import type { navLinkDetail } from "../interfaces/LoginTextField";
import TextField from "./TextField";

const NavBar = () => {
  return (
    <div className="  flex w-full items-center pb-5 pt-5 lg:justify-between md:justify-between sm:justify-between max-[640px]:justify-between pl-18 pr-18">
      {/* Image */}
      <div className="flex gap-6 items-center  ">
        <img
          className="sm:h-6 max-[640px]:h-6 lg:hidden md:hidden"
          src="/images/menuicon.png"
          alt="menuicon"
        />

        <img
          className="lg:h-5 md:h-5 sm:h-4 max-[640px]:h-4"
          src="/images/mainlogo.png"
          alt="logo"
        />
      </div>

      {/* NavLink */}
      <div className="lg:flex lg:gap-8 items-end md:flex md:gap-8 sm:hidden max-[640px]:hidden">
        {NavLinkData.map(({ text }: navLinkDetail) => (
          <NavLinks text={text} className="text-[16px] cursor-pointer " />
        ))}
      </div>
      {/* Search Field */}
      <TextField
        placeholder="Search for product..."
        className="lg:block lg:pl-7 lg:pr-45 lg:pb-2 lg:pt-2 md:hidden sm:hidden max-[640px]:hidden lg:rounded-3xl lg:bg-[#F0F0F0] lg:text-[14px] "
      />

      {/* Icon */}
      <div className="flex gap-3">
        <img
          className="lg:hidden md:h-5 sm:h-5 max-[640px]:h-5"
          src="/images/searchicon.png"
          alt="searchicon"
        />
        <img
          className="h-5"
          src="/images/shoppingicon.png"
          alt="shoppingicon"
        />
        <img className="h-5" src="/images/personicon.png" alt="personicon" />
      </div>
    </div>
  );
};

export default NavBar;
