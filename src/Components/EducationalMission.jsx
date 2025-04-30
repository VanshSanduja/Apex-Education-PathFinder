import React from 'react';
import AboutImage from '../assets/Home-About Us-2.jpg';

function EducationalMission() {
  return (
    <div className="bg-[#E0BE9A] w-full h-auto flex flex-col md:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <img className="rounded-3xl w-full object-cover" src={AboutImage} alt="about-image" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-6 md:py-0 text-start md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Educational Mission</h1>
        <p className="text-base md:text-2xl font-thin">
          Globalpath Education is dedicated to guiding students with Singapore qualifications to prestigious universities worldwide. Our personalized approach ensures each student finds the perfect program to achieve their career aspirations, leveraging their background and goals to create a successful academic journey.
        </p>
      </div>
    </div>
  );
}

export default EducationalMission;
