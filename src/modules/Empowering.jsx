import React from "react";
import Navbar from "./Navbar";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";
import mainIcons from "../assets/main-icons.svg";

const Empowering = () => {
  return (
    <div
      className={`bg-main-bg w-[100%] text-center bg-center bg-no-repeat md:text-left md:h-[810px]`}
    >
      <Navbar />
      <div className="container grid grid-cols-2 mt-36 mx-auto">
        <div className="w-[300px] md:w-[593px]">
          <h2 className="md:text-6xl text-4xl font-bold mb-6">
            Empowering the future of Finance
          </h2>
          <p className="text-base text-neutral-300 mb-8">
            Develocity is a full-service software development, mobile app, and
            data analytics company, providing cutting-edge web 3 and blockchain
            solutions to businesses of all sizes.
          </p>
          <button className="bg-indigo-500 py-3 px-4">
            Get a Free Quote
            <img
              className="inline pl-2"
              src={`${GoArrowIcon}`}
              alt="Go arrow"
            />
          </button>
        </div>

        <div></div>
      </div>

      <img className="my-14 md:mt-[152px] mx-auto px-2" src={`${mainIcons}`} />
    </div>
  );
};

export default Empowering;
