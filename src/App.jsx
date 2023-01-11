import Cryptocurrency from "./modules/Cryptocurrency";
import Empowering from "./modules/Empowering";
import NFTGameDev from "./modules/NFTGameDev";
import DeveSection from "./modules/DeveSection";
import WeWorkWith from "./modules/WeWorkWith";

const App = () => {
  return (
    <div className="App bg-[rgba(7,7,7)] text-whiteText text-neutral-50">
      <Empowering />
      <Cryptocurrency />
      <NFTGameDev />
      <DeveSection />
      <WeWorkWith />
    </div>
  );
};

export default App;
