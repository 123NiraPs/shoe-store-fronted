import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-zinc-400 pt-14 pb-3">
      <div className="flex justify-center md:flex-wrap">
        <div className="flex gap-4 justify-center md:justify-start">
          <h1>THG</h1>
          {/* <img src="https://cdn.ingenuitylite.com/thg-investors/images/62275e843eeaa6167146d3c8/original-thg-logo-png104x32.png" /> */}
        </div>
      </div>
      <div className="flex justify-center space-x-12 md:flex-wrap text-amber-400 pt-10 pb-8">
        <div
          className="hover:bg-white/[0.5] cursor-pointer"
          onClick={() => window.open("https://twitter.com/thgplc", "_blank")}
        >
          <FaTwitter size={20} />
        </div>
        <div
          className="hover:bg-white/[0.5] cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo",
              "_blank"
            )
          }
        >
          <AiFillLinkedin size={20} />
        </div>
        <div
          className="hover:bg-white/[0.5] cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/THGplc", "_blank")
          }
        >
          <FaFacebookF size={20} />
        </div>
        <div
          className="hover:bg-white/[0.5] cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/thg", "_target")
          }
        >
          <FaInstagram size={20} />
        </div>
      </div>
      <div className="flex text-black justify-center space-x-12 md:flex-wrap cursor-pointer">
        <h3>Cookie Policy</h3>
        <h3>Privacy Policy</h3>
        <h3>Modern Slavery Statement</h3>
        <h3>Security Issues</h3>
      </div>
      <div className="flex justify-center space-x-14 md:flex-wrap text-black pt-12">
        <div className="text-[12px]  hover:text-black cursor-pointer text-center md:text-left">
          ©2023 TheHutGroup.com Ltd. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
