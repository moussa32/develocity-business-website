import Cryptocurrency from "./modules/Cryptocurrency";
import Empowering from "./modules/Empowering";
import NFTGameDev from "./modules/NFTGameDev";
import DeveSection from "./modules/DeveSection";
import MetaverseSection from "./modules/MetaverseSection";
import WeWorkWith from "./modules/WeWorkWith";
import BestInClass from "./modules/BestInClass";
import NFTMarket from "./modules/NFTMarket";
import ProjectIdea from "./modules/ProjectIdea";
import Footer from "./modules/Footer";
import TechnologySection from "./modules/TechnologySection";
import FinTech from "./modules/FinTech";
import GradientFooter from "./assets/GradientFooter.png";
import { useCallback, useState } from "react";
import HowItWorksModal from "./modules/Modals/HowItWorksModal";
import SuccessModal from "./modules/Modals/SuccessModal";

const App = () => {
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

export default App;
