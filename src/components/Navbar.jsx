import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="flex flex-col justify-center items-center px-6 py-4 bg-secondary">
      <Link to="/">
        <h1 className="text-8xl font-serif py-2 text-primary hover:opacity-80 transition-opacity">
          Crumbs
        </h1>
      </Link>
      <div className="flex justify-center space-x-2 w-full font-medium text-lg">
        <Link to="/" className="link-hexagon font-serif">
          Home
        </Link>
        <Link to="/menu" className="link-hexagon font-serif">
          Menu
        </Link>
        <Link to="/info" className="link-hexagon font-serif">
          Info
        </Link>
        <Link to="/cart" className="link-hexagon font-serif relative">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
