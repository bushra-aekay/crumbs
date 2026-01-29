import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import FloatingCartButton from "./components/FloatingCartButton";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Info from "./pages/Info";
import OrderConfirmation from "./pages/OrderConfirmation";

function AppContent() {
  const { toast, hideToast } = useCart();

  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/info" element={<Info />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <FloatingCartButton />
      {toast && <Toast message={toast} onClose={hideToast} />}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
