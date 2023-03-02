import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { scroller } from "react-scroll";

const Layout = () => {
  const [isMatch] = useMediaQuery("(min-width: 767px)");
  const location = useLocation();

  useEffect(() => {
    const sectionHash = location.hash.replace("#", "");
    window.scrollTo(0, 0);

    const offsetPerSection = sectionId => {
      if (window.innerWidth > 1030) {
        if (sectionId === "web3.0") return 60;
        if (sectionId === "NFT") return -150;
        if (sectionId === "Metaverse") return -145;
        if (sectionId === "DeFi") return -150;
      } else {
        if (sectionId === "web3.0") return 30;
        if (sectionId === "NFT") return 180;
        if (sectionId === "Metaverse") return 400;
        if (sectionId === "DeFi") return 300;
      }
    };

    if (sectionHash.length !== 0) {
      scroller.scrollTo(sectionHash, {
        duration: 1500,
        offset: offsetPerSection(sectionHash),
        smooth: true,
      });
    }
  }, [location]);

  return (
    <>
      <div className="fixed w-full z-40 mb-[148px]">
        {!isMatch && <SideMenu />}
        {isMatch && <Navbar />}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
