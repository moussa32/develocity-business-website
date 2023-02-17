import Joystick from "../assets/Joystick.mp4";
import Autodesk from "../assets/Autodesk.png";
import Blender from "../assets/Blender.png";
import Unity from "../assets/Unity.png";
import UnrealEngine from "../assets/UnrealEngine.png";

import { Fade } from "react-awesome-reveal";

function NFTGameDev() {
  return (
    <section id="NFT">
      <header className="relative z-20 lg:mb-[85px] mt-32">
        <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
          <span className="font-semibold text-center block text-xs text-indigo-400">
            TOP BLOCKCHAINS ARE AT YOUR DISPOSAL
          </span>
        </Fade>
        <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
          <h2 className="text-[40px] text-center font-PolySans text-5xl mt-1 font-normal">NFT Game Development</h2>
        </Fade>
      </header>

      <div className="grid grid-cols-1 gap-y-6 mb-[135px] xl:grid-cols-2 xl:gap-x-6">
        <Fade direction={"up"} triggerOnce={true}>
          <video
            className="text-white w-full xl:absolute xl:max-w-[920px] xl:bottom-[-73%] xl:left-[-29%]"
            height="100%"
            muted
            loop
            playsInline
            autoPlay
          >
            <source src={Joystick} type="video/webm" />
            Your browser does not support HTML5 video.
          </video>
        </Fade>
        <div className="z-20 relative xl:h-[375px]">
          <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
            <span className="text-indigo-500 font-semibold text-xs uppercase block mb-3">cryptocurrency creation</span>
          </Fade>
          <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
            <h3 className="font-PolySans text-[40px] font-normal mb-5 leading-[48px]">
              Changing Traditional Online <span className="block">Gaming Industry</span>
            </h3>
          </Fade>
          <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
            <p className="text-base text-neutral-400 mb-8">
              The global gaming industry is witnessing a paradigm shift and is embracing blockchain and NFTs. NFTs are
              unique, scarce, and attract potential users. New revenue streams are unlocked by blockchain-based games
              for both platform owners and gamers.
            </p>
          </Fade>
          <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
            <p className="text-base text-neutral-400">
              While the former can capitalize on new earning opportunities and reach a wider audience with ingenious
              solutions, the latter can monetize their in-game rewards. NFT games offer customized virtual assets that
              are interoperable and can be used in other NFT games by collaborating with NFT developers
            </p>
          </Fade>
        </div>
      </div>

      <div className="relative z-20 grid grid-cols-1 gap-6 gap-x-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="bg-[#0D0D0D] px-6 py-8 rounded-[20px]">
          <div className="rounded-full w-[84px] h-[84px] bg-indigo-500 mb-8"></div>
          <h3 className="mb-6 font-medium text-xl max-w-[257px]">Play-to-Earn Game Development</h3>
          <p className="text-base text-neutral-400">
            Launch a P2E game like Axie Infinity or Sorare. Give your users a chance to create an income stream by
            playing. We offer diligently crafted services to help you launch a game like Axie Infinity or Sorare, or
            build a customized play-to-earn game with exhilarating gameplay.
          </p>
        </div>
        <div className="bg-[#0D0D0D] px-6 py-8 rounded-[20px]">
          <div className="rounded-full w-[84px] h-[84px] bg-indigo-500 mb-8"></div>
          <h3 className="mb-6 font-medium text-xl max-w-[257px]">Move-to-Earn Game Development</h3>
          <p className="text-base text-neutral-400">
            StepN is a buzzword among online gamers. StepN NFTs generated a profit of over $26.8 million in Q1 2022.
            Capture the gaming market share like StepN by launching your move-to-earn game. Our NFT game company
            provides well-thought-out services to develop and deliver your gaming platform.
          </p>
        </div>
        <div className="bg-[#0D0D0D] px-6 py-8 rounded-[20px]">
          <div className="rounded-full w-[84px] h-[84px] bg-indigo-500 mb-8"></div>
          <h3 className="mb-6 font-medium text-xl max-w-[257px]">Player-vs-Player Game Development</h3>
          <p className="text-base text-neutral-400">
            Gods Unchained is one of the popular games where players gather cards by either buying them from other
            players or by winning PVP matchups. Disrupt the market with a similar PVP game or a customized one. We
            specialize in building PVP games based on different themes like cards, racing, and more.
          </p>
        </div>
      </div>

      <section className="mt-24 mb-[120px]">
        <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
          <span className="font-semibold text-center block text-xs text-indigo-400 uppercase">
            most popular game engines and tools
          </span>
        </Fade>
        <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
          <h2 className="text-[40px] text-center font-PolySans text-5xl mt-1 font-normal">
            Latest Tools And Techniques
          </h2>
        </Fade>
        <Fade className="relative z-20" direction={"up"} triggerOnce={true}>
          <div className="flex flex-col justify-between items-center sm:flex-row flex-wrap gap-10 mt-12 px-8 md:px-0">
            <img src={Unity} alt="Unity" title="Unity" />
            <img src={UnrealEngine} alt="UnrealEngine" title="UnrealEngine" />
            <img src={Blender} alt="Blender" title="Blender" />
            <img src={Autodesk} alt="Autodesk" title="Autodesk" />
          </div>
        </Fade>
      </section>
    </section>
  );
}

export default NFTGameDev;
