import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex flex-col justify-center items-center px-6 py-4 bg-secondary sticky top-0 z-40">
      <Link to="/">
        <h1 className="text-6xl md:text-8xl font-serif py-2 text-primary hover:opacity-80 transition-opacity">
          Crumbs
        </h1>
      </Link>
      <div className="flex justify-center items-center gap-1 w-full font-medium text-base">
        <Link
          to="/"
          className={`link-hexagon font-serif ${
            isActive("/") ? "bg-red-700" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/menu"
          className={`link-hexagon font-serif ${
            isActive("/menu") ? "bg-red-700" : ""
          }`}
        >
          Menu
        </Link>
        <Link
          to="/info"
          className={`link-hexagon font-serif ${
            isActive("/info") ? "bg-red-700" : ""
          }`}
        >
          Info
        </Link>
        <Link
          to="/cart"
          className={`link-hexagon font-serif relative ${
            isActive("/cart") ? "bg-red-700" : ""
          }`}
        >
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
