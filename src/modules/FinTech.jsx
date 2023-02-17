import React from "react";
import cardImg from "../assets/FinTech-img1.svg";
import visaImg from "../assets/FinTech-img2.svg";
import PieChart from "../assets/Piechart.mp4";
import Cards from "../assets/Cards.mp4";

import { Fade } from "react-awesome-reveal";

const FinTech = () => {
  return (
    <div id="DeFi" className="mt-44">
      <Fade direction={"up"} triggerOnce={true}>
        <h2 className="text-indigo-300 text-7xl text-center">Fintech and Data Analytics</h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-11 text-center md:text-left">
        <div className="lg:w-[592px] bg-[#0D0D0D] rounded-[42px] p-10 mt-20 mx-5">
          <Fade direction={"up"} triggerOnce={true}>
            <div className="relative xl:h-[400px] mxl:ax-w-[480px] mx-auto">
              <video playsInline className="text-white xl:absolute xl:max-w-[480] z-0" height="100%" muted autoPlay>
                <source src={Cards} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <h3 className="mt-12 text-xl font-medium z-20">DeFi</h3>
            <p className="text-base text-neutral-400 mt-2 z-20">
              Make better, faster, data-based decisions. Recognize opportunities, mitigate risk, spot trends, stay ahead
              of the game, and understand customer demands with the latest data science techniques.
            </p>
            <h3 className="text-xl font-medium mt-8 z-20">eCommerce</h3>
            <p className="text-base text-neutral-400 mt-2 z-20">
              We help you uncover patterns and trends to extract meaning from complex data. Using advanced data
              technologies that automate, and report from the ground up.
            </p>
            <h3 className="text-xl font-medium mt-8 z-20">Data management</h3>
            <p className="text-base text-neutral-400 mt-2 z-20">
              Create a clean, single source of truth across your business with a data governance strategy, and
              centralised data model that delivers information where you need it most.
            </p>
          </Fade>
        </div>
        <div className="lg:w-[592px] bg-[#0D0D0D] rounded-[42px] p-10 mt-20 mx-5">
          <Fade direction={"up"} triggerOnce={true}>
            <div className="relative xl:h-[400px] xl:max-w-[480px] mx-auto">
              <video playsInline className="text-white xl:absolute xl:max-w-[920px] z-0" height="100%" muted autoPlay>
                <source src={PieChart} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <h3 className="mt-12 text-xl font-medium z-20">Advanced analytics</h3>
            <p className="text-base text-neutral-400 mt-2 z-20">
              Make better, faster, data-based decisions. Recognize opportunities, mitigate risk, spot trends, stay ahead
              of the game, and understand customer demands with the latest data science techniques.
            </p>
            <h3 className="text-xl font-medium mt-8 z-20">Data engineering</h3>
            <p className="text-base text-neutral-400 mt-2 z-20">
              We help you uncover patterns and trends to extract meaning from complex data. Using advanced data
              technologies that automate, and report from the ground up.
            </p>
            <h3 className="text-xl font-medium mt-8">Data management</h3>
            <p className="text-base text-neutral-400 mt-2 z-20">
              Create a clean, single source of truth across your business with a data governance strategy, and
              centralised data model that delivers information where you need it most.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FinTech;
