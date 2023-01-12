import React from "react";
import BestWithSection from "../assets/BestWithSection.png";
function BestInClass() {
  return (
    <div className="text-center  my-24">
      <div className="container mx-auto">
        <h1 className="text-center text-blue-200 font-bold text-4xl md:text-7xl my-2.5">
          Best in Class WEB 3.0 and Blockchain Solutions
        </h1>
        <div className="grid mt-28 gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col text-center md:text-left order-2 lg:order-1">
            <p className="md:ml-6 text-xs text-indigo-400 capitalize mb-1">
              HARNESS THE POWER OF WEB 3.0 AND BLOCKCHAIN TECHNOLOGY
            </p>
            <h3 className="md:ml-6 ml-2 text-white font-bold md:text-5xl text-3xl mt-2.5">
              Harness the Power of Next
            </h3>
            <h3 className="md:ml-6 ml-2 text-white font-bold md:text-5xl text-3xl mb-9">
              Generation Web Technology
            </h3>
            <p className="ml-6 text-gray-400 text-base pb-7 w-5/6">
              Develocity is a full-service software development, mobile app, and
              data analytics company based in worldwide. We specialize in
              providing cutting- edge web 3 and blockchain solutions to
              businesses of all sizes.
            </p>
            <p className="ml-6 text-gray-400 text-base pb-7 w-5/6">
              Develocity is a full-service software development, mobile app, and
              data analytics company based in worldwide. We specialize in
              providing cutting- edge web 3 and blockchain solutions to
              businesses of all sizes.
            </p>
            <div className="grid px-4 gap-6 grid-cols-2">
              <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                <label className="ml-6 py-2 text-5xl font-bold">10</label>
                <span className="ml-6 py-2 text-lg">Year in Business</span>
              </div>
              <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                <label className="ml-6 py-2 text-5xl font-bold">10</label>
                <span className="ml-6 py-2 text-lg">Clients Worked With</span>
              </div>
              <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                <label className="ml-6 py-2 text-5xl font-bold">257</label>
                <span className="ml-6 py-2 text-lg">Projects Delivered</span>
              </div>

              <div className="flex flex-col border-l-2 border-indigo-500 mb-2">
                <label className="ml-6 py-2 text-5xl font-bold">8</label>
                <span className="ml-6 py-2 text-lg">Countries Worldwide</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src={`${BestWithSection}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestInClass;
