import React from "react";
import navLogo from "../assets/NavLogo.svg";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

const Navbar = () => {
  return (
    <nav className="container pt-12 relative">
      <img src={`${navLogo}`} alt="logo" className="md:block hidden mx-auto lg:mt-4 lg:absolute" />
      <div className="w-full">
        <div
          className="lg:w-[403px] hidden mt-3 h-[53px] bg-opacity-5 bg-white text-neutral-300 text-base
          rounded-[20px] md:flex lg:mt-0 justify-evenly items-center backdrop-blur-md lg:translate-x-2/4 xl:ml-[271px] px-4"
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
