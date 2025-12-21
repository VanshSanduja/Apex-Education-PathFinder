import React from "react";
import Clg1 from "../assets/Clg-1.png";
import Clg2 from "../assets/Clg-2.png";
import Clg3 from "../assets/Clg-3.png";
import Clg4 from "../assets/Clg-4.png";
import Clg5 from "../assets/Clg-5.png";
import Clg6 from "../assets/Clg-6.png";

export default function UniversityPartners() {
  return (
    <section className="w-full py-10 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1a1a1a]">
        <span className="bg-green-200 px-2 rounded font-bold">Partnered</span>{" "}
        with Global universities for unparalleled academic support.
      </h2>

      <div className="flex flex-col md:flex-row relative overflow-hidden justify-center items-center py-16 gap-24">
        <img src={Clg1} alt="ATMC Logo" className="h-14 md:h-12 object-contain" />
        <img src={Clg2} alt="Niagara College Logo" className="h-14 md:h-8 object-contain" />
        <img src={Clg3} alt="Conestoga Logo" className="h-14 md:h-8 object-contain" />
        <img src={Clg4} alt="Seneca Logo" className="h-14 md:h-8 object-contain" />
        <img src={Clg5} alt="Georgian Logo" className="h-14 md:h-8 object-contain" />
        <img src={Clg6} alt="University of Tasmania Logo" className="h-14 md:h-16 object-contain" />
      </div>
    </section>
  );
}
