import DoubleArrowIcon from "../assets/images/DoubleArrowIcon.svg";
import NFTGameBg from "../assets/NFTGame-bg.svg";
import { Fade } from "react-awesome-reveal";

function NFTGameDev() {
  return (
    <div
      id="NFT"
      className="container w-[300px] z-20 h-auto md:w-[1216px] lg:h-[479px] mb-20 mt-20 md:mb-48 md:mt-48 relative bg-gradient-to-r from-[#312E81] to-[#191741] rounded-[40px] p-7"
    >
      <Fade direction={"up"} triggerOnce={true}>
        <h1 className="text-center sm:text-right mr-0 md:mr-24 text-4xl font-normal mb-5 mt-8">NFT Game Development</h1>
      </Fade>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Fade direction={"up"} triggerOnce={true}>
            <img src={`${NFTGameBg}`} />
          </Fade>
        </div>
        <Fade direction={"up"} triggerOnce={true}>
          <div className="bg-opacity-5 bg-white lg:w-[312px] lg:h-[343px] p-6 mb-8 rounded-[20px]">
            <img className="mb-5" src={`${DoubleArrowIcon}`} alt="NFT Game Development" />
            <h4 className="text-base lg:text-xl mb-2">Full service cycle</h4>
            <p className="text-xs lg:text-base text-neutral-400">
              We can provide a full-service solution for your software development projects, from architecture design to
              production deployment. Our professional teams handle challenges at any stage of the product development
              cycle.
            </p>
          </div>
        </Fade>
        <Fade direction={"up"} triggerOnce={true}>
          <div className="bg-opacity-5 bg-white lg:w-[312px] lg:h-[343px] p-6 mb-8 rounded-[20px]">
            <img className="mb-5" src={`${DoubleArrowIcon}`} alt="NFT Game Development" />
            <h4 className="text-base lg:text-xl mb-2">Full service cycle</h4>
            <p className="text-xs lg:text-base text-neutral-400">
              We can provide a full-service solution for your software development projects, from architecture design to
              production deployment. Our professional teams handle challenges at any stage of the product development
              cycle.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default NFTGameDev;
