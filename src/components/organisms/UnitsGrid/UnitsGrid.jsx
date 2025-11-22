import React from 'react';
import UnitCard from '../../molecules/UnitCard';
import Text from '../../atoms/Text';

const UnitsGrid = ({ title, subtitle, units }) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {title && (
          <div className="mb-12 text-center">
            <Text as="h2" variant="h2" className="text-white mb-4">
              {title}
            </Text>
            {subtitle && (
              <Text variant="bodyLarge" className="text-gray-400">
                {subtitle}
              </Text>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitsGrid;
