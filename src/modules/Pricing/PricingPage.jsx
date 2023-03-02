import Footer from "../Layout/Footer";
import GradientFooter from "../../assets/GradientFooter.png";
import PricingCard from "./PricingCard";
import HeaderGradient from "../../assets/pricingPageHeaderGradient.png";
import { ReactComponent as ContactSalesIcon } from "../../assets/ContactSales.svg";
import { ReactComponent as SalesContactArrow } from "../../assets/SalesContactArrow.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const PricingPage = () => {
  const [isMatch] = useMediaQuery("(min-width: 767px)");

  return (
    <section className="bg-[#070707] relative text-neutral-50 pt-[150px] md:pt-[262px]">
      <img
        className="absolute transform -translate-x-1/2 top-[-100px] md:top-[-25%] lg:top-[-490px] left-1/2"
        src={HeaderGradient}
      />
      <section className="container text-center relative z-10 md:px-[170px]">
        <h1 className="font-PolySans text-4xl md:text-[48px]">Service Rates</h1>
        <p className="text-sm md:text-base mt-4 mb-[42px] md:mb-12 text-neutral-400 max-w-[864px]">
          Our pricing for services is estimated based on the unique specifications of each project. We will carefully
          review the project brief to determine the specific requirements and complexity of the work involved.
        </p>

        <section>
          <div className="flex justify-between px-3 py-5 mb-5 text-indigo-400 bg-indigo-400/10 rounded uppercase font-medium text-xs">
            <span>Services</span>
            <span>Starting from</span>
          </div>
          <PricingCard title="Cutting-Edge Web Development Services" price={10000} />
          <PricingCard title="Professional NFT Marketplace Building Services" price={40000} />
          <PricingCard title="Next-Generation NFT Game Creation" price={100000} />
          <PricingCard title="Professional Cryptocurrency Creation and Integration Services" price={50000} />
          <PricingCard title="Advanced Metaverse Development for Immersive Virtual Worlds" price={200000} />
          <PricingCard title="Advanced Financial Technology and Analytics Solutions" price={15000} />
        </section>
      </section>
      <section className="footer-bg relative bg-center bg-no-repeat" style={{ backgroundSize: 1400 }}>
        <section className="relative lg:py-9 text-center lg:text-left lg:px-[42px] gap-11 container max-w-[361px] lg:max-w-[1020px] flex flex-col lg:flex-row items-center bg-[#0D0D0D] rounded mt-[86px] mb-[192px]">
          <ContactSalesIcon className="absolute top-[-50px] lg:static" />
          <div>
            <h2 className="mt-[60px] font-medium text-[40px] lg:mt-0">
              {isMatch ? "Contact our sales team" : "Contact us"}
            </h2>
            <p className="text-sm mb-[56px] text-neutral-400 max-w-[313px] lg:mb-0 lg:max-w-[377px] lg:text-base">
              Let Us Know About Your Upcoming Project, and We'll Be in Touch Within One Business Day
            </p>
          </div>
          <button className="absolute bottom-[-25px] lg:static flex flex-row items-center rounded w-[198px] px-5 py-3.5 bg-indigo-500 lg:ml-auto">
            Get a Free Quote <SalesContactArrow className="ml-2" />
          </button>
        </section>
        <img src={GradientFooter} className="opacity-70 md:opacity-50 absolute w-full h-full bottom-0" />
        <Footer />
      </section>{" "}
    </section>
  );
};

export default PricingPage;
