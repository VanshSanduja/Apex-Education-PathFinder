import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use any icon lib

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E0BE9A] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-thin text-black/70">
          Global Path Education
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 items-center font-sans">
          <a href="#" className="text-gray-700 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            Destinations
          </a>
          <button className="bg-white text-black px-4 py-2 rounded-md cursor-pointer hover:bg-[#ffd4a6] transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-center font-sans flex flex-col gap-4">
          <a href="#" className="text-gray-700 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-white">
            Destinations
          </a>
          <button className="bg-white m-auto text-black px-4 py-2 rounded-md hover:bg-[#ffd4a6] transition w-fit">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
