import React from "react";
import LeftImage from "../assets/Home-Welcome-1.jpg"; // Replace with your image
import RightImage from "../assets/Home-Welcome-2.jpg"; // Replace with your image

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div
        className="w-full md:w-[70%] h-[60vh] md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${LeftImage})` }}
      >
        {/* Show on large screens only */}
        <div className="hidden md:block absolute bottom-20 left-10 bg-[#dbb992] bg-opacity-90 p-6 max-w-sm shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Future Focused</h2>
          <p className="text-sm mb-4">
            Empowering students to reach their highest potential through
            personalized guidance.
          </p>
          <button className="border rounded-xl border-black px-4 py-2 hover:bg-black hover:text-white transition">
            Explore
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-[30%] h-[40vh] md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${RightImage})` }}
      >
        {/* Show on small screens only */}
        <div className="block md:hidden absolute bottom-1 left-5 bg-[#dbb992] bg-opacity-90 p-4 max-w-xs shadow-md rounded-lg">
          <h2 className="text-base font-semibold mb-1">Future Focused</h2>
          <p className="text-sm mb-3">
            Empowering students to reach their highest potential through
            personalized guidance.
          </p>
          <button className="border rounded-xl border-black px-3 py-2 hover:bg-black hover:text-white transition text-sm">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
