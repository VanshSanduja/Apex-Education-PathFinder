import React from "react";

const DestinationsPage = () => {
  const destinations = [
    {
      country: "Canada",
      flag: "🍁",
      bgColor: "bg-red-50",
      description: "Known for its high-quality education system and welcoming multicultural environment. Canadian universities offer a wide range of programs with affordable tuition compared to the US.",
      topUniversities: ["University of Toronto", "McGill University", "University of British Columbia"]
    },
    {
      country: "Australia",
      flag: "",
      bgColor: "bg-blue-50",
      description: "Offers world-class education with a relaxed lifestyle and beautiful natural surroundings. Australian universities are known for their research opportunities and practical approach.",
      topUniversities: ["University of Melbourne", "University of Sydney", "Australian National University"]
    },
    {
      country: "UK",
      flag: "🇬🇧",
      bgColor: "bg-indigo-50",
      description: "Home to some of the world's oldest and most prestigious universities. UK degrees are highly respected worldwide, with programs typically shorter than in other countries.",
      topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London"]
    },
    {
      country: "USA",
      flag: "🇺🇸",
      bgColor: "bg-cyan-50",
      description: "Features the largest number of internationally ranked universities offering unparalleled program variety and research opportunities across all fields of study.",
      topUniversities: ["Harvard University", "Stanford University", "Massachusetts Institute of Technology"]
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      bgColor: "bg-blue-50",
      description: "Provides a high standard of education with a focus on student wellbeing and innovative teaching in a stunning natural environment.",
      topUniversities: ["University of Auckland", "University of Otago", "Victoria University of Wellington"]
    },
    {
      country: "Malaysia",
      flag: "🇲🇾",
      bgColor: "bg-yellow-50",
      description: "Emerging as an education hub in Southeast Asia with affordable quality education and many international branch campuses from UK, Australia and other countries.",
      topUniversities: ["Universiti Malaya", "Universiti Putra Malaysia", "Taylor's University"]
    },
    {
      country: "Singapore",
      flag: "🇸🇬",
      bgColor: "bg-red-50",
      description: "A global education hub with world-class universities in a safe, clean environment. Singapore offers excellent career opportunities and connections throughout Asia.",
      topUniversities: ["National University of Singapore", "Nanyang Technological University", "Singapore Management University"]
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Global Education Destinations
          </h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover world-class educational opportunities across seven countries through our
            partnership with International Management and Sports College in Singapore
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Global University Pathways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through our collaboration with International Management and Sports College 
              in Singapore, we will help students achieve their dreams of progressing 
              to universities around the world:
            </p>
          </div>

          {/* Country Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`${destination.bgColor} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center">
                  <span className="text-5xl mb-4">{destination.flag}</span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {destination.country}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Country Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800" data-aos="fade-up">
            Explore Our University Destinations
          </h2>

          {destinations.map((destination, index) => (
            <div 
              key={index}
              className={`mb-16 p-8 rounded-xl shadow-lg ${destination.bgColor}`}
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <span className="text-7xl mb-4">{destination.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {destination.country}
                  </h3>
                </div>
                
                <div className="md:w-3/4">
                  <p className="text-lg mb-6 text-gray-700">
                    {destination.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-800">Top Universities:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {destination.topUniversities.map((uni, idx) => (
                        <li key={idx} className="text-gray-700">{uni}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" data-aos="fade-up">
            Ready to Start Your Global Education Journey?
          </h2>
          <p className="text-lg mb-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Our advisors are ready to help you choose the perfect destination for your educational goals and career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              Schedule a Consultation
            </button>
            <button className="bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg border border-green-500">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;