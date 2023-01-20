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

const App = () => {
  return (
    <div className="bg-[rgba(7,7,7)] text-whiteText text-neutral-50">
      <Empowering />
      <div className="container mx-auto">
        <DeveSection />
        <BestInClass />
        <Cryptocurrency />
        <WeWorkWith />
        <NFTMarket />
        <NFTGameDev />
        <MetaverseSection />
        <FinTech />
      </div>
      <div className="bg-footer-bg relative bg-center bg-no-repeat">
        <img src={GradientFooter} className="opacity-70 md:opacity-50 absolute w-full h-full bottom-0" />
        <TechnologySection />
        <ProjectIdea />
        <Footer />
      </div>
    </div>
  );
};

export default App;
