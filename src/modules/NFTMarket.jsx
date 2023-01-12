import React from "react";
import NFT from "../assets/NFT.png";
function NFTMarket() {
  const list = [
    "NFT marketplace development",
    "NFT token development",
    "NFT launchpad development",
    "NFT vesting solutions",
    "NFT staking platform development",
    "KYC integration",
    "Crypto & fiat integration",
    "Crypto wallet integration",
  ];
  return (
    <div className="text-center my-24">
      <div className="container mx-auto">
        <h1 className="ml-6 text-blue-200 font-bold text-4xl md:text-7xl my-2.5">
          NFT and NFT Marketplace
        </h1>
        <div className="grid mt-28 gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col text-center md:text-left order-2 lg:order-1">
            <p className="ml-6 text-xs text-indigo-400 capitalize mb-1">
              GET STARTED WITH NFT DEVELOPMENT
            </p>
            <h3 className="w-5/6 ml-6 text-white font-bold text-5xl mb-9">
              NFT Marketplace and Metaverse Development
            </h3>
            <p className="ml-6 text-gray-400 text-base pb-7 w-5/6">
              We have decades of experience in NFT development and can help you
              create a robust and secure marketplace for NFTs. We also offer
              smart contract programming and audit services to ensure the
              security and effectiveness of your NFTs.
            </p>
            <p className="ml-6 text-gray-400 text-base pb-7 w-5/6">
              Offer your customers enhanced and seamless NFT minting, selling
              and buying on a secure NFT platform that brings together global
              NFT creators and buyers at one place.
            </p>
            <div className="grid px-4 gap-2 grid-cols-2">
              {list.map((item, index) => (
                <div className="flex" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-green-500 mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <span className=" ml-2 text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center md:justify-start mb-20">
            <img  src={`${NFT}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NFTMarket;