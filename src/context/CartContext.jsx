import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    showToast(`${item.name} added to cart!`);
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
        toast,
        hideToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
