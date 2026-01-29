import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const total = subtotal + (deliveryInfo.modeOfReceiving === "delivery" ? deliveryFee : 0);

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
      <div className="px-4 py-16 max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-xl p-12 shadow-md">
          <div className="text-6xl mb-6">🍪</div>
          <h2 className="text-4xl font-serif text-primary mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any delicious treats yet!
          </p>
          <Link
            to="/menu"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-primary mb-2">CHECKOUT</h2>
        <div className="flex justify-center gap-1">
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif text-primary">Your Cart</h3>
              <span className="text-sm text-gray-500">{cartItems.length} item(s)</span>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-primary text-sm truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Box of {item.size}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors font-bold text-sm"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors font-bold text-sm"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/menu"
                className="text-primary text-sm hover:underline flex items-center gap-1"
              >
                ← Continue Shopping
              </Link>
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
              placeholder="Any special requests? (e.g., gift wrapping, allergy info)"
              className="w-full p-3 border border-gray-200 rounded-lg mb-4 text-sm resize-none focus:border-primary focus:outline-none"
              rows={3}
            />

            <h3 className="font-serif text-primary text-lg mb-3">
              Mode of receiving:
            </h3>
            <div className="flex gap-4 mb-4">
              <label
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  deliveryInfo.modeOfReceiving === "delivery"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50"
                }`}
              >
                <input
                  type="radio"
                  name="modeOfReceiving"
                  value="delivery"
                  checked={deliveryInfo.modeOfReceiving === "delivery"}
                  onChange={handleInputChange}
                  className="accent-primary"
                />
                <span className="text-sm font-medium">Delivery</span>
              </label>
              <label
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  deliveryInfo.modeOfReceiving === "pickup"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-primary/50"
                }`}
              >
                <input
                  type="radio"
                  name="modeOfReceiving"
                  value="pickup"
                  checked={deliveryInfo.modeOfReceiving === "pickup"}
                  onChange={handleInputChange}
                  className="accent-primary"
                />
                <span className="text-sm font-medium">Pick up</span>
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
                  placeholder="House/Flat no., Building, Street, Area..."
                  className="w-full p-3 border border-gray-200 rounded-lg mb-3 text-sm resize-none focus:border-primary focus:outline-none"
                  rows={2}
                />

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="font-serif text-primary text-sm block mb-1">
                      Landmark:
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      value={deliveryInfo.landmark}
                      onChange={handleInputChange}
                      placeholder="Near..."
                      className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-serif text-primary text-sm block mb-1">
                      Pincode:
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={deliveryInfo.pincode}
                      onChange={handleInputChange}
                      placeholder="400001"
                      className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            {deliveryInfo.modeOfReceiving === "pickup" && (
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 font-medium mb-1">Pickup Location:</p>
                <p className="text-sm text-gray-600">Crumbs Kitchen, Mumbai</p>
                <p className="text-xs text-gray-500 mt-2">
                  You'll receive a confirmation message with pickup time.
                </p>
              </div>
            )}

            <button
              onClick={handleClearDetails}
              className="w-full border-2 border-primary text-primary py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Clear details
            </button>
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-serif text-primary text-lg mb-4">
              Terms and Conditions
            </h3>
            <div className="text-xs text-gray-600 space-y-2 mb-4 max-h-32 overflow-y-auto bg-gray-50 p-3 rounded-lg">
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
                className="accent-primary mt-0.5 w-4 h-4"
              />
              <span className="text-sm text-gray-600">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-serif text-primary text-lg mb-4">
              Order Summary
            </h3>
            <div className="space-y-3 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              {deliveryInfo.modeOfReceiving === "delivery" && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery fee</span>
                  <span className="font-medium">₹{deliveryFee}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-primary text-lg pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-gray-500 mb-2">Payment options:</p>
              <div className="flex gap-3 items-center">
                <span className="text-primary font-serif italic text-sm">
                  Razorpay
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-primary font-serif italic text-sm">
                  PhonePe
                </span>
              </div>
            </div>

            <button
              onClick={handleMakePayment}
              disabled={!agreedToTerms}
              className={`w-full py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg ${
                agreedToTerms
                  ? "bg-primary text-white hover:bg-red-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Make Payment
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
