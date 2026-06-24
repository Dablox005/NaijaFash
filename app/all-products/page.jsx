'use client'
import React from "react"; // Added React import for standard practice
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// FIX: Changed from default import to named import using curly braces {}
import { useApp } from "@/context/AppContext"; 

const AllProducts = () => {

    const { products } = useApp();

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Ambient Background Glow Effect to anchor the streetwear aesthetic */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D865]/5 rounded-full blur-[120px] pointer-events-none" />
            
            <nav>
                <Navbar />
            </nav>
            
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 relative z-10">
                {/* Title section with neon accent design lines */}
                <div className="flex flex-col items-start pt-12 group">
                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                        All Products
                    </p>
                    {/* Replaced flat orange line with a neon glow border bar */}
                    <div className="w-12 h-1 bg-[#00D865] rounded-full mt-1.5 shadow-[0_0_12px_rgba(0,216,101,0.6)] transition-all duration-300 group-hover:w-20"></div>
                </div>
                
                {/* Product Catalog Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 mt-12 pb-24 w-full">
                    {products && products.map((product, index) => (
                        <div 
                            key={index} 
                            className="transition-transform duration-300 hover:-translate-y-1"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AllProducts;