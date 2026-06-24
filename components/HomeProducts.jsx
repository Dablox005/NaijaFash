import React from "react";
import ProductCard from "./ProductCard";
import { useApp } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useApp()

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full text-zinc-900">Popular products</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
        {/* Change your mapping block to this safely chained approach */}
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
      </div>
      
      {/* Updated to a sleek neon-outlined button that fills up on hover */}
      <button 
        onClick={() => { router.push('/all-products') }} 
        className="px-12 py-2.5 border-2 border-[#00D865] text-zinc-900 font-semibold rounded hover:bg-[#00D865] hover:text-black transition duration-300 active:scale-[0.98]"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;