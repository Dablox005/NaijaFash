"use client";
import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
// 1. Import Next.js's router hook directly
import { useRouter } from 'next/navigation'; 

const ProductCard = ({ product }) => {
    // 2. Initialize the router hook inside your component
    const router = useRouter(); 
    // 3. Remove router from useApp destructuring
    const { addToCart } = useApp(); 
    
    const [selectedSize, setSelectedSize] = useState('S');
    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer group/card"
        >
            {/* Main Image Viewport Box Container */}
            <div className="cursor-pointer relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
                
                {product.image && product.image.length > 1 ? (
                    <div className="w-full h-full relative flex items-center justify-center">
                        <Image
                            src={product.image[0]}
                            alt={product.name}
                            className="absolute transition-opacity duration-300 opacity-100 group-hover/card:opacity-0 object-cover w-4/5 h-4/5 md:w-full md:h-full"
                            width={800}
                            height={800}
                        />
                        <Image
                            src={product.image[1]}
                            alt={`${product.name} alt`}
                            className="absolute transition-opacity duration-300 opacity-0 group-hover/card:opacity-100 object-cover w-4/5 h-4/5 md:w-full md:h-full"
                            width={800}
                            height={800}
                        />
                    </div>
                ) : (
                    <Image
                        src={product.image ? product.image[0] : ""}
                        alt={product.name}
                        className="transition-transform duration-300 group-hover/card:scale-105 object-cover w-4/5 h-4/5 md:w-full md:h-full"
                        width={800}
                        height={800}
                    />
                )}

                {/* Wishlist Button Node */}
                <button 
                    onClick={(e) => e.stopPropagation()} 
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 active:scale-90 transition z-10"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            {/* Product Meta Section */}
            <p className="md:text-base font-medium pt-2 w-full truncate text-zinc-900 group-hover/card:text-[#00D865] transition-colors">{product.name}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
            
            {/* Interactive Toggle Layer (Rating vs Sizes) */}
            <div className="w-full relative h-9 mt-1 overflow-hidden">
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 transition-all duration-300 group-hover/card:-translate-y-full group-hover/card:opacity-0">
                    <p className="text-xs font-semibold text-zinc-700">{4.5}</p>
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className={`h-3 w-3 ${index < Math.floor(4) ? "brightness-100 mix-blend-normal" : "opacity-40"}`}
                                src={index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon}
                                alt="star_icon"
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100 flex flex-col justify-end">
                    <div className="flex border border-gray-200 rounded text-center bg-white overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`flex-1 text-[10px] font-bold py-1 transition border-r last:border-0 border-gray-100 ${
                              selectedSize === size
                                ? "bg-zinc-950 text-white"
                                : "bg-white text-zinc-600 hover:bg-zinc-50"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                    </div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-zinc-400 mt-0.5">
                        Size: <span className="text-zinc-800">{selectedSize}</span>
                    </p>
                </div>
            </div>

            {/* Price Matrix Node */}
            <div className="flex items-end justify-between w-full mt-1.5">
                <p className="text-base font-bold text-zinc-900">
                    ₦{Number(product.offerPrice).toLocaleString()}
                </p>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, selectedSize);
                        router.push('/cart'); // This will now transition flawlessly!
                    }}
                    className="max-sm:hidden px-4 py-1.5 border border-[#00D865] text-zinc-900 font-medium rounded-full text-xs hover:bg-[#00D865] hover:text-black transition-all duration-200"
                >
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;