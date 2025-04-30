import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from './Components/HeroSection';
import EducationalMission from "./Components/EducationalMission";
import AcademicExcellence from "./Components/AcademicExcellence";
import EducationCards from "./Components/EducationCards";
import Impact from "./Components/OurImpact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EducationalMission />
      <AcademicExcellence />
      <EducationCards />
      <Impact />
      <Footer />
    </>
  );
}

export default App;
