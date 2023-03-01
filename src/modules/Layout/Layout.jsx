import { Outlet } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Layout = () => {
  const [isMatch] = useMediaQuery("(min-width: 767px)");

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
