'use client'
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const AddAddress = () => {

    const [address, setAddress] = useState({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        area: '',
        city: '',
        state: '',
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Ambient Background Glow Effect */}
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00D865]/5 rounded-full blur-[100px] pointer-events-none" />

            <Navbar />
            
            <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between relative z-10">
                <form onSubmit={onSubmitHandler} className="w-full">
                    <p className="text-2xl md:text-3xl text-zinc-800 font-medium">
                        Add Shipping <span className="font-bold text-[#00D865] drop-shadow-[0_0_10px_rgba(0,216,101,0.2)]">Address</span>
                    </p>
                    
                    <div className="space-y-4 max-w-sm mt-10">
                        <input
                            className="px-3 py-2.5 bg-white text-zinc-800 placeholder-gray-400 border border-gray-300 focus:border-[#00D865] rounded outline-none w-full transition duration-200"
                            type="text"
                            placeholder="Full name"
                            onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                            value={address.fullName}
                        />
                        <input
                            className="px-3 py-2.5 bg-white text-zinc-800 placeholder-gray-400 border border-gray-300 focus:border-[#00D865] rounded outline-none w-full transition duration-200"
                            type="text"
                            placeholder="Phone number"
                            onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            value={address.phoneNumber}
                        />
                        <input
                            className="px-3 py-2.5 bg-white text-zinc-800 placeholder-gray-400 border border-gray-300 focus:border-[#00D865] rounded outline-none w-full transition duration-200"
                            type="text"
                            placeholder="Pin code"
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            value={address.pincode}
                        />
                        <textarea
                            className="px-3 py-2.5 bg-white text-zinc-800 placeholder-gray-400 border border-gray-300 focus:border-[#00D865] rounded outline-none w-full resize-none transition duration-200"
                            rows={4}
                            placeholder="Address (Area and Street)"
                            onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            value={address.area}
                        ></textarea>
                        
                        <div className="flex space-x-3">
                            <input
                                className="px-3 py-2.5 bg-white text-zinc-800 placeholder-gray-400 border border-gray-300 focus:border-[#00D865] rounded outline-none w-full transition duration-200"
                                type="text"
                                placeholder="City/District/Town"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                value={address.city}
                            />
                            <input
                                className="px-3 py-2.5 bg-white text-zinc-800 placeholder-gray-400 border border-gray-300 focus:border-[#00D865] rounded outline-none w-full transition duration-200"
                                type="text"
                                placeholder="State"
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                value={address.state}
                            />
                        </div>
                    </div>
                    
                    {/* Primary Button updated to solid Neon Green with clean black text */}
                    <button 
                        type="submit" 
                        className="max-w-sm w-full mt-6 bg-[#00D865] text-black font-bold py-3.5 rounded shadow-md hover:bg-[#00b554] transition duration-200 active:scale-[0.99] uppercase tracking-wider text-sm"
                    >
                        Save address
                    </button>
                </form>
                
                <div className="md:mr-16 mt-16 md:mt-0 flex items-center justify-center">
                    <Image
                        className="max-w-xs md:max-w-md h-auto object-contain opacity-90"
                        src={assets.my_location_image}
                        alt="my_location_image"
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default AddAddress;