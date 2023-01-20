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
import { Fade } from "react-awesome-reveal";
import SolanaColorVersion from "../assets/SolanaColorVersion.svg";
import PolygonColorVersion from "../assets/PolygonColorVersion.svg";
import EthereumColorVersion from "../assets/EthereumColorVersion.svg";
import BinanceColorVersion from "../assets/BinanceColorVersion.svg";
import BlockchainesCard from "./BlockchainesCard";

function WeWorkWith() {
  return (
    <div className="bg-black text-center my-16">
      <div className="container mx-auto">
        <Fade direction={"up"} triggerOnce={true}>
          <p className="text-xs text-indigo-400 capitalize">TOP BLOCKCHAINS ARE AT YOUR DISPOSAL</p>
          <h3 className="text-white font-PolySans font-extralight text-6xl my-2.5">Blockchains we work with</h3>
        </Fade>
        <div className="grid px-4 text-left mt-28 gap-6 md:grid-cols-2 lg:grid-cols-4 md:px-0">
          <Fade direction={"up"} triggerOnce={true}>
            <BlockchainesCard
              url="https://Binance.com"
              title="Binance"
              backgroundCrucial={BinanceEllipse}
              img={Binance}
              activeImg={BinanceColorVersion}
            />
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <BlockchainesCard
              url="https://Ethereum.com"
              title="Ethereum"
              backgroundCrucial={EthereumEllipse}
              img={Ethereum}
              activeImg={EthereumColorVersion}
            />
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <BlockchainesCard
              url="https://polygonscan.com"
              title="Polygon MATIC"
              backgroundCrucial={PoloygonEllipse}
              img={Polygon}
              activeImg={PolygonColorVersion}
            />
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <BlockchainesCard
              url="https://Solana.com"
              backgroundCrucial={SolanaEllipse}
              title="Solana"
              img={Solana}
              activeImg={SolanaColorVersion}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default WeWorkWith;
