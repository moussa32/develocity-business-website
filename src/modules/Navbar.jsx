import React from "react";
import navLogo from "../assets/NavLogo.svg";

const Navbar = () => {
  return (
    <nav className="container pt-12 mx-auto relative">
      <div className="flex flex-col md:flex-row items-center fixed w-full z-40">
        <img src={`${navLogo}`} alt="logo" className="block" />
        <div
          className="w-[300px] md:w-[403px] hidden mt-3 h-[53px] bg-opacity-5 bg-white text-neutral-300 text-base
        rounded-[20px] md:flex md:mt-0 justify-evenly items-center backdrop-blur-md translate-x-2/4 xl:ml-[271px]"
        >
          <a>Home</a>
          <a>Company</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
