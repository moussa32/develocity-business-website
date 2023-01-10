import Cryptocurrency from "./modules/Cryptocurrency";
import Empowering from "./modules/Empowering";
import NFTGameDev from "./modules/NFTGameDev";
import DeveSection from "./modules/DeveSection";

const App = () => {
  return (
    <div className="App bg-secondary text-whiteText text-neutral-50">
      <Empowering />
      <Cryptocurrency />
      <NFTGameDev />
      <DeveSection />
    </div>
  );
};

export default App;
