import React from "react";
import Navbar from "./Navbar";
import BloombergIcon from "../assets/Bloomberg.svg";
import WiredIcon from "../assets/Wired.svg";
import CoindeskIcons from "../assets/Coindesk.svg";
import YahooFinanceIcons from "../assets/YahooFinance.svg";
import SideMenu from "./SideMenu";
import GradiantBackground from "../assets/images/GradientBackground.png";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";
import { Fade } from "react-awesome-reveal";

const Empowering = ({ onOpenModal }) => {
  return (
    <div className="relative main-bg bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left md:h-[810px]">
      <img src={GradiantBackground} className="absolute h-full w-full z-0" />
      <div className="fixed w-full z-40">
        <SideMenu />
        <Navbar />
      </div>
      <Fade direction={"up"} triggerOnce={true} duration={2000}>
        <div className="container mx-auto lg:mx-0 mt-44 lg:mt-[230px] z-20">
          <div className="mx-auto w-full lg:mx-0 lg:ml-44 md:w-[593px] z-20">
            <h2 className="text-4xl text-center lg:text-left md:text-6xl font-bold mb-6 md:leading-tight">
              Empowering the Future of Finance
            </h2>
            <p className="text-center lg:text-left text-base text-neutral-300 mb-8 lg:max-w-[497px]">
              Develocity is a full-service software development, mobile app, and data analytics company, providing
              cutting-edge web 3 and blockchain solutions to businesses of all sizes.
            </p>
            <button
              className="block mx-auto lg:mx-0 bg-indigo-500 hover:bg-indigo-700 transition ease-in-out duration-500 cursor-pointer py-3 px-4 mb-20"
              onClick={onOpenModal}
            >
              Get a Free Quote
              <img className="inline pl-2" src={`${GoArrowIcon}`} alt="Go arrow" />
            </button>
          </div>
        </div>
      </Fade>
      {/* <div className="flex justify-evenly my-14 md:my-16 md:mt-[152px] mx-auto gap-1 md:gap-8">
        <Fade direction={"up"} triggerOnce={true} duration={2000} delay={1000}>
          <img className="w-[65px] md:w-[100%] opacity-30 hover:opacity-80" src={`${BloombergIcon}`} />
          <img className="w-[65px] md:w-[100%] opacity-30 hover:opacity-80" src={`${WiredIcon}`} />
          <img className="w-[65px] md:w-[100%] opacity-30 hover:opacity-80" src={`${CoindeskIcons}`} />
          <img className="w-[55px] md:w-[100%] opacity-30 hover:opacity-80" src={`${YahooFinanceIcons}`} />
        </Fade>
      </div> */}
    </div>
  );
};

export default Empowering;
