import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import { Fade } from "react-awesome-reveal";
import DeveWhiteLogo from "../../assets/DeveLogoWhite.png";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";

// import Telegram from "../assets/Telegram.svg";

const Footer = () => {
  return (
    <div
      className="py-20 container mx-auto mt-24 flex flex-col md:flex-row justify-between text-center
    border-t-[1px] border-[rgb(77,76,76)] md:text-left"
    >
      <div>
        <Fade direction={"up"} triggerOnce={true}>
          <img className="mx-auto md:mx-0" src={DeveWhiteLogo} alt="footer logo" />
          <p className="mt-4 text-sm">© 2022 Develocity, LLC. All Rights Reserved</p>
        </Fade>
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-4 my-10">
        <Fade direction={"up"} triggerOnce={true}>
          <a href="https://youtube.com/@develocitygroup">
            <AiOutlineYoutube color="#C7C7C7" className="block mx-auto" size={40} />
          </a>
          <a href="https://twitter.com/develocitygroup">
            <AiOutlineTwitter color="#C7C7C7" className="block mx-auto" size={40} />
          </a>
          <a href="https://instagram.com/deve_develocity">
            <BsInstagram color="#C7C7C7" className="block mx-auto" size={28} />
          </a>
          {/* <a href="#">
            <img className="block mx-auto md:mx-2.5" src={`${Telegram}`} alt="Telegram icon" />
          </a> */}
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
