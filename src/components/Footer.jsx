import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-screen h-[300px] p-8 flex flex-col md:flex-row justify-around md:justify-between items-center">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
        <img src="/assets/logo.png" alt="" />
        <div className=" font-black text-4xl cursor-pointer ml-6">
          <span className=" text-purple-800">T</span>antra
          <span className=" text-purple-800">F</span>iesta
        </div>
      </div>
      <div className="w-full md:w-1/4 flex justify-around md:justify-around text-4xl items-center">
        <a
          className="hover:text-pink-400"
          href="https://instagram.com/tantrafiesta"
        >
          <FaInstagram />
        </a>
        <a className="hover:text-white" href="https://twitter.com/tf2k22">
          {" "}
          <FaXTwitter />
        </a>
        <a
          className="hover:text-red-700"
          href="https://youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q"
        >
          <FaYoutube />
        </a>
        <a
          className="hover:text-blue-600"
          href="https://www.facebook.com/iiitntantra/"
        >
          <FaSquareFacebook />
        </a>
        <a
          className="hover:text-blue-800"
          href="https://www.linkedin.com/company/tantrafiesta-iiitn/"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
