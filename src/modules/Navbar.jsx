import React from "react";
import navLogo from "../assets/NavLogo.svg";

const Navbar = () => {
  return (
    <nav className="container pt-12 mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center">
        <img src={`${navLogo}`} alt="logo" className="md:block hidden" />
        <div
          className="lg:w-[403px] hidden mt-3 h-[53px] bg-opacity-5 bg-white text-neutral-300 text-base
          rounded-[20px] md:flex lg:mt-0 justify-evenly items-center backdrop-blur-md lg:translate-x-2/4 xl:ml-[271px] px-4"
        >
          <a className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer">
            Home
          </a>
          <a className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer">
            Web 3.0
          </a>
          <a className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer">
            NFT
          </a>
          <a className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer">
            Metaverse
          </a>
          <a className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer">
            DeFi
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
