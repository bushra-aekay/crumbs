import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function FloatingCartButton() {
  const { getCartTotal, getCartCount } = useCart();
  const total = getCartTotal();
  const count = getCartCount();

  if (count === 0) return null;

  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all hover:scale-105 flex items-center gap-3 z-50"
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      </div>
      <span className="font-serif">View Cart</span>
      <span className="font-bold">₹{total}</span>
    </Link>
  );
}
