"use client";
import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useApp } from '@/context/AppContext'
import Logo from '../logong' // Adjust this path based on your folder structure

const Navbar = () => {

  const { router } = useApp()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b border-gray-300 bg-white'>
      {/* Brand Logo Container */}
      <div 
        onClick={() => router.push('/')} 
        className="cursor-pointer flex items-center h-8 w-24 md:h-9 md:w-28 overflow-hidden"
      >
        <Logo className="h-full w-full object-contain" />
      </div>

      {/* Styled Logout button to match the premium neon design language */}
      <button className='border-2 border-[#00D865] text-zinc-900 font-semibold px-5 py-1.5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-[#00D865] hover:text-black transition duration-200 active:scale-[0.97]'>
        Logout
      </button>
    </div>
  )
}

export default Navbar