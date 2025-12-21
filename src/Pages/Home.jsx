import React from "react";

import HeroSection from "../Components/HeroSection";
import EducationalMission from "../Components/EducationalMission";
import AcademicExcellence from "../Components/AcademicExcellence";
import WhyChooseUs from "../Components/WhyChooseUs";
import Universities from "../Components/PartneredUniversities";
import Impact from "../Components/OurImpact";

function Home() {
  return (
    <>
      <HeroSection />
      <EducationalMission />
      <Universities /> 
      <WhyChooseUs />
      <AcademicExcellence />
      <Impact />
    </>
  );
}

export default Home;