import Cryptocurrency from "./modules/Cryptocurrency";
import Empowering from "./modules/Empowering";
import NFTGameDev from "./modules/NFTGameDev";

const App = () => {
  return (
    <div className="App bg-secondary text-whiteText text-neutral-50">
      <Empowering />
      <Cryptocurrency />
      <NFTGameDev />
    </div>
  );
};

export default App;
