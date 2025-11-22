import React from 'react';
import Text from '../../atoms/Text';

const TimelineItem = ({ item, index, isLast }) => {
  return (
    <div className="relative flex gap-8 group">
      {/* Year Circle */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-black border-2 border-coimma-gold group-hover:bg-coimma-gold transition-all duration-300 flex items-center justify-center flex-shrink-0">
          <Text variant="industrial" className="text-white text-sm">
            {item.year}
          </Text>
        </div>
        {/* Vertical Line */}
        {!isLast && (
          <div className="w-[2px] h-full bg-gray-800 mt-4"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <Text as="h3" variant="h5" className="text-white mb-2">
          {item.title}
        </Text>
        <Text variant="body" className="text-gray-400">
          {item.description}
        </Text>
      </div>
    </div>
  );
};

export default TimelineItem;
