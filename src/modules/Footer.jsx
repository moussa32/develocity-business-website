import React from "react";
import footerLogo from "../assets/footer-logo.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Telegram from "../assets/Telegram.svg";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div
      className="py-20 container mx-auto mt-24 flex flex-col md:flex-row justify-between text-center
    border-t-[1px] border-[rgb(77,76,76)] md:text-left"
    >
      <div>
        <Fade direction={"up"} triggerOnce={true}>
          <img className="mx-auto md:mx-0" src={`${footerLogo}`} alt="footer logo" />
          <p className="mt-6 text-sm">© 2022 Develocity, LLC. All Rights Reserved</p>
        </Fade>
      </div>
      <div className="grid grid-cols-4 my-10">
        <Fade direction={"up"} triggerOnce={true}>
          <img className="block mx-auto md:mx-2.5" src={`${Facebook}`} alt="Facebook icon" />
          <img className="block mx-auto md:mx-2.5" src={`${Twitter}`} alt="Twitter icon" />
          <img className="block mx-auto md:mx-2.5" src={`${Instagram}`} alt="Instagram icon" />
          <img className="block mx-auto md:mx-2.5" src={`${Telegram}`} alt="Telegram icon" />
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
