import { Link } from "react-router-dom";
import ChocoChunk from "../assets/ChocoChunk.png";
import OgBrownie from "../assets/OgBrownie.png";

export default function OrderConfirmation() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto text-center">
      {/* Decorative cookies */}
      <div className="relative mb-8">
        <img
          src={ChocoChunk}
          alt="Cookie"
          className="w-24 h-24 rounded-full mx-auto opacity-90"
        />
        <img
          src={OgBrownie}
          alt="Brownie"
          className="w-16 h-16 rounded-full absolute top-0 right-1/4 opacity-70 transform rotate-12"
        />
      </div>

      {/* Confirmation Message */}
      <div className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
          your order is confirmed!
        </h2>

        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-600 mb-6">
          Thank you for ordering from Crumbs! We've received your order and will
          start preparing your delicious treats right away.
        </p>

        {/* Order Status Timeline */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-2">
              ✓
            </div>
            <span className="text-xs text-gray-500">Confirmed</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mb-2">
              🍪
            </div>
            <span className="text-xs text-gray-500">Preparing</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mb-2">
              🚗
            </div>
            <span className="text-xs text-gray-500">On the way</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mb-2">
              📦
            </div>
            <span className="text-xs text-gray-500">Delivered</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          You'll receive updates about your order via email and SMS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            Order More
          </Link>
        </div>
      </div>

      {/* Decorative note */}
      <div className="mt-8 bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
        <p className="text-sm text-gray-600 font-serif italic">
          "because crumbs are a proof of love shared"
        </p>
      </div>
    </div>
  );
}
