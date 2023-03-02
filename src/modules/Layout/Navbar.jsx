import navLogo from "../../assets/NavLogo.svg";
import * as Scroll from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

let Link = Scroll.Link;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="container pt-12 mx-auto relative">
      <img src={`${navLogo}`} alt="logo" className="md:block hidden mx-auto lg:mt-4 lg:absolute" />
      <div
        className="py-4 px-8 gap-1 mx-auto hidden mt-3 h-16 bg-opacity-5 bg-white text-white text-base
          rounded-[20px] justify-evenly items-center backdrop-blur-md md:flex md:max-w-[593px] lg:mt-0"
      >
        {pathname.includes("pricing") ? (
          <RouterLink
            to="/"
            className={`font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer`}
          >
            Home
          </RouterLink>
        ) : (
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer"
            spy
            smooth
            to="home"
          >
            Home
          </Link>
        )}
        {pathname.includes("pricing") ? (
          <RouterLink
            to="/#web3.0"
            className={`font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer`}
            rel="dofollow"
          >
            Web 3.0
          </RouterLink>
        ) : (
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer"
            offset={50}
            spy
            smooth
            to="web3.0"
          >
            Web 3.0
          </Link>
        )}
        {pathname.includes("pricing") ? (
          <RouterLink
            to="/#NFT"
            className={`font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer`}
            rel="dofollow"
          >
            NFT
          </RouterLink>
        ) : (
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="NFT"
          >
            NFT
          </Link>
        )}
        {pathname.includes("pricing") ? (
          <RouterLink
            to="/#Metaverse"
            className={`font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer`}
            rel="dofollow"
          >
            Metaverse
          </RouterLink>
        ) : (
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="Metaverse"
          >
            Metaverse
          </Link>
        )}
        {pathname.includes("pricing") ? (
          <RouterLink
            to="/#DeFi"
            className={`font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer`}
            rel="dofollow"
          >
            DeFi
          </RouterLink>
        ) : (
          <Link
            activeStyle={{
              color: "rgb(129, 140, 248)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="font-medium transition duration-500 hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer"
            offset={-150}
            spy
            smooth
            to="DeFi"
          >
            DeFi
          </Link>
        )}

        <RouterLink
          to="/pricing"
          className={`font-medium transition duration-500 ${
            pathname.includes("pricing") ? "text-indigo-400 bg-[#00000080]" : null
          } hover:text-indigo-400 hover:bg-white/5 px-4 py-1.5 rounded-lg cursor-pointer`}
          rel="dofollow"
        >
          Pricing
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
