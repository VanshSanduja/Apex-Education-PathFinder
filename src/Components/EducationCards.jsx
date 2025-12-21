import React from 'react';
import RPLAssessment from "../assets/Education.jpg";

function EducationCards() {
  const cardData = [
    {
      title: "RPL Assessment",
      price: "$200",
      image: RPLAssessment
    },
    {
      title: "RPL Assessment",
      price: "$200",
      image: RPLAssessment
    },
    {
      title: "RPL Assessment",
      price: "$200",
      image: RPLAssessment
    }
  ];

  return (
    <div data-aos="fade-up" className="bg-[#b0ffd2] py-12 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-medium text-center md:text-start mb-12">
        Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={`${card.title}-${index + 1}`}
              />
            </div>
            <div className="flex flex-col flex-grow p-4 text-center">
              <h2 className="text-xl font-semibold mb-2 text-black">{card.title}</h2>
              <hr className="border-gray-300 mb-2" />
              <p className="text-lg text-gray-800 mb-4">{card.price}</p>
              <div className="mt-auto">
                <button className="bg-white border border-gray-300 px-6 py-2 rounded-md hover:bg-[#7be3a8] hover:text-white cursor-pointer transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationCards;