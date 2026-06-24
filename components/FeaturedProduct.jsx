import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.alte,
    title: "Alte & Culture",
    description: "Statement pieces designed to break boundaries and redefine daily wear.",
  },
  {
    id: 2,
    image: assets.str2,
    title: "Street Luxury",
    description: "High-fashion elements meet raw streetwear aesthetics for the bold.",
  },
  {
    id: 3,
    image: assets.str1,
    title: "The New Wave",
    description: "Explore exclusive limited drops, premium heavy cotton cuts, and graphics.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-zinc-900">Featured Products</p>
        {/* Changed the underline accent bar to the exact branding neon green */}
        <div className="w-28 h-0.5 bg-[#00D865] mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div 
            key={id} 
            className="relative group w-full h-[450px] md:h-[520px] overflow-hidden rounded-xl bg-neutral-900"
          >
            {/* Dark gradient overlay to ensure text readability on light images */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

            {/* Background Image fixed to cover the entire container */}
            <Image
              src={image}
              alt={title}
              className="group-hover:scale-105 group-hover:brightness-75 transition duration-500 w-full h-full object-cover object-center"
            />
            
            {/* Animated Content Layer */}
            <div className="group-hover:-translate-y-2 transition duration-300 absolute bottom-6 left-6 right-6 text-white space-y-2 z-20">
              <p className="font-semibold text-xl lg:text-2xl drop-shadow-md">{title}</p>
              <p className="text-xs lg:text-sm leading-relaxed text-gray-200 max-w-xs drop-shadow-sm line-clamp-3">
                {description}
              </p>
              <div className="pt-2">
                {/* Changed background to bold neon green with solid black text for peak readability */}
                <button className="flex items-center gap-1.5 bg-[#00D865] text-black hover:bg-[#00b554] transition active:scale-95 px-4 py-2 rounded text-sm font-semibold shadow-md">
                  View Drop 
                  {/* Removed the 'invert' class from the icon so it prints cleanly in its dark native color */}
                  <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;