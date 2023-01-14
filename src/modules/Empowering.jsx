import React from "react";
import Navbar from "./Navbar";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";
import mainIcons from "../assets/main-icons.svg";
import SideMenu from "./SideMenu";
import GradiantBackground from "../assets/images/GradientBackground.png";

const Empowering = () => {
  return (
    <div className="relative main-bg bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left md:h-[810px]">
      <img src={GradiantBackground} className="absolute h-full w-full z-10" />
      <div className="fixed w-full z-40">
        <SideMenu />
        <Navbar />
      </div>
      <div className="container grid grid-cols-2 mt-36 mx-auto z-20">
        <div className="w-[200%] md:w-[593px] z-20">
          <h2 className="md:text-6xl text-4xl text-center md:text-left font-bold mb-6">
            Empowering the future of Finance
          </h2>
          <p className="text-base text-neutral-300 mb-8">
            Develocity is a full-service software development, mobile app, and data analytics company, providing
            cutting-edge web 3 and blockchain solutions to businesses of all sizes.
          </p>
          <button className="bg-indigo-500 py-3 px-4">
            Get a Free Quote
            <img className="inline pl-2" src={`${GoArrowIcon}`} alt="Go arrow" />
          </button>
        </div>
      </div>
      <img className="block my-14 md:my-16 md:mt-[152px] mx-auto px-2" src={`${mainIcons}`} />
    </div>
  );
};

export default Empowering;
