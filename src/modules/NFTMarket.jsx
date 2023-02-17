import AstronautInSpace from "../assets/AstronautInSpace.mp4";
import { Fade } from "react-awesome-reveal";

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
      <div className="container">
        <Fade className="z-20 relative" direction={"up"} triggerOnce={true}>
          <h1 className="ml-6 text-indigo-300 text-4xl md:text-7xl my-2.5">NFT and NFT Marketplace</h1>
        </Fade>
        <div className="grid lg:mt-28 gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col text-center md:text-left order-2 lg:order-1 z-20 relative">
            <Fade cla direction={"up"} triggerOnce={true}>
              <p className="text-xs text-indigo-500 capitalize mb-4">GET STARTED WITH NFT DEVELOPMENT</p>
              <h3 className="text-white text-5xl mb-9">NFT Marketplace and Metaverse Development</h3>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <p className="text-gray-400 text-base pb-7">
                We have decades of experience in NFT development and can help you create a robust and secure marketplace
                for NFTs. We also offer smart contract programming and audit services to ensure the security and
                effectiveness of your NFTs.
              </p>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <p className="text-gray-400 text-base pb-7">
                Offer your customers enhanced and seamless NFT minting, selling and buying on a secure NFT platform that
                brings together global NFT creators and buyers at one place.
              </p>
            </Fade>
            <Fade direction={"up"} triggerOnce={true}>
              <div className="grid gap-x-6 gap-y-2 grid-cols-2">
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
            </Fade>
          </div>
          <div className="order-1 lg:order-2 flex justify-center md:justify-start lg:mb-20">
            <Fade className="w-full h-full" direction={"up"} triggerOnce={true}>
              <video
                playsInline
                className="text-white w-full xl:absolute xl:max-w-[920px] xl:bottom-[-65%] xl:left-[-32%] z-0"
                height="100%"
                muted
                loop
                autoPlay
              >
                <source src={AstronautInSpace} type="video/webm" />
                Your browser does not support HTML5 video.
              </video>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NFTMarket;
