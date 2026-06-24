"use client";
import React from "react";
import { useApp } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderSummary from "@/components/OrderSummary";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const { cartItems, currency, getCartCount, getCartAmount, updateQuantity } = useApp();

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const phoneNumber = "2348106739361"; // BIGDANDEV business line
    
    let message = `🇳🇬 *NaijaFash Order Confirmation* 🇳🇬\n\nHello BIGDANDEV, I want to place an order:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Size: ${item.size || "S"} \n`;
      message += `   Qty: ${item.quantity} x ${currency}${Number(item.product.offerPrice || item.product.price).toLocaleString()}\n\n`;
    });

    const subtotal = getCartAmount();
    const tax = Math.round(subtotal * 0.02);
    const orderTotal = subtotal + tax;

    message += `💰 *Subtotal:* ${currency}${subtotal.toLocaleString()}\n`;
    message += `📝 *Tax (2%):* ${currency}${tax.toLocaleString()}\n`;
    message += `🔥 *Total Amount:* ${currency}${orderTotal.toLocaleString()}\n\n`;
    message += `Please confirm availability so I can arrange delivery details!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-6 md:px-16 lg:px-32 py-12">
        {/* Cart Context Title Heading Row */}
        <div className="flex items-baseline justify-between border-b border-gray-100 pb-6 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Your <span className="text-[#00D865]">Cart</span>
          </h1>
          <span className="text-xs font-bold tracking-wider uppercase bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">
            {getCartCount()} Items
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-2xl max-w-md mx-auto px-4">
            <p className="text-zinc-400 font-medium text-sm mb-5">Your shopping cart is completely empty</p>
            <button
              onClick={() => router.push("/all-products")}
              className="text-xs font-bold uppercase tracking-wider bg-zinc-950 text-white px-6 py-3.5 rounded-xl hover:bg-zinc-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: Product Matrix Listing Sheet */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Table Header Row Row Elements matching your image blueprint */}
              <div className="hidden sm:grid grid-cols-5 text-center text-[11px] font-black uppercase tracking-widest text-zinc-400 border-b border-gray-100 pb-3">
                <div className="col-span-2 text-left">Product Details</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>

              {/* Dynamic Items Row Builder */}
              <div className="flex flex-col divide-y divide-gray-100">
                {cartItems.map((item, idx) => {
                  const itemPrice = Number(item.product.offerPrice || item.product.price);
                  return (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-5 items-center text-center py-6 gap-4 sm:gap-0">
                      
                      {/* Thumbnail & Description Layout */}
                      <div className="col-span-2 flex items-center gap-4 text-left">
                        <div className="relative w-20 h-24 bg-gray-50 border border-gray-100 rounded-xl overflow-hidden p-2 flex items-center justify-center flex-shrink-0">
                          <img 
                            src={item.product.image?.[0] || item.product.image} 
                            alt={item.product.name} 
                            className="object-contain max-h-full mix-blend-multiply" 
                          />
                        </div>
                        <div className="truncate">
                          <h3 className="font-bold text-zinc-900 text-sm truncate">{item.product.name}</h3>
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1">
                            Size: <span className="text-zinc-900">{item.size || "S"}</span>
                          </p>
                        </div>
                      </div>

                      {/* Individual Price column item node */}
                      <div className="text-zinc-500 font-medium text-sm">
                        {currency}{itemPrice.toLocaleString()}
                      </div>

                      {/* Interactive Quantity Control Block */}
                      <div className="flex items-center justify-center">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-zinc-50 shadow-2xs">
                          {/* Minus Button */}
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product._id, item.size, item.quantity - 1)}
                            className="px-3 py-1.5 font-bold text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition active:scale-95 select-none"
                          >
                            &minus;
                          </button>
                          
                          {/* Dynamic Numeric Input Field */}
                          <input
                            type="number"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => {
                              const val = e.target.value === "" ? 0 : Number(e.target.value);
                              updateQuantity(item.product._id, item.size, val);
                            }}
                            className="w-10 text-center font-bold text-xs bg-white border-x border-gray-200 text-zinc-800 focus:outline-hidden py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          
                          {/* Plus Button */}
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product._id, item.size, item.quantity + 1)}
                            className="px-3 py-1.5 font-bold text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition active:scale-95 select-none"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Cumulative product row node calculation */}
                      <div className="font-extrabold text-zinc-900 text-sm">
                        {currency}{(itemPrice * item.quantity).toLocaleString()}
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Shopping fallback return arrow anchor block */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => router.push("/all-products")}
                  className="inline-flex items-center gap-2 border border-zinc-900 text-zinc-900 text-xs font-bold px-5 py-3 rounded-full hover:bg-zinc-900 hover:text-white transition duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Right Column: Checkout Handler Action Side Panel Container */}
            <div className="flex flex-col gap-4 sticky top-24">
              <OrderSummary />
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full text-center text-sm font-black bg-[#00D865] text-black py-4 rounded-xl shadow-xs hover:shadow-md active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
              >
                Send Order to WhatsApp
              </button>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;