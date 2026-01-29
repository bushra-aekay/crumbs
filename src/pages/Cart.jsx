import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } =
    useCart();
  const [deliveryInfo, setDeliveryInfo] = useState({
    instructions: "",
    modeOfReceiving: "delivery",
    address: "",
    landmark: "",
    pincode: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const deliveryFee = 40;
  const subtotal = getCartTotal();
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearDetails = () => {
    setDeliveryInfo({
      instructions: "",
      modeOfReceiving: "delivery",
      address: "",
      landmark: "",
      pincode: "",
    });
    setAgreedToTerms(false);
  };

  const handleMakePayment = () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }
    if (
      deliveryInfo.modeOfReceiving === "delivery" &&
      (!deliveryInfo.address || !deliveryInfo.pincode)
    ) {
      alert("Please fill in delivery address and pincode");
      return;
    }
    clearCart();
    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return (
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-primary mb-4">Your Cart</h2>
        <p className="text-gray-600 mb-8">Your cart is empty.</p>
        <button
          onClick={() => navigate("/menu")}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-serif text-primary mb-4">Your Cart</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center gap-3 pb-4 border-b border-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-serif text-primary text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.size > 1 ? `Box of ${item.size}` : "Single"}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-serif text-primary text-lg mb-4">
              Order instructions:
            </h3>
            <textarea
              name="instructions"
              value={deliveryInfo.instructions}
              onChange={handleInputChange}
              placeholder="Add any special instructions..."
              className="w-full p-3 border border-gray-200 rounded-lg mb-4 text-sm resize-none"
              rows={3}
            />

            <h3 className="font-serif text-primary text-lg mb-2">
              Mode of receiving:
            </h3>
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="modeOfReceiving"
                  value="delivery"
                  checked={deliveryInfo.modeOfReceiving === "delivery"}
                  onChange={handleInputChange}
                  className="accent-primary"
                />
                <span className="text-sm">Delivery</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="modeOfReceiving"
                  value="pickup"
                  checked={deliveryInfo.modeOfReceiving === "pickup"}
                  onChange={handleInputChange}
                  className="accent-primary"
                />
                <span className="text-sm">Pick up</span>
              </label>
            </div>

            {deliveryInfo.modeOfReceiving === "delivery" && (
              <>
                <h3 className="font-serif text-primary text-lg mb-2">
                  Enter full address:
                </h3>
                <textarea
                  name="address"
                  value={deliveryInfo.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete address..."
                  className="w-full p-3 border border-gray-200 rounded-lg mb-4 text-sm resize-none"
                  rows={2}
                />

                <div className="mb-4">
                  <label className="font-serif text-primary text-sm">
                    Landmark:
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    value={deliveryInfo.landmark}
                    onChange={handleInputChange}
                    placeholder="Near..."
                    className="w-full p-3 border border-gray-200 rounded-lg mt-1 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-serif text-primary text-sm">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={deliveryInfo.pincode}
                    onChange={handleInputChange}
                    placeholder="Enter pincode"
                    className="w-full p-3 border border-gray-200 rounded-lg mt-1 text-sm"
                  />
                </div>
              </>
            )}

            <button
              onClick={handleClearDetails}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Clear details
            </button>
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-md mb-4">
            <h3 className="font-serif text-primary text-lg mb-4">
              Terms and Conditions
            </h3>
            <div className="text-xs text-gray-600 space-y-1 mb-4 max-h-32 overflow-y-auto">
              <p>• Orders must be placed 24 hours in advance</p>
              <p>• Delivery available within 10km radius</p>
              <p>• No refunds on customized orders</p>
              <p>• Prices are inclusive of all taxes</p>
              <p>• Delivery charges may vary based on location</p>
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="accent-primary mt-1"
              />
              <span className="text-xs text-gray-600">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-serif text-primary text-lg mb-4">
              Order Summary
            </h3>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated cost of delivery</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between font-semibold text-primary pt-2 border-t">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Payment via:</p>
              <div className="flex gap-2">
                <span className="text-primary font-serif italic text-sm">
                  Razorpay
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-primary font-serif italic text-sm">
                  Phonepe Gateway
                </span>
              </div>
            </div>

            <button
              onClick={handleMakePayment}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              Make Payment
              <span>₹</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
