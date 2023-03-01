import Cryptocurrency from "./Cryptocurrency";
import Empowering from "./Empowering";
import NFTGameDev from "./NFTGameDev";
import DeveSection from "./DeveSection";
import MetaverseSection from "./MetaverseSection";
import WeWorkWith from "./WeWorkWith";
import BestInClass from "./BestInClass";
import NFTMarket from "./NFTMarket";
import ProjectIdea from "./ProjectIdea";
import Footer from "./Layout/Footer";
import TechnologySection from "./TechnologySection";
import FinTech from "./FinTech";
import GradientFooter from "../assets/GradientFooter.png";
import { useCallback, useState } from "react";
import HowItWorksModal from "./Modals/HowItWorksModal";
import SuccessModal from "./Modals/SuccessModal";

const Home = () => {
  const [step, setStep] = useState("howItWork");
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    //When modal is closed it should reset the step
    setStep("howItWork");
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  return (
    <div className="bg-[rgba(7,7,7)] text-whiteText text-neutral-50 overflow-hidden">
      <Empowering onOpenModal={handleOpenModal} />
      <div className="container relative">
        <DeveSection />
        <BestInClass />
        <Cryptocurrency />
        <WeWorkWith />
        <NFTMarket />
        <NFTGameDev />
        <MetaverseSection onOpenModal={handleOpenModal} />
        <FinTech />
      </div>
      <div className="footer-bg relative bg-center bg-no-repeat">
        <img src={GradientFooter} className="opacity-70 md:opacity-50 absolute w-full h-full bottom-0" />
        <TechnologySection />
        <ProjectIdea onOpenModal={handleOpenModal} />
        <Footer />
      </div>
      <div className="container mx-auto">
        {step === "howItWork" && (
          <HowItWorksModal isOpen={isOpen} onCloseModal={handleCloseModal} handleCurrentModal={setStep} />
        )}
        {step === "success" && <SuccessModal isOpen={isOpen} onCloseModal={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Home;
