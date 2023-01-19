import React from "react";
import BestWithSection from "../assets/BestWithSection.png";
import { Fade } from "react-awesome-reveal";

function BestInClass() {
  return (
    <div className="text-center  my-24">
      <div className="container mx-auto">
        <Fade direction={"up"} triggerOnce={true}>
          <h1 className="text-center text-indigo-300 font-PolySans text-4xl font-normal md:text-5xl lg:text-7xl my-2.5">
            Best in Class WEB 3.0 and <span className="block">Blockchain Solutions</span>
          </h1>
        </Fade>
        <div className="grid mt-28 gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col text-center md:text-left order-2 lg:order-1">
            <Fade direction={"up"} triggerOnce={true}>
              <p className="md:ml-6 text-xs text-indigo-500 capitalize mb-1">
                HARNESS THE POWER OF WEB 3.0 AND BLOCKCHAIN TECHNOLOGY
              </p>
              <h3 className="md:ml-6 ml-2 text-white md:text-5xl text-3xl mt-2.5">Harness the Power of Next</h3>
              <h3 className="md:ml-6 ml-2 text-white md:text-5xl text-3xl mb-9">Generation Web Technology</h3>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <p className="ml-6 text-gray-400 text-base pb-7 w-5/6">
                Develocity is a full-service software development, mobile app, and data analytics company based in
                worldwide. We specialize in providing cutting- edge web 3 and blockchain solutions to businesses of all
                sizes.
              </p>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <p className="ml-6 text-gray-400 text-base pb-7 w-5/6">
                Develocity is a full-service software development, mobile app, and data analytics company based in
                worldwide. We specialize in providing cutting- edge web 3 and blockchain solutions to businesses of all
                sizes.
              </p>
            </Fade>
            <div className="grid px-4 gap-6 grid-cols-2">
              <Fade direction={"up"} triggerOnce={true}>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl">10</label>
                  <span className="ml-6 py-2 text-lg">Year in Business</span>
                </div>
              </Fade>
              <Fade direction={"up"} triggerOnce={true}>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl">10</label>
                  <span className="ml-6 py-2 text-lg">Clients Worked With</span>
                </div>
              </Fade>
              <Fade direction={"up"} triggerOnce={true}>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl">257</label>
                  <span className="ml-6 py-2 text-lg">Projects Delivered</span>
                </div>
              </Fade>
              <Fade direction={"up"} triggerOnce={true}>
                <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                  <label className="ml-6 py-2 text-5xl">8</label>
                  <span className="ml-6 py-2 text-lg">Countries Worldwide</span>
                </div>
              </Fade>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Fade direction={"up"} triggerOnce={true}>
              <img src={`${BestWithSection}`} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestInClass;
