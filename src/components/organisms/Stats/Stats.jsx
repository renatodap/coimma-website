import React from 'react';
import StatCard from '../../molecules/StatCard';

const Stats = ({ stats }) => {
  return (
    <div className="bg-coimma-red bg-opacity-90 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
