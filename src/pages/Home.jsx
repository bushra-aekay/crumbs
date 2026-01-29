import { Link } from "react-router-dom";
import ChocoChunk from "../assets/ChocoChunk.png";
import OgBrownie from "../assets/OgBrownie.png";
import CandCTub from "../assets/CandCTub.png";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Cookie Image */}
            <div className="hidden lg:flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={ChocoChunk}
                  alt="Chocolate Chunk Cookie"
                  className="w-64 h-64 object-cover rounded-full shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20">
                  <img
                    src={OgBrownie}
                    alt="Brownie"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Center - Tagline */}
            <div className="text-center lg:text-left">
              <p className="text-primary font-serif italic text-xl mb-3">
                Tagline - because
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight mb-8">
                crumbs are a proof of love shared
              </h2>

              {/* Order CTA */}
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 text-primary font-serif text-2xl hover:gap-5 transition-all group"
              >
                ORDER HERE
                <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>

            {/* Right - Buttons & Image */}
            <div className="flex flex-col items-center gap-6">
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <button className="flex-1 bg-primary text-white px-4 py-3 rounded-lg text-center hover:bg-red-600 transition-colors shadow-md">
                  <p className="text-sm font-semibold">MONTHLY DROPS</p>
                  <p className="text-xs mt-1 opacity-90">ACTIVE NOW</p>
                </button>
                <button className="flex-1 border-2 border-primary text-primary px-4 py-3 rounded-lg text-center bg-white hover:bg-primary hover:text-white transition-colors">
                  <p className="text-sm font-semibold">REDEEM</p>
                  <p className="text-xs mt-1">POINTS</p>
                </button>
              </div>

              {/* Cookie Image */}
              <img
                src={CandCTub}
                alt="Cookies and Cream"
                className="w-40 h-40 object-cover rounded-2xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300"
              />

              {/* Description */}
              <p className="text-sm text-gray-600 text-center max-w-xs">
                Fresh, artisanal cookies and brownies made with premium ingredients.
                Available for pickup or delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cookie Image */}
      <div className="lg:hidden flex justify-center pb-8">
        <img
          src={ChocoChunk}
          alt="Cookie"
          className="w-32 h-32 object-cover rounded-full shadow-lg transform -rotate-12"
        />
      </div>
    </div>
  );
}
