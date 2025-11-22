import React from 'react';
import ServiceCard from '../../molecules/ServiceCard';
import SectionHeader from '../../molecules/SectionHeader';

const ServicesGrid = ({ title, services }) => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={title}
          className="mb-16 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
