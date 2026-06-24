import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium text-zinc-900">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        NaijaFash - An array of Nigerian fashion brands.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-4 text-gray-700 bg-white focus:border-[#00D865] transition"
          type="email"
          placeholder="Enter your email id"
        />
        {/* Changed button to solid Neon Green with black text and smooth hover transition */}
        <button className="md:px-12 px-8 h-full bg-[#00D865] text-black font-semibold rounded-md rounded-l-none hover:bg-[#00b554] transition active:scale-[0.98]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;