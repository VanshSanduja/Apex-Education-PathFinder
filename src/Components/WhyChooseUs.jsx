import React from "react";

const WhyChooseUs = () => {
  const points = [
    {
      icon: "🎯",
      title: "Tailored Guidance",
      description:
        "We provide one-on-one consultations to understand your unique needs and craft a personalized education pathway that suits your ambitions.",
    },
    {
      icon: "🌍",
      title: "Global Network",
      description:
        "Our partnerships with top universities in Australia, UK, Canada, USA, New Zealand, Malaysia and Singapore ensure you have access to a wide range of programs and institutions.",
    },
    {
      icon: "📄",
      title: "RPL Expertise",
      description:
        "We streamline the RPL process, handling documentation and assessments to secure the maximum credits for your prior learning.",
    },
    {
      icon: "🤝",
      title: "Comprehensive Support",
      description:
        "From university applications and visa assistance to career counseling, we're with you every step of the way.",
    },
    {
      icon: "⏱️",
      title: "Time and Cost Efficiency",
      description:
        "By reducing study duration through RPL credits, we help you save valuable time and financial resources.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="bg-gradient-to-br from-[#ffb0b0] to-white p-8 rounded-2xl shadow-lg mx-4 my-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {points.map((point, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-200 flex flex-col justify-start h-full"
          >
            <div className="text-4xl mb-3">{point.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600 text-sm">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;