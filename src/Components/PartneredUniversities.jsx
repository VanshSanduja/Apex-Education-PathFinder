import React from "react";
import Clg1 from "../assets/Horizontal-IMSC-White.png";
import Clg2 from "../assets/Australia-University.png";
import Clg3 from "../assets/Australia-University-2.png";
import Clg4 from "../assets/Australia-University-3.png";

export default function UniversityPartners() {
  const logos = [
    { src: Clg1, alt: "Horizontal-IMSC-White" },
    { src: Clg2, alt: "Australia-University" },
    { src: Clg3, alt: "Australia-University-2" },
    { src: Clg4, alt: "Seneca Logo" },
  ];

  return (
    <section className="w-full py-10 bg-white text-center">
      <h2 className="text-2xl md:text-3xl px-1.5 font-semibold mb-8 text-[#1a1a1a]">
        <span className="bg-red-200 px-2 rounded font-bold">Partnered</span>{" "}
        with Global universities for unparalleled academic support.
      </h2>

      {/* Desktop – static */}
      <div className="hidden md:flex justify-center items-center gap-24 py-16">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-20 object-contain"
          />
        ))}
      </div>

      {/* Mobile – smooth infinite loop */}
      <div className="md:hidden overflow-hidden py-16">
        <div className="flex w-max animate-scroll-mobile">
          {/* First set */}
          {logos.map((logo, index) => (
            <div key={`a-${index}`} className="mx-10 flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 object-contain"
              />
            </div>
          ))}

          {/* Duplicate set */}
          {logos.map((logo, index) => (
            <div key={`b-${index}`} className="mx-10 flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-mobile {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll-mobile:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
