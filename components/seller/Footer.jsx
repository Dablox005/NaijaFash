import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Logo from "../logong";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 border-t border-gray-200 mt-10 bg-white">
      <div className="flex items-center gap-4">
        {/* Custom Logo instance */}
        <div className="hidden md:block h-8 w-24 overflow-hidden">
          <Logo className="h-full w-full object-contain" />
        </div>
        <div className="hidden md:block h-7 w-px bg-gray-300"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500 font-medium">
          Copyright 2026 © bigdandev All Rights Reserved.
        </p>
      </div>
      
      {/* Social Icons with interactive brand neon green filters on hover */}
      <div className="flex items-center gap-4 py-4 md:py-0">
        <a href="#" className="hover:scale-110 hover:brightness-100 transition-all duration-200">
          <Image className="h-5 w-5 opacity-80 hover:opacity-100" src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#" className="hover:scale-110 transition-all duration-200">
          <Image className="h-5 w-5 opacity-80 hover:opacity-100" src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#" className="hover:scale-110 transition-all duration-200">
          <Image className="h-5 w-5 opacity-80 hover:opacity-100" src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;