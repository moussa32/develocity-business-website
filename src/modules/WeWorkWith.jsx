import React from "react";
import Arrow from "../assets/Arrow.png";

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
            <div className="bg-neutral-900  rounded-lg h-80 md:w-10/12 w-full flex flex-col justify-center items-center">
              <img className="mb-4" src={`${Binance}`} />
              <span className="text-xl">Binance</span>
            </div>
          </div>
          <div className="mb-6 relative flex justify-center">
            <div className="z-0 absolute h-16 w-20 -top-7">
              <img className="blur-lg" src={`${EthereumEllipse}`} />
            </div>
            <div className="bg-neutral-900  rounded-lg h-80 md:w-10/12 w-full flex flex-col justify-center items-center">
              <img className="mb-4" src={`${Ethereum}`} />
              <span className="text-xl">Ethereum</span>
            </div>
          </div>
          <div className="mb-6 relative flex justify-center">
            <div className="z-0 absolute h-16 w-16 -top-7">
              <img src={`${PoloygonEllipse}`} />
            </div>
            <div className="bg-indigo-800 z-10 rounded-lg h-80 md:w-10/12 w-full flex flex-col justify-center">
              <div className="pt-6 h-full md:h-4/6 flex flex-col justify-between items-center mt-14 pb-8 md:pb-0">
                <div className="pt- flex flex-col items-center">
                  <img className="mb-4" src={`${Polygon}`} />
                  <span className="text-xl">Polygon MATIC</span>
                </div>
                <p className="text-sm mx-3 flex">
                  https://polygonscan.com
                  <img className="ml-5 pb-1" src={`${Arrow}`}/>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 relative flex justify-center">
            <div className="z-0 absolute h-16 w-20 -top-7">
              <img className="blur-lg" src={`${SolanaEllipse}`} />
            </div>
            <div className="bg-neutral-900  rounded-lg h-80 md:w-10/12 w-full flex flex-col justify-center items-center">
              <img className="mb-4" src={`${Solana}`} />
              <span className="text-xl">Solana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeWorkWith;
