import React from "react";
import Guidence from "../assets/Home-Our Expertise-1.jpg";
import ProgramMatching from "../assets/Program-matching.jpg";
import Rpl from "../assets/RPL-Strategy.jpg";

function AcademicExcellence() {
  return (
    <div className="bg-[#A2672D] w-full h-auto flex flex-col">
      <h1 className="text-5xl font-medium text-center md:text-start m-6 md:m-16">
        Our Academic Excellence
      </h1>

      {/* First Row: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row w-full md:my-0 my-4 px-6 gap-12 md:p-12 text-2xl items-center">
        <div className="md:w-[60%] w-full md:pl-12">
          <h1 className="font-medium text-4xl my-4 md:my-8">Guidance</h1>
          <p className="w-[80%] font-thin text-base md:text-xl">
            Our expert guidance helps students navigate the complex world of
            higher education with ease and confidence.
          </p>
        </div>
        <div className="md:w-[40%] w-full mt-6 md:mt-0">
          <img src={Guidence} alt="guidance-1" className="w-full rounded-md" />
        </div>
      </div>

      {/* Second Row: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row-reverse w-full md:my-0 my-4 gap-12 px-6 md:p-12 text-2xl items-center">
        <div className="md:w-[60%] w-full md:pl-24">
          <h1 className="font-medium text-4xl my-4 md:my-8">
            Program Matching
          </h1>
          <p className="w-[80%] font-thin text-base md:text-xl">
            We excel in matching students with the ideal universities and
            programs based on their individual profiles and ambitions.
          </p>
        </div>
        <div className="md:w-[40%] mx-12 w-full mt-6 md:mt-0">
          <img
            src={ProgramMatching}
            alt="guidance-2"
            className="w-full rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:my-0 my-4 px-6 gap-12 md:p-12 text-2xl items-center">
        <div className="md:w-[60%] w-full md:pl-12">
          <h1 className="font-medium text-4xl my-4 md:my-8">RPL Strategy</h1>
          <p className="w-[80%] font-thin text-base md:text-xl">
            Leveraging Recognition of Prior Learning (RPL), we accelerate
            student progress by maximizing their credits.
          </p>
        </div>
        <div className="md:w-[40%] w-full mt-6 md:mt-0">
          <img src={Rpl} alt="guidance-1" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default AcademicExcellence;
