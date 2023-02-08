import React from "react";
import CryptoSvg from "../assets/Cryptocurrency.svg";
import CryptoVideo from "../assets/Cryptocurrency.mp4";
import { Fade } from "react-awesome-reveal";

const Cryptocurrency = () => {
  return (
    <div className="container mx-auto text-center md:text-left mt-20 md:mt-36 md:mb-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Fade direction={"up"} triggerOnce={true}>
          <div>
            <video className="text-white" width="100%" height="100%" muted autoPlay>
              <source src={CryptoVideo} type="video/webm" />
              {/* Fallback version of webm video */}
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            {/* <img src={`${CryptoSvg}`} /> */}
          </div>
        </Fade>
        <div>
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
              Base your business decisions on precise data analysis for web and mobile conversion, revenue impact,
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
