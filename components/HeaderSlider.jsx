"use client";
import React, { useState, useEffect, useMemo } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation"; // <-- Imported useRouter hook

const HeaderSlider = () => {
  const router = useRouter(); // <-- Initialized router
  
  const sliderData = useMemo(() => [
    {
      id: 1,
      title: "Experience Real Culture - Your Perfect Statement Pieces Await!",
      offer: "Alté & Culture Essentials 🦅",
      buttonText1: "Buy now",
      buttonText2: "Go Crazy",
      imgSrc: assets.model1,
    },
    {
      id: 2,
      title: "Street Meets Luxury - Ashluxe & High Fashion Are Here for You!!",
      offer: "Highly Anticipated Drops 🔥",
      buttonText1: "Shop Now",
      buttonText2: "Explore Drops",
      imgSrc: assets.model2,
    },
    {
      id: 3,
      title: "Elevate Your Style - Discover the Latest in Fashion & Culture Today!",
      offer: "Premium Wardrobe Staples 🌍",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.model4,
    },
  ], []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full select-none">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col md:flex-row items-center bg-[#E6E9F2] w-full min-w-full h-[600px] sm:h-[560px] md:h-[420px] lg:h-[500px] px-6 sm:px-12 md:px-16 mt-6 rounded-3xl overflow-hidden"
          >
            {/* Left Column: Text Content Block */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left pt-8 pb-4 md:py-0 order-2 md:order-1 h-auto md:h-full z-10">
              <p className="text-xs sm:text-sm font-semibold text-zinc-900 pb-1.5 flex items-center gap-1">
                <span className="text-[#00D865] font-bold">//</span> {slide.offer}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug sm:leading-snug md:leading-tight">
                {slide.title}
              </h1>

              <div className="flex items-center gap-2 mt-5 md:mt-6">
                {/* Main Action Button */}
                <button 
                  onClick={() => router.push("/all-products")} // <-- Added catalog push router
                  className="px-6 sm:px-8 py-2.5 bg-zinc-900 text-[#00D865] border-2 border-zinc-900 rounded-full text-xs sm:text-sm font-bold hover:bg-[#00D865] hover:text-black hover:border-[#00D865] transition-all duration-300 active:scale-95 shadow-md"
                >
                  {slide.buttonText1}
                </button>

                {/* Secondary Explore Action Text Arrow */}
                <button 
                  onClick={() => router.push("/all-products")} // <-- Added catalog push router
                  className="group flex items-center gap-1 px-3 py-2.5 text-xs sm:text-sm font-bold text-zinc-800 hover:text-black transition"
                >
                  {slide.buttonText2}
                  <Image className="w-4 h-4 group-hover:translate-x-1 transition-transform" src={assets.arrow_icon} alt="arrow_icon" />
                </button>
              </div>
            </div>

            {/* Right Column: High-Fidelity Image Container Box */}
            <div className="w-full md:w-1/2 h-[280px] sm:h-[320px] md:h-full order-1 md:order-2 relative flex items-end justify-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-none md:w-full h-full md:h-[110%]">
                <Image
                  className="object-contain object-bottom pointer-events-none drop-shadow-[-15px_10px_20px_rgba(0,0,0,0.12)]"
                  src={slide.imgSrc}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 360px, (max-width: 1024px) 50vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Pagination Track */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            aria-label={`Slide target ${index + 1}`}
            className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${
              currentSlide === index ? "w-7 bg-[#00D865]" : "w-2 bg-gray-400/40 hover:bg-gray-400/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;