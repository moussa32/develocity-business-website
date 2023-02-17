import React from "react";
import CodePanel from "../assets/CodePanel.mp4";
import { Fade } from "react-awesome-reveal";

function BestInClass() {
  return (
    <div id="web3.0" className="text-center md:my-24 lg:pt-52 lg:pb-48 lg:my-0">
      <div className="container">
        <Fade direction={"up"} triggerOnce={true} className="z-20 relative">
          <h1 className="text-center text-indigo-300 font-PolySans text-4xl font-normal md:text-5xl lg:text-7xl my-2.5 lg:leading-[90px]">
            Best in Class WEB 3.0 and <span className="block">Blockchain Solutions</span>
          </h1>
        </Fade>
        <div className="grid mt-28 gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col text-center md:text-left order-2 lg:order-1 z-10">
            <Fade direction={"up"} triggerOnce={true}>
              <p className="md:ml-0 text-xs text-indigo-500 capitalize mb-1">
                HARNESS THE POWER OF WEB 3.0 AND BLOCKCHAIN TECHNOLOGY
              </p>
              <h3 className="md:ml-0 ml-2 text-white md:text-5xl text-3xl mt-2.5">Harness the Power of Next</h3>
              <h3 className="md:ml-0 ml-2 text-white md:text-5xl text-3xl mb-9">Generation Web Technology</h3>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <p className="text-gray-400 text-base pb-7">
                Develocity is a full-service software development, mobile app, and data analytics company based in
                worldwide. We specialize in providing cutting-edge web 3 and blockchain solutions to businesses of all
                sizes.
              </p>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <p className="text-gray-400 text-base pb-7">
                Our team of experienced professionals has expertise in a wide range of technologies, including Ethereum,
                Polkadot, NFTs, and more. We are committed to delivering innovative and effective solutions that help
                our clients grow and succeed.
              </p>
            </Fade>
            <Fade cascade direction={"up"} triggerOnce={true}>
              <div className="grid gap-6 grid-cols-2">
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl PolySans font-medium">10</label>
                  <span className="ml-6 py-2 text-lg">Year in Business</span>
                </div>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl PolySans font-medium">10</label>
                  <span className="ml-6 py-2 text-lg">Clients Worked With</span>
                </div>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl PolySans font-medium">257</label>
                  <span className="ml-6 py-2 text-lg">Projects Delivered</span>
                </div>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl PolySans font-medium">8</label>
                  <span className="ml-6 py-2 text-lg">Countries Worldwide</span>
                </div>
              </div>
            </Fade>
          </div>
          <div className="order-1 w-full relative lg:order-2">
            <Fade className="h-full" direction={"up"} triggerOnce={true}>
              <video
                className="xl:max-w-[1080px] xl:absolute xl:top-[-42%] xl:left-[-28%] z-0 text-white"
                muted
                loop
                playsInline
                autoPlay
              >
                <source src={CodePanel} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </Fade>
            {/* <img src={`${BestWithSection}`} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestInClass;
