"use client";
import React, { useState } from "react";
import Logong from "./logong";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useApp } from "@/context/AppContext"; // Using the correct named hook export!

const Navbar = () => {
  const router = useRouter();
  const { getCartCount } = useApp(); // Invoking the correct hook directly
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 px-6 md:px-16 lg:px-32 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <Logong />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <li>
          <Link href="/" className="hover:text-[#00D865] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/all-products" className="hover:text-[#00D865] transition-colors">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="hover:text-[#00D865] transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      {/* Action Buttons - Desktop */}
      <div className="hidden md:flex items-center gap-5">
        <button
          onClick={() => router.push("/seller")}
          className="text-xs font-semibold border border-zinc-200 px-4 py-2 rounded-full hover:border-zinc-800 transition"
        >
          Seller Dashboard
        </button>

        {/* Dynamic Cart Icon Asset */}
        <button
          onClick={() => router.push("/cart")}
          className="relative p-2 text-zinc-700 hover:text-black transition flex items-center justify-center"
        >
          <Image src={assets.cart_icon} alt="cart" className="w-5 h-5" />
          {getCartCount() > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-[#00D865] text-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
              {getCartCount()}
            </span>
          )}
        </button>

        {/* Profile/Account Asset */}
        <button
          onClick={() => router.push("/my-orders")}
          className="flex items-center justify-center p-1 border border-zinc-200 rounded-full"
        >
          <Image src={assets.user_icon} alt="user profile" className="w-6 h-6 rounded-full" />
        </button>
      </div>

      {/* Mobile Control Row */}
      <div className="flex md:hidden items-center gap-3">
        {/* Dynamic Mobile Cart Counter */}
        <button
          onClick={() => router.push("/cart")}
          className="relative p-2 text-zinc-800 focus:outline-none flex items-center justify-center"
        >
          <Image src={assets.cart_icon} alt="cart" className="w-6 h-6" />
          {getCartCount() > 0 && (
            <span className="absolute top-0 right-0 bg-[#00D865] text-black text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
              {getCartCount()}
            </span>
          )}
        </button>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 text-zinc-800 focus:outline-none flex items-center justify-center"
        >
          <Image 
          src={isMobileMenuOpen ? (assets?.cross_icon || "/cross.png") : (assets?.menu_icon || "/menu.png")} 
          alt="menu toggle" 
          className="w-6 h-6" 
          />
        </button>
      </div>

      {/* Mobile Drawer Menu Layout */}
      <div
        className={`fixed inset-0 top-[65px] bg-white z-40 transition-all duration-300 ease-in-out border-t border-gray-100 md:hidden flex flex-col px-6 py-6 gap-6 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-semibold text-zinc-800">
          <li>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#00D865]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#00D865]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#00D865]">
              Contact
            </Link>
          </li>
        </ul>

        <hr className="border-gray-100" />

        <div className="flex flex-col gap-3">
          <button
            onClick={() => { router.push("/seller"); setIsMobileMenuOpen(false); }}
            className="w-full text-center text-sm font-bold bg-zinc-950 text-white py-3 rounded-xl transition"
          >
            Seller Dashboard
          </button>
          <button
            onClick={() => { router.push("/my-orders"); setIsMobileMenuOpen(false); }}
            className="w-full text-center text-sm font-semibold border border-zinc-200 text-zinc-700 py-3 rounded-xl transition"
          >
            My Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;