import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ChocoChunk from "../assets/ChocoChunk.png";
import OgBrownie from "../assets/OgBrownie.png";
import CandCTub from "../assets/CandCTub.png";

const products = {
  cookies: [
    {
      id: 1,
      name: "Classic chocolate chunk",
      image: ChocoChunk,
      prices: { 6: 350, 12: 600 },
    },
    {
      id: 2,
      name: "Peanut butter and chocolate",
      image: ChocoChunk,
      prices: { 6: 400, 12: 700 },
    },
    {
      id: 3,
      name: "Cookies and cream",
      image: CandCTub,
      prices: { 6: 400, 12: 700 },
    },
  ],
  brownies: [
    {
      id: 4,
      name: "Original Brownie",
      image: OgBrownie,
      prices: { 6: 450, 12: 800 },
    },
    {
      id: 5,
      name: "Walnut Brownie",
      image: OgBrownie,
      prices: { 6: 500, 12: 900 },
    },
  ],
};

const categories = ["cookies", "brownies"];

function FlavorCard({ product, selectedSize, selectedFlavors, onToggle, onQuantityChange }) {
  const isSelected = selectedFlavors[product.id];
  const quantity = isSelected?.quantity || 0;

  return (
    <div
      className={`bg-white rounded-xl p-4 shadow-md border-2 transition-all cursor-pointer ${
        isSelected ? "border-primary" : "border-transparent hover:border-primary/30"
      }`}
      onClick={() => !isSelected && onToggle(product.id, product)}
    >
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-serif text-primary text-sm mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500">₹{product.prices[selectedSize]} per box</p>
        </div>

        {isSelected ? (
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuantityChange(product.id, quantity - 1);
              }}
              className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors font-bold"
            >
              -
            </button>
            <span className="w-8 text-center font-semibold text-primary">{quantity}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuantityChange(product.id, quantity + 1);
              }}
              className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors font-bold"
            >
              +
            </button>
          </div>
        ) : (
          <div className="w-6 h-6 rounded border-2 border-gray-300 flex items-center justify-center">
            <span className="text-transparent">✓</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Menu() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("cookies");
  const [selectedSize, setSelectedSize] = useState(6);
  const [selectedFlavors, setSelectedFlavors] = useState({});

  const toggleFlavor = (productId, product) => {
    setSelectedFlavors(prev => {
      if (prev[productId]) {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: { ...product, quantity: 1 } };
    });
  };

  const updateFlavorQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setSelectedFlavors(prev => {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      });
    } else {
      setSelectedFlavors(prev => ({
        ...prev,
        [productId]: { ...prev[productId], quantity }
      }));
    }
  };

  const calculateTotal = () => {
    return Object.values(selectedFlavors).reduce((total, item) => {
      return total + (item.prices[selectedSize] * item.quantity);
    }, 0);
  };

  const handleAddToCart = () => {
    Object.values(selectedFlavors).forEach(item => {
      addToCart({
        id: item.id,
        name: item.name,
        image: item.image,
        size: selectedSize,
        price: item.prices[selectedSize],
        quantity: item.quantity,
      });
    });
    setSelectedFlavors({});
  };

  const totalItems = Object.values(selectedFlavors).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto pb-32">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-primary mb-2">MENU ITEMS</h2>
        <div className="flex justify-center gap-1">
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSelectedFlavors({});
            }}
            className={`px-8 py-3 rounded-lg font-serif capitalize transition-all text-lg ${
              activeCategory === category
                ? "bg-primary text-white shadow-md"
                : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Size Selection */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <h3 className="font-serif text-primary text-lg mb-4">CHOOSE SIZE:</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedSize(6)}
            className={`flex-1 py-3 rounded-lg border-2 transition-all font-medium ${
              selectedSize === 6
                ? "border-primary bg-primary text-white"
                : "border-gray-200 text-gray-600 hover:border-primary"
            }`}
          >
            Box of 6
          </button>
          <button
            onClick={() => setSelectedSize(12)}
            className={`flex-1 py-3 rounded-lg border-2 transition-all font-medium ${
              selectedSize === 12
                ? "border-primary bg-primary text-white"
                : "border-gray-200 text-gray-600 hover:border-primary"
            }`}
          >
            Box of 12
          </button>
        </div>
      </div>

      {/* Flavor Selection */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <h3 className="font-serif text-primary text-lg mb-4">CHOOSE YOUR FLAVOUR:</h3>
        <div className="space-y-4">
          {products[activeCategory]?.map((product) => (
            <FlavorCard
              key={product.id}
              product={product}
              selectedSize={selectedSize}
              selectedFlavors={selectedFlavors}
              onToggle={toggleFlavor}
              onQuantityChange={updateFlavorQuantity}
            />
          ))}
        </div>
      </div>

      {/* Add to Cart Section */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{totalItems} item(s) selected</p>
              <p className="text-xl font-bold text-primary">₹{calculateTotal()}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex justify-center gap-4 mt-4">
        <Link
          to="/cart"
          className="text-primary font-serif hover:underline flex items-center gap-2"
        >
          Go to Cart →
        </Link>
      </div>
    </div>
  );
}
