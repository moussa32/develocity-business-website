import React from "react";
import navLogo from "../assets/NavLogo.svg";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

const Navbar = () => {
  return (
    <nav className="container pt-12 mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center">
        <img src={`${navLogo}`} alt="logo" className="md:block hidden" />
        <div
          className="lg:w-[501px] hidden mt-3 h-[53px] bg-opacity-5 bg-white text-neutral-300 text-base
          rounded-[20px] md:flex lg:mt-0 justify-evenly items-center backdrop-blur-md nanbar-items lg:translate-x-2/4 px-4"
        >
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer"
            spy
            smooth
            to="home"
          >
            Home
          </Link>
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="web3.0"
          >
            Web 3.0
          </Link>
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="NFT"
          >
            NFT
          </Link>
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="Metaverse"
          >
            Metaverse
          </Link>
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="DeFi"
          >
            DeFi
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
