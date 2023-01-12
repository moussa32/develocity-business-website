import React from "react";
import LinkArrow from "../assets/linkArrow.svg";

import BinanceEllipse from "../assets/BinanceEllipse.png";
import SolanaEllipse from "../assets/SolanaEllipse.png";
import PoloygonEllipse from "../assets/PoloygonEllipse.png";
import EthereumEllipse from "../assets/EthereumEllipse.png";
import Binance from "../assets/Binance.png";
import Ethereum from "../assets/Ethereum.png";
import Polygon from "../assets/Polygon.png";
import Solana from "../assets/Solana.png";

function WeWorkWith() {
  return (
    <div className="bg-black text-center my-16">
      <div className="container mx-auto">
        <p className="text-xs text-indigo-400 capitalize">
          for successful digital transformation
        </p>
        <h3 className="text-white font-bold text-4xl my-2.5">
          Blockchains we work with
        </h3>
        <div className="grid px-4 text-left mt-28 gap-6 md:grid-cols-2 lg:grid-cols-4 md:px-0 flex justify-center">
          <div className="mb-6 relative flex justify-center">
            <div className="z-0 absolute h-16 w-20 -top-7">
              <img className="blur-lg" src={`${BinanceEllipse}`} />
            </div>
            <div className="bg-neutral-900  rounded-lg h-80 w-full flex flex-col justify-center items-center">
              <img className="mb-4 h-28 w-20" src={`${Binance}`} />
              <span className="text-xl">Binance</span>
            </div>
          </div>
          <div className="mb-6 relative flex justify-center">
            <div className="z-0 absolute h-16 w-20 -top-7">
              <img className="blur-lg" src={`${EthereumEllipse}`} />
            </div>
            <div className="bg-neutral-900  rounded-lg h-80 w-full flex flex-col justify-center items-center">
              <img className="mb-4 h-28 w-20" src={`${Ethereum}`} />
              <span className="text-xl">Ethereum</span>
            </div>
          </div>
          <div className="mb-4 relative flex justify-center">
            <div className="z-0 absolute h-16 w-16 -top-7">
              <img src={`${PoloygonEllipse}`} />
            </div>
            <div className="bg-indigo-800 z-10 rounded-lg h-full w-full flex flex-col justify-center">
              <div className="h-full md:h-4/6 flex flex-col justify-between items-center mt-14 pb-8 md:pb-0">
                <div className="flex flex-col items-center">
                  <img className="mb-4 h-28 w-20" src={`${Polygon}`} />
                  <span className="text-xl">Polygon MATIC</span>
                </div>
                <p className="text-sm flex">
                  https://polygonscan.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="fill-white ml-2 font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 relative flex justify-center">
            <div className="z-0 absolute h-16 w-20 -top-7">
              <img className="blur-lg" src={`${SolanaEllipse}`} />
            </div>
            <div className="bg-neutral-900  rounded-lg h-80 w-full flex flex-col justify-center items-center">
              <img className="mb-4 h-28 w-20" src={`${Solana}`} />
              <span className="text-xl">Solana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeWorkWith;
