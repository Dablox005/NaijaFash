import { addressDummyData } from "@/assets/assets";
import { useApp } from "@/context/AppContext";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {

  const { currency, router, getCartCount, getCartAmount } = useApp()
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    setUserAddresses(addressDummyData);
  }

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {

  }

  useEffect(() => {
    fetchUserAddresses();
  }, [])

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5 rounded-lg">
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">
        Order Summary
      </h2>
      <hr className="border-gray-500/30 my-5" />
      <div className="space-y-6">
        <div>
          <label className="text-xs font-bold uppercase text-zinc-700 block mb-2 tracking-wider">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border border-gray-300 rounded">
            <button
              className="peer w-full text-left px-4 pr-2 py-2.5 bg-white text-zinc-800 rounded focus:outline-none focus:border-[#00D865] transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="truncate block max-w-[85%] inline-block">
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#18181b"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 shadow-lg mt-1 z-10 py-1.5 rounded max-h-60 overflow-y-auto">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-[#00D865]/10 hover:text-black cursor-pointer transition"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 mt-1 border-t border-dashed border-gray-200 hover:bg-[#00D865] hover:text-black font-medium cursor-pointer text-center text-zinc-600 transition"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase text-zinc-700 block mb-2 tracking-wider">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3 w-full">
            <input
              type="text"
              placeholder="Enter promo code"
              className="w-full outline-none p-2.5 text-zinc-800 border border-gray-300 rounded focus:border-[#00D865] transition bg-white"
            />
            {/* Swapped Apply button to high-contrast Neon background */}
            <button className="bg-[#00D865] text-black font-semibold px-9 py-2 rounded hover:bg-[#00b554] transition active:scale-[0.97] text-sm">
              Apply
            </button>
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-xs font-bold tracking-wider text-zinc-600">Items {getCartCount()}</p>
            <p className="text-zinc-900 font-semibold">{currency}{getCartAmount()}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-zinc-600">Shipping Fee</p>
            <p className="font-semibold text-emerald-600">Free</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-zinc-600">Tax (2%)</p>
            <p className="font-semibold text-zinc-900">{currency}{Math.floor(getCartAmount() * 0.02)}</p>
          </div>
          <div className="flex justify-between text-lg font-bold text-zinc-900 border-t border-gray-300 pt-3">
            <p>Total</p>
            <p>{currency}{getCartAmount() + Math.floor(getCartAmount() * 0.02)}</p>
          </div>
        </div>
      </div>

      {/* Primary Checkout Button upgraded to bold solid Neon Green with clean black text */}
      <button 
        onClick={createOrder} 
        className="w-full bg-[#00D865] text-black font-bold py-3.5 mt-6 rounded shadow-md hover:bg-[#00b554] transition duration-200 active:scale-[0.99]"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;