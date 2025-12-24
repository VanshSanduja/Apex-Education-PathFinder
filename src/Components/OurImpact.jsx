import React from 'react';
import CountUp from 'react-countup';

function ImpactStats() {
  const stats = [
    { value: 100, suffix: '%', label: 'Student Satisfaction' },
    { value: 98, suffix: '%', label: 'University Placement Rate' },
    { value: 98, suffix: '%', label: 'RPL Success Rate' },
    { value: 98, suffix: '%', label: 'Accelerated Progress Rate' },
  ];

  return (
    <div className="bg-[#ffe7e7] w-full py-16 px-4 md:px-24">
      <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
      <p className="text-lg text-gray-800 mb-12 max-w-3xl">
        Over the years, we have helped hundreds of students achieve their academic dreams and
        secure placements in renowned institutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-5xl font-bold text-black mb-2">
              <CountUp start={0} end={stat.value} duration={3} suffix={stat.suffix} enableScrollSpy/>
            </h3>
            <p className="text-sm text-black">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImpactStats;
