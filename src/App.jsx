import Cryptocurrency from "./modules/Cryptocurrency";
import Empowering from "./modules/Empowering";
import NFTGameDev from "./modules/NFTGameDev";
import DeveSection from "./modules/DeveSection";
import MetaverseSection from "./modules/MetaverseSection";
import WeWorkWith from "./modules/WeWorkWith";
import BestInClass from "./modules/BestInClass";
import NFTMarket from "./modules/NFTMarket";

const App = () => {
  return (
    <div className="bg-[rgba(7,7,7)] text-whiteText text-neutral-50">
      <div className="container mx-auto">
        <Empowering />
        <DeveSection />
        <BestInClass />
        <Cryptocurrency />
        <WeWorkWith />
        <NFTMarket />
        <NFTGameDev />
        <MetaverseSection />
      </div>
    </div>
  );
};

export default App;
