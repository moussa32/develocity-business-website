import React from "react";
import navLogo from "../assets/NavLogo.svg";
import SideMenu from "./SideMenu";

const Navbar = () => {
  return (
    <nav className="container pt-12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img src={`${navLogo}`} />
        <div
          className="w-[300px] md:w-[403px] hidden mt-3 h-[53px] bg-opacity-5 bg-white text-neutral-300 text-base
        rounded-[20px] md:flex justify-evenly items-center"
        >
          <a>Home</a>
          <a>Company</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
