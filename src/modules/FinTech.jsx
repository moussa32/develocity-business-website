import React from "react";
import cardImg from "../assets/FinTech-img1.svg";
import visaImg from "../assets/FinTech-img2.svg";

const FinTech = () => {
  return (
    <div className="mt-44">
      <h2 className="text-indigo-300 text-7xl text-center">
        Fintech and Data Analytics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-11 text-center md:text-left">
        <div className="lg:w-[592px] bg-opacity-5 bg-white rounded-[42px] p-10 mt-20 mx-5">
          <img className="mx-auto" src={`${visaImg}`} />
          <h3 className="mt-12 text-xl font-medium">DeFi</h3>
          <p className="text-base text-neutral-400 mt-2">
            Make better, faster, data-based decisions. Recognize opportunities,
            mitigate risk, spot trends, stay ahead of the game, and understand
            customer demands with the latest data science techniques.
          </p>
          <h3 className="text-xl font-medium mt-8">eCommerce</h3>
          <p className="text-base text-neutral-400 mt-2">
            We help you uncover patterns and trends to extract meaning from
            complex data. Using advanced data technologies that automate, and
            report from the ground up.
          </p>
          <h3 className="text-xl font-medium mt-8">Data management</h3>
          <p className="text-base text-neutral-400 mt-2">
            Create a clean, single source of truth across your business with a
            data governance strategy, and centralised data model that delivers
            information where you need it most.
          </p>
        </div>
        <div className="lg:w-[592px] bg-opacity-5 bg-white rounded-[42px] p-10 mt-20 mx-5">
          <img className="mx-auto" src={`${cardImg}`} />
          <h3 className="mt-12 text-xl font-medium">Advanced analytics</h3>
          <p className="text-base text-neutral-400 mt-2">
            Make better, faster, data-based decisions. Recognize opportunities,
            mitigate risk, spot trends, stay ahead of the game, and understand
            customer demands with the latest data science techniques.
          </p>
          <h3 className="text-xl font-medium mt-8">Data engineering</h3>
          <p className="text-base text-neutral-400 mt-2">
            We help you uncover patterns and trends to extract meaning from
            complex data. Using advanced data technologies that automate, and
            report from the ground up.
          </p>
          <h3 className="text-xl font-medium mt-8">Data management</h3>
          <p className="text-base text-neutral-400 mt-2">
            Create a clean, single source of truth across your business with a
            data governance strategy, and centralised data model that delivers
            information where you need it most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinTech;
