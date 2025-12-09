import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-center items-center px-6 py-4 bg-secondary">
      <h1 className="text-8xl font-serif py-2 text-primary">Crumbs</h1>
      <div className="flex justify-center space-x-2 w-full font-medium text-lg">
        <Link to="/" className="link-hexagon font-serif">Home</Link>
        <Link to="/menu" className="link-hexagon font-serif">Menu</Link>
        <Link to="/cart" className="link-hexagon font-serif">Cart</Link>
      </div>
    </nav>
  );
}
