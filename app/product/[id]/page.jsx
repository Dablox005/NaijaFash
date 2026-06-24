"use client";
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; // Imported useRouter safely
import Loading from "@/components/Loading";
import { useApp } from "@/context/AppContext"; // FIX: Named import change

const Product = () => {
    const { id } = useParams();
    const router = useRouter(); // Instantiated standard router hook safely
    const { products, addToCart } = useApp(); // FIX: Extracted from useApp hook

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);
    const [selectedSize, setSelectedSize] = useState('S');

    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

    const fetchProductData = async () => {
        if (!products) return;
        const product = products.find(product => product._id === id);
        setProductData(product);
        // Reset main image view when navigation between different product pages occurs
        if (product && product.image && product.image.length > 0) {
            setMainImage(product.image[0]);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products?.length]);

    return productData ? (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Ambient Streetwear Glow Layers */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00D865]/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-2/3 right-0 w-80 h-80 bg-[#00D865]/5 rounded-full blur-[120px] pointer-events-none" />

            <nav>
                <Navbar />
            </nav>
            
            <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Product Images Viewport */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-xl overflow-hidden bg-zinc-100 border border-gray-200/60 p-4 flex items-center justify-center aspect-square">
                            <Image
                                src={mainImage || productData.image?.[0]}
                                alt={productData.name}
                                className="max-h-[450px] w-auto object-contain mix-blend-multiply transition-all duration-300"
                                width={1280}
                                height={720}
                                priority
                            />
                        </div>

                        {/* Image Gallery Selection Grid */}
                        <div className="grid grid-cols-4 gap-3.5">
                            {productData.image && productData.image.map((image, index) => {
                                const isCurrent = mainImage === image;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => setMainImage(image)}
                                        className={`cursor-pointer rounded-lg overflow-hidden bg-zinc-100 border p-1.5 transition-all duration-200 ${
                                            isCurrent 
                                                ? "ring-2 ring-[#00D865] border-transparent scale-95 shadow-md" 
                                                : "border-gray-200 hover:border-zinc-400"
                                        }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`thumbnail_${index}`}
                                            className="w-full h-auto object-cover mix-blend-multiply"
                                            width={1280}
                                            height={720}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Product Meta Ledger */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
                            {productData.name}
                        </h1>
                        
                        {/* Rating Component Block */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-0.5">
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star" />
                                <Image className="h-4 w-4" src={assets.star_icon} alt="star" />
                                <Image className="h-4 w-4" src={assets.star_dull_icon} alt="star_dull" />
                            </div>
                            <p className="text-sm font-semibold text-zinc-500">(4.5)</p>
                        </div>

                        <p className="text-zinc-600 text-base leading-relaxed mb-6">
                            {productData.description}
                        </p>

                        {/* Feature: Sizing Grid Interface Block */}
                        <div className="flex flex-col gap-2.5 mb-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Select Size: <span className="text-zinc-900 font-extrabold">{selectedSize}</span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[44px] h-10 px-3 text-xs font-bold rounded border transition-all ${
                                            selectedSize === size
                                                ? "bg-zinc-950 border-zinc-950 text-white shadow-sm"
                                                : "bg-white border-zinc-200 text-zinc-800 hover:border-zinc-400"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Pricing Component Nodes switched cleanly to Naira (₦) */}
                        <p className="text-3xl font-extrabold text-zinc-900 mt-2 flex items-baseline gap-2.5">
                            ₦{Number(productData.offerPrice).toLocaleString()}
                            <span className="text-base font-medium text-zinc-400 line-through">
                                ₦{Number(productData.price).toLocaleString()}
                            </span>
                        </p>

                        <hr className="border-gray-200 my-6" />

                        {/* Structural Specs Matrix */}
                        <div className="overflow-x-auto">
                            <table className="table-auto border-collapse w-full max-w-xs text-sm">
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="py-2">
                                        <td className="text-zinc-400 font-medium py-2 w-24">Brand</td>
                                        <td className="text-zinc-800 font-semibold py-2">Generic</td>
                                    </tr>
                                    <tr>
                                        <td className="text-zinc-400 font-medium py-2">Color</td>
                                        <td className="text-zinc-800 font-semibold py-2">Multi</td>
                                    </tr>
                                    <tr>
                                        <td className="text-zinc-400 font-medium py-2">Category</td>
                                        <td className="text-zinc-800 font-semibold py-2 capitalize">
                                            {productData.category}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Context Submission Button Array */}
                        <div className="flex flex-col sm:flex-row items-center mt-8 gap-4 w-full">
                            <button 
                                type="button"
                                onClick={() => addToCart(productData, selectedSize)} 
                                className="w-full py-4 border-2 border-zinc-900 text-zinc-900 font-bold rounded-lg hover:bg-zinc-900 hover:text-white transition duration-200 active:scale-[0.98] text-sm uppercase tracking-wider"
                            >
                                Add to Cart
                            </button>
                            <button 
                                type="button"
                                onClick={() => { addToCart(productData, selectedSize); router.push('/cart') }} 
                                className="w-full py-4 bg-[#00D865] text-black font-extrabold rounded-lg hover:bg-[#00b554] shadow-md hover:shadow-lg transition duration-200 active:scale-[0.98] text-sm uppercase tracking-wider"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Suggestions / Cross-sell Node Group */}
                <div className="flex flex-col items-center pt-10">
                    <div className="flex flex-col items-center mb-8 text-center group">
                        <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                            Featured <span className="text-[#00D865] drop-shadow-[0_0_12px_rgba(0,216,101,0.25)]">Products</span>
                        </p>
                        <div className="w-16 h-1 bg-[#00D865] rounded-full mt-2 shadow-[0_0_10px_rgba(0,216,101,0.5)] transition-all duration-300 group-hover:w-28"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 mt-4 w-full">
                        {products && products.slice(0, 5).map((product, index) => (
                            <div key={index} className="transition-transform duration-300 hover:-translate-y-1">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <button 
                        type="button"
                        onClick={() => router.push('/all-products')}
                        className="px-10 py-3 mt-14 mb-10 border-2 border-zinc-200 hover:border-zinc-800 text-zinc-600 hover:text-zinc-900 font-semibold rounded-full transition duration-200 text-sm active:scale-95 bg-white"
                    >
                        See more
                    </button>
                </div>
            </div>
            
            <footer>
                <Footer />
            </footer>
        </div>
    ) : <Loading />
};

export default Product;