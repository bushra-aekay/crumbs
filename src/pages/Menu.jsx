import { useState } from "react";
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
  "cookie dishes": [
    {
      id: 6,
      name: "Cookie Skillet",
      image: ChocoChunk,
      prices: { 1: 299 },
      singleItem: true,
    },
  ],
};

const categories = ["cookies", "brownies", "cookie dishes"];

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product.singleItem ? 1 : 6
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize,
      price: product.prices[selectedSize],
      quantity,
    });
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />
      <h3 className="font-serif text-primary text-sm mb-2">{product.name}</h3>

      {/* Size Selection */}
      {!product.singleItem && (
        <div className="flex gap-2 mb-3">
          {Object.keys(product.prices).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(Number(size))}
              className={`px-3 py-1 text-xs rounded-full border transition-all ${
                selectedSize === Number(size)
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-gray-600 hover:border-primary"
              }`}
            >
              Box of {size}
            </button>
          ))}
        </div>
      )}

      {/* Quantity and Price */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary"
          >
            -
          </button>
          <span className="w-6 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary"
          >
            +
          </button>
        </div>
        <span className="text-primary font-semibold">
          ₹{product.prices[selectedSize] * quantity}
        </span>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
      >
        Add to cart
      </button>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("cookies");

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
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
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-lg font-serif capitalize transition-all ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary hover:bg-primary/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Size Legend */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 font-serif">CHOOSE SIZE:</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="text-xs text-gray-500">☐ Box of 6</span>
          <span className="text-xs text-gray-500">☐ Box of 12</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products[activeCategory]?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Choose Your Option */}
      <div className="mt-8 flex justify-center gap-4">
        <div className="bg-white rounded-lg px-6 py-3 shadow-md">
          <p className="text-primary font-serif text-sm">Choose your</p>
          <p className="text-primary font-serif font-bold">Brownie</p>
        </div>
        <div className="bg-white rounded-lg px-6 py-3 shadow-md">
          <p className="text-primary font-serif text-sm">Choose your</p>
          <p className="text-primary font-serif font-bold">Flavours</p>
        </div>
      </div>
    </div>
  );
}
