import { Link } from "react-router-dom";
import ChocoChunk from "../assets/ChocoChunk.png"
import OgBrownie from "../assets/OgBrownie.png"
export default function Home() {
  return (
  <div className="flex justify-center items-center w-full ">
  {/* Decorative Images */}
    <div className="flex items-center">
      <div className="cookie-container-flex">
        <img 
          src={ChocoChunk} 
          alt="cookie" 
          className="cookie-image" />
      </div>
        <div className="text-container p-11">
          <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
          because love is in the crumbs.
          </h2>
        </div>
    </div>
  </div>
  );
}

  
  {/* <img src={OgBrownie} alt="brownie" className="absolute bottom-32 right-10 w-40 rotate-[8deg]" /> */}
  {/* Tagline */}
  {/* <h2 className="text-5xl md:text-6xl font-serif text-primary max-w-3xl leading-tight mb-10">
    because crumbs are a proof of love
  </h2> */}

  {/* Monthly Drop Banner */}
  {/* <div className="bg-primary text-white px-6 py-4 rounded-md shadow-lg mb-8">
    <p className="text-lg font-bold tracking-wide">MONTHLY DROP IN:</p>
    <p className="text-2xl mt-2">ACTIVE NOW</p> */}
    {/* OR if countdown */}
    {/* <p className="text-2xl mt-2">10D : 10H : 49M</p> */}
  {/* </div> */}

  {/* Order Now Button */}
  {/* <Link to="/menu" className="text-xl font-semibold text-primary hover:underline flex items-center gap-2 mb-12">
    ORDER HERE →
  </Link> */}

  {/* Subscribe */}
  {/* <div className="mt-8 w-full max-w-lg">
    <p className="text-lg mb-4 text-gray-700">subscribe to our baking stories 🍰</p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600">
        Subscribe
      </button>
    </div>
  </div> */}

