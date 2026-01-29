import { Link } from "react-router-dom";
import ChocoChunk from "../assets/ChocoChunk.png";

export default function OrderConfirmation() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-primary mb-2">ORDER STATUS</h2>
        <div className="flex justify-center gap-1">
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
        </div>
      </div>

      {/* Confirmation Card */}
      <div className="bg-white rounded-xl p-8 shadow-md text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <img
            src={ChocoChunk}
            alt="Cookie"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
            ✓
          </div>
        </div>

        {/* Confirmation Message */}
        <h3 className="text-3xl font-serif text-primary mb-4">
          your order is confirmed!
        </h3>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for ordering from Crumbs! We've received your order and will
          start preparing your delicious treats right away.
        </p>

        {/* Order Status Timeline */}
        <div className="flex justify-center items-center gap-2 mb-8 overflow-x-auto py-4">
          <div className="flex flex-col items-center min-w-[60px]">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-2 text-lg">
              ✓
            </div>
            <span className="text-xs text-gray-600 font-medium">Confirmed</span>
          </div>

          <div className="w-8 h-0.5 bg-gray-200 flex-shrink-0"></div>

          <div className="flex flex-col items-center min-w-[60px]">
            <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mb-2 text-lg">
              🍪
            </div>
            <span className="text-xs text-gray-400">Preparing</span>
          </div>

          <div className="w-8 h-0.5 bg-gray-200 flex-shrink-0"></div>

          <div className="flex flex-col items-center min-w-[60px]">
            <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mb-2 text-lg">
              🚗
            </div>
            <span className="text-xs text-gray-400">On the way</span>
          </div>

          <div className="w-8 h-0.5 bg-gray-200 flex-shrink-0"></div>

          <div className="flex flex-col items-center min-w-[60px]">
            <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center mb-2 text-lg">
              📦
            </div>
            <span className="text-xs text-gray-400">Delivered</span>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-secondary/50 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-600">
            You'll receive updates about your order via email and SMS.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
          >
            Order More
          </Link>
        </div>
      </div>

      {/* Decorative Quote */}
      <div className="mt-8 text-center">
        <p className="text-primary font-serif italic text-lg">
          "because crumbs are a proof of love shared"
        </p>
      </div>
    </div>
  );
}
