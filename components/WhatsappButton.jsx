"use client";
import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  // Replace with your actual phone number (include country code, e.g., 234 for Nigeria)
  const phoneNumber = "2348106739361"; 
  const defaultMessage = encodeURIComponent("Hello! I'm browsing NaijaFash and would like to make an inquiry.");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none pointer-events-none" />
      
      {/* WhatsApp SVG Icon */}
      <svg 
        className="w-8 h-8 text-white relative z-10 fill-current" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.973 0c3.184.001 6.177 1.24 8.43 3.496 2.253 2.256 3.491 5.253 3.491 8.442 0 6.574-5.337 11.922-11.916 11.922-2.001-.001-3.971-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.489 4.93 1.49 5.375 0 9.75-4.41 9.752-9.83 0-2.627-1.018-5.1-2.868-6.956C16.56 1.999 14.1 1.001 11.973 1.001c-5.378 0-9.755 4.41-9.757 9.831-.001 1.724.475 3.4 1.376 4.887l-.999 3.648 3.73-.974z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;