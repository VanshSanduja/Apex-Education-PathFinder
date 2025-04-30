import React from 'react';
import RPLAssessment from "../assets/Education.jpg";

function EducationCards() {
  return (
    <div className="bg-[#A2672D] py-12 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-medium text-center md:text-start mb-12">
        Education
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="overflow-hidden w-full md:w-96 text-center"
          >
            <img
              className="w-full h-48 object-cover mb-4"
              src={RPLAssessment}
              alt={`card-${index + 1}`}
            />
            <h2 className="text-xl font-semibold mb-2 text-black">RPL Assessment</h2>
            <hr className="border-gray-300 mb-2" />
            <p className="text-lg text-gray-800 mb-4">$200</p>
            <button className="bg-white  px-4 py-2 rounded-md hover:bg-[#8f541c] hover:text-white cursor-pointer transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationCards;
