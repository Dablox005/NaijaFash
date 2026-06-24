"use client";
import React, { createContext, useState, useContext } from "react";
import { productsDummyData } from "@/assets/assets"; 

// 1. Create the core context object
export const AppContext = createContext();

// 2. Named Exports 
export const useAppContext = () => useContext(AppContext);
export const useApp = () => useContext(AppContext);

// 3. The main Provider Component
export function AppContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productsDummyData || []);
  const currency = "₦";

  // Add items to cart
  const addToCart = (product, size) => {
    setCartItems((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product._id === product._id && item.size === size
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { product, size, quantity: 1 }];
      }
    });
  };

  // NEW/RESTORED: Update item quantity or remove if it hits 0
  const updateQuantity = (productId, size, quantity) => {
    setCartItems((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter(
          (item) => !(item.product._id === productId && item.size === size)
        );
      }
      return prevCart.map((item) =>
        item.product._id === productId && item.size === size
          ? { ...item, quantity: Number(quantity) }
          : item
      );
    });
  };

  // Sum up all dynamic object item counts instantly
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculates total price value securely across all cards and summaries
  const getCartAmount = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  // Make sure updateQuantity is added to the shared value bundle!
  const value = {
    products,
    cartItems,
    setCartItems,
    currency,
    addToCart,
    updateQuantity,
    getCartCount,
    getCartAmount,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// 4. The critical default export fallback
const defaultHook = useApp;
export default defaultHook;