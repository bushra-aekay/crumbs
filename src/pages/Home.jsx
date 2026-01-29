import { Link } from "react-router-dom";
import ChocoChunk from "../assets/ChocoChunk.png";
import OgBrownie from "../assets/OgBrownie.png";
import CandCTub from "../assets/CandCTub.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8">
        {/* Left side - Cookie Image */}
        <div className="relative">
          <img
            src={ChocoChunk}
            alt="Chocolate Chunk Cookie"
            className="w-48 md:w-64 lg:w-72 rounded-full shadow-lg transform -rotate-12"
          />
        </div>

        {/* Center - Tagline */}
        <div className="text-center md:text-left max-w-md">
          <p className="text-primary font-serif italic text-lg mb-2">
            Tagline - because
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-tight">
            crumbs are a proof of love shared
          </h2>
        </div>

        {/* Right side - Buttons and Cookie */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <div className="bg-primary text-white px-6 py-3 rounded-lg text-center">
              <p className="text-sm font-semibold">MONTHLY DROPS</p>
              <p className="text-xs mt-1">ACTIVE NOW</p>
            </div>
            <div className="border-2 border-primary text-primary px-6 py-3 rounded-lg text-center bg-white/50">
              <p className="text-sm font-semibold">MONTHLY DROPS</p>
              <p className="text-xs mt-1">REDEEM PTS</p>
            </div>
          </div>
          <img
            src={CandCTub}
            alt="Cookies and Cream"
            className="w-32 md:w-40 rounded-lg shadow-md transform rotate-6"
          />
        </div>
      </div>

      {/* Order Here CTA */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <Link
          to="/menu"
          className="flex items-center gap-2 text-primary font-serif text-2xl hover:underline"
        >
          ORDER HERE
          <span className="text-3xl">→</span>
        </Link>

        {/* Decorative cookie and description */}
        <div className="flex items-center gap-4 mt-4">
          <img
            src={OgBrownie}
            alt="Brownie"
            className="w-20 rounded-lg shadow-md"
          />
          <div className="text-sm text-gray-600 max-w-xs">
            <p>We make fresh, artisanal cookies and brownies with premium ingredients.</p>
            <p className="mt-1">Order now for pickup or delivery!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
