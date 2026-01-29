import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Info from "./pages/Info";
import OrderConfirmation from "./pages/OrderConfirmation";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-secondary min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/info" element={<Info />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
