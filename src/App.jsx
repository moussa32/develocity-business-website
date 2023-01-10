import Cryptocurrency from "./modules/Cryptocurrency";
import Empowering from "./modules/Empowering";
import NFTGameDev from "./modules/NFTGameDev";
import DeveSection from "./modules/DeveSection";

const App = () => {
  return (
    <div className="bg-[rgba(7,7,7)] text-whiteText text-neutral-50">
      <Empowering />
      <DeveSection />
      <Cryptocurrency />
      <NFTGameDev />
    </div>
  );
};

export default App;
