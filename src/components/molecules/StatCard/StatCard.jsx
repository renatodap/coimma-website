import React from 'react';
import Text from '../../atoms/Text';

const StatCard = ({ value, label, className = '' }) => {
  return (
    <div className={className}>
      <Text as="div" variant="h1" className="text-5xl md:text-7xl text-white mb-2">
        {value}
      </Text>
      <Text variant="caption" className="text-red-200">
        {label}
      </Text>
    </div>
  );
};

export default StatCard;
