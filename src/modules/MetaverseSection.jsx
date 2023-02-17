import DoubleArrowIcon from "../assets/images/DoubleArrowIcon.svg";
import EmptyCircal from "../assets/images/EmptyCircal.png";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";
import MetaverseVdieo from "../assets/Metaverse.mp4";
import { Fade } from "react-awesome-reveal";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GiVirtualMarker } from "react-icons/gi";
import { FaArtstation } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { CgClapperBoard } from "react-icons/cg";
import { AiOutlineProject } from "react-icons/ai";

const MetaverseSection = ({ onOpenModal }) => {
  return (
    <div id="Metaverse">
      <section className="lg:py-20 overflow-hidden">
        <Fade className="z-20 relative" direction={"up"} triggerOnce={true}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-center text-indigo-300 mb-12 lg:mb-[86px] z-20">
            Metaverse Development
          </h2>
        </Fade>
        <div className="md:grid md:grid-cols-3">
          <div className="text-center mx-auto lg:mx-0 max-w-[344px] py-8 gap-4 flex flex-col justify-evenly lg:text-right z-20">
            <div className="z-20">
              <Fade direction={"up"} triggerOnce={true}>
                <h3 className="text-xl">Interoperable</h3>
                <p className="mt-2 text-neutral-400 text-sm lg:text-base">
                  Automate and secure operations on the Metaverse by trusting us with the development of Metaverse smart
                  contracts compatible across various chains.
                </p>
              </Fade>
            </div>
            <div className="z-20">
              <Fade direction={"up"} triggerOnce={true}>
                <h3 className="text-xl">Secure</h3>
                <p className="mt-2 text-neutral-400 text-sm lg:text-base">
                  Mitigate hacker attacks with the Proof-of-Work security algorithm where the whole network validates
                  each block generated, with the mining reward distributed among stakeholders.
                </p>
              </Fade>
            </div>
          </div>
          <Fade className="h-[300px] md:h-[400px] xl:h-full" direction={"up"} triggerOnce={true}>
            <video
              className="absolute max-w-[650px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:max-w-[600px] md:max-w-[570px] lg:max-w-[800px] xl:transform-none xl:left-[-89%] xl:top-[-85%] xl:max-w-[1080px] xl:inset-x-0"
              height="100%"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src={MetaverseVdieo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </Fade>
          <div className="text-center mx-auto lg:mx-0 max-w-[344px] py-8 gap-4 flex flex-col justify-evenly lg:text-left">
            <div>
              <Fade direction={"up"} triggerOnce={true}>
                <h3 className="text-xl">Scalable</h3>
                <p className="mt-2 text-neutral-400 text-sm lg:text-base">
                  Run cross-chain operations profitably with a modular framework that allows connecting dapps, services,
                  and independent blockchains to exchange data and perform transactions at low costs.
                </p>
              </Fade>
            </div>
            <div>
              <Fade direction={"up"} triggerOnce={true}>
                <h3 className="text-xl">Diverse</h3>
                <p className="mt-2 text-neutral-400 text-sm lg:text-base">
                  Be ahead of the Metaverse innovation! Introduce a new NFT product to the existing Metaverse or create
                  your own blockchain-based NFT marketplace from scratch — whatever your imagination tells you!
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-20 py-20">
        <Fade direction={"up"} triggerOnce={true}>
          <span className="text-xs text-indigo-400 uppercase">FIND YOUR PERFECT APPLICATION</span>
          <h2 className="text-PolySans text-[48px] font-light">Multitude of Metaverse Use Cases</h2>
        </Fade>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-x-22 mt-20">
          <div>
            <Fade direction={"up"} triggerOnce={true}>
              <TbSocial
                fill="white"
                size={"52px"}
                className="block mx-auto p-2 border-4 bg-indigo-500 border-indigo-500 border-opacity-25 mb-10 rounded-full"
              />
              <h3 className="text-xl">Art galleries</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Showcase your artworks on virtual exhibitions for NFT art that bring together collectors and creators to
                trade and exchange those.
              </p>
            </Fade>
          </div>
          <div>
            <Fade direction={"up"} triggerOnce={true}>
              <GiVirtualMarker
                fill="white"
                size={"52px"}
                className="block mx-auto p-2 border-4 bg-indigo-500 border-indigo-500 border-opacity-25 mb-10 rounded-full"
              />
              <h3 className="text-xl">Virtual land</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Live a life in the Metaverse you want! Own land in the virtual world where you can build real estate or
                trade it for other assets or real money.
              </p>
            </Fade>
          </div>
          <div>
            <Fade direction={"up"} triggerOnce={true}>
              <HiOutlineAcademicCap
                size={"52px"}
                className="block mx-auto p-2 border-4 bg-indigo-500 border-indigo-500 border-opacity-25 mb-10 rounded-full"
              />
              <h3 className="text-xl">Education</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Enhance the level of education by visualizing every idea, every concept explained to students. In this
                fashion, you could organize virtual courses and training in the Metaverse.
              </p>
            </Fade>
          </div>
          <div>
            <Fade direction={"up"} triggerOnce={true}>
              <AiOutlineProject
                fill="white"
                size={"52px"}
                className="block mx-auto p-2 border-4 bg-indigo-500 border-indigo-500 border-opacity-25 mb-10 rounded-full"
              />
              <h3 className="text-xl">E-commerce</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Provide new opportunities for online customers by creating a virtual store they could seamlessly browse,
                having hyper personalized offers and purchasing goods through cardless payments.
              </p>
            </Fade>
          </div>
          <div>
            <Fade direction={"up"} triggerOnce={true}>
              <FaArtstation
                fill="white"
                size={"52px"}
                className="block mx-auto p-2 border-4 bg-indigo-500 border-indigo-500 border-opacity-25 mb-10 rounded-full"
              />
              <h3 className="text-xl">Retail</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Deliver the new-age shopping experience to be right at users’ fingertips, creating shops, malls, display
                windows, and other shopping venues in the Metaverse.
              </p>
            </Fade>
          </div>
          <div>
            <Fade direction={"up"} triggerOnce={true}>
              <CgClapperBoard
                fill="white"
                size={"52px"}
                className="block mx-auto p-2 border-4 bg-indigo-500 border-indigo-500 border-opacity-25 mb-10 rounded-full"
              />
              <h3 className="text-xl">Social media</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Launch a social media Metaverse where users could chat, consume content, like and share each other’s
                posts, play together, and enjoy a lot of other activities in 3D environments.
              </p>
            </Fade>
          </div>
        </div>
      </section>
      <section className="bg-neutral-900 p-11 flex flex-col lg:flex-row items-center max-w-[1020px] mx-auto rounded gap-10">
        <Fade direction={"up"} triggerOnce={true}>
          <img src={EmptyCircal} alt="empty" />
          <div className="text-center lg:text-left">
            <h2 className="text-5xl">And there's more</h2>
            <p className="mt-2 text-neutral-400 text-base max-w-[377px]">
              Tell us about your future Metaverse project, and we will contact you within one business day.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="bg-indigo-500 hover:bg-indigo-700 transition ease-in-out duration-500 cursor-pointer py-3.5 px-5 mx-auto lg:mx-0 lg:ml-auto rounded flex items-center gap-3"
          >
            Get a Quote <img src={GoArrowIcon} alt="go arrow" />
          </button>
        </Fade>
      </section>
    </div>
  );
};

export default MetaverseSection;
