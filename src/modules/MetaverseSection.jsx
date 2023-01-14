import MetaverseImage from "../assets/images/Metaverse-Image.png";
import DoubleArrowIcon from "../assets/images/DoubleArrowIcon.svg";
import EmptyCircal from "../assets/images/EmptyCircal.png";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";

const MetaverseSection = () => {
  return (
    <>
      <section>
        <h2 className="text-5xl md:text-6xl lg:text-7xl text-center text-indigo-300 mb-12">Metaverse Development</h2>
        <div className="lg:grid lg:grid-cols-3">
          <div className="text-center py-8 gap-4 flex flex-col justify-evenly lg:text-right">
            <div>
              <h3 className="text-xl">Interoperable</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Automate and secure operations on the Metaverse by trusting us with the development of Metaverse smart
                contracts compatible across various chains.
              </p>
            </div>
            <div>
              <h3 className="text-xl">Secure</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Mitigate hacker attacks with the Proof-of-Work security algorithm where the whole network validates each
                block generated, with the mining reward distributed among stakeholders.
              </p>
            </div>
          </div>
          <img src={MetaverseImage} alt="Metaverse" className="block mx-auto px-6" />
          <div className="text-center py-8 gap-4 flex flex-col justify-evenly lg:text-left">
            <div>
              <h3 className="text-xl">Scalable</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Run cross-chain operations profitably with a modular framework that allows connecting dapps, services,
                and independent blockchains to exchange data and perform transactions at low costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl">Diverse</h3>
              <p className="mt-2 text-neutral-400 text-base">
                Be ahead of the Metaverse innovation! Introduce a new NFT product to the existing Metaverse or create
                your own blockchain-based NFT marketplace from scratch — whatever your imagination tells you!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-20 py-20">
        <span className="text-xs text-indigo-400 uppercase">FIND YOUR PERFECT APPLICATION</span>
        <h2 className="text-PolySans text-[48px] font-light">Multitude of Metaverse Use Cases</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-x-22 mt-20">
          <div>
            <img src={DoubleArrowIcon} alt="double arrow" className="block mx-auto  mb-10" />
            <h3 className="text-xl">Art galleries</h3>
            <p className="mt-2 text-neutral-400 text-base">
              Showcase your artworks on virtual exhibitions for NFT art that bring together collectors and creators to
              trade and exchange those.
            </p>
          </div>
          <div>
            <img src={DoubleArrowIcon} alt="double arrow" className="block mx-auto  mb-10" />
            <h3 className="text-xl">Virtual land</h3>
            <p className="mt-2 text-neutral-400 text-base">
              Live a life in the Metaverse you want! Own land in the virtual world where you can build real estate or
              trade it for other assets or real money.
            </p>
          </div>
          <div>
            <img src={DoubleArrowIcon} alt="double arrow" className="block mx-auto  mb-10" />
            <h3 className="text-xl">Education</h3>
            <p className="mt-2 text-neutral-400 text-base">
              Enhance the level of education by visualizing every idea, every concept explained to students. In this
              fashion, you could organize virtual courses and training in the Metaverse.
            </p>
          </div>
          <div>
            <img src={DoubleArrowIcon} alt="double arrow" className="block mx-auto  mb-10" />
            <h3 className="text-xl">E-commerce</h3>
            <p className="mt-2 text-neutral-400 text-base">
              Provide new opportunities for online customers by creating a virtual store they could seamlessly browse,
              having hyper personalized offers and purchasing goods through cardless payments.
            </p>
          </div>
          <div>
            <img src={DoubleArrowIcon} alt="double arrow" className="block mx-auto  mb-10" />
            <h3 className="text-xl">Retail</h3>
            <p className="mt-2 text-neutral-400 text-base">
              Deliver the new-age shopping experience to be right at users’ fingertips, creating shops, malls, display
              windows, and other shopping venues in the Metaverse.
            </p>
          </div>
          <div>
            <img src={DoubleArrowIcon} alt="double arrow" className="block mx-auto  mb-10" />
            <h3 className="text-xl">Social media</h3>
            <p className="mt-2 text-neutral-400 text-base">
              Launch a social media Metaverse where users could chat, consume content, like and share each other’s
              posts, play together, and enjoy a lot of other activities in 3D environments.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-900 p-11 flex flex-col lg:flex-row items-center max-w-[1020px] mx-auto rounded gap-10">
        <img src={EmptyCircal} alt="empty" />
        <div className="text-center lg:text-left">
          <h2 className="text-5xl">And there's more</h2>
          <p className="mt-2 text-neutral-400 text-base max-w-[377px]">
            Tell us about your future Metaverse project, and we will contact you within one business day.
          </p>
        </div>
        <button className="bg-indigo-500 py-3.5 px-5 mx-auto lg:mx-0 lg:ml-auto rounded flex items-center gap-3">
          Get a Quote <img src={GoArrowIcon} alt="go arrow" />
        </button>
      </section>
    </>
  );
};

export default MetaverseSection;
