import React from "react";
import CryptoVideo from "../assets/Cryptocurrency.mp4";
import { Fade } from "react-awesome-reveal";
import HeaderGradient from "../assets/pricingPageHeaderGradient.png";

const Cryptocurrency = () => {
  return (
    <div className="container relative text-center md:text-left lg:mt-20 md:pb-[211px]">
      <img className="absolute bottom-[-500px] right-[-45rem]" src={HeaderGradient} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="h-[300px] sm:h-[400px] xl:h-full">
          <Fade className="h-full w-full relative lg:h-full" direction={"up"} triggerOnce={true}>
            <video
              className="text-white absolute max-w-[550px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:max-w-[900px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[920px] xl:transform-none xl:top-[-65%] xl:left-[-22%]"
              height="100%"
              muted
              loop
              playsInline
              autoPlay
            >
              <source src={CryptoVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </Fade>
        </div>
        <div className="mx-auto max-w-[488px] relative z-20 lg:mx-0 lg:ml-auto">
          <Fade direction={"up"} triggerOnce={true}>
            <span className="uppercase text-xs text-indigo-500 mb-4 block">Cryptocurrency Creation</span>
            <h4 className="text-3xl md:text-4xl font-normal mb-6">
              Cryptocurrency Development and Initial Coin Offering (ICO).
            </h4>
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <p className="text-base mb-6 text-neutral-400">
              Drive better business outcomes across digital channels and business processes through precise analytics
              that deliver real-time business observability to improve IT and business collaboration.
            </p>
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <p className="text-base text-neutral-400">
              Base your business decisions on precise data analysis for web and mobile conversions, revenue impact,
              release validation, and business processes by combining business context from anywhere with full-stack
              application analytics and performance.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Cryptocurrency;
