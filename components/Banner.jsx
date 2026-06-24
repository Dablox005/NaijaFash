import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[380px] md:h-[400px] flex items-center justify-center bg-[#E6E9F2] my-16 rounded-xl overflow-hidden px-6 py-12 md:py-0">
      
      {/* Left Model - Anchored to bottom left on desktop */}
      <div className="absolute left-6 md:left-12 bottom-0 w-28 sm:w-36 md:w-56 lg:w-64 aspect-[3/4]">
        <Image
          className="object-contain object-bottom w-full h-full"
          src={assets.model4}
          alt="Left fashion model"
          priority
        />
      </div>

      {/* Center Content - Kept on top layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 max-w-sm md:max-w-md mx-auto my-auto pt-24 md:pt-0">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
          Built for the <br className="hidden md:block"/> Creative Wave
        </h2>
        <p className="text-sm md:text-base font-medium text-gray-600 max-w-[340px]">
          Unapologetic style meets modern luxury. Discover exclusive statement fits crafted to disrupt the ordinary.
        </p>
        <button className="group flex items-center justify-center gap-2 px-10 py-3 bg-[#00FF66] hover:bg-[#00E55C] transition duration-200 rounded-full text-black font-semibold shadow-lg shadow-[#00FF66]/20 active:scale-95">
          Go Crazy
          <Image className="group-hover:translate-x-1 transition h-4 w-4 brightness-0" src={assets.arrow_icon_white} alt="arrow_icon" />
        </button>
      </div>

      {/* Right Model - Hidden on small screens, anchored to bottom right on desktop */}
      {/* Tip: Swap src to assets.model5 (or another cutout) later so it's not identical! */}
      <div className="hidden md:block absolute right-12 bottom-0 w-56 lg:w-64 aspect-[3/4]">
        <Image
          className="object-contain object-bottom w-full h-full scale-x-[-1]" // Flips her to face inward
          src={assets.model4} 
          alt="Right fashion model"
          priority
        />
      </div>

    </div>
  );
};

export default Banner;