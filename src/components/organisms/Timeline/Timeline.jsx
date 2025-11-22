import React from 'react';
import TimelineItem from '../../molecules/TimelineItem';
import Text from '../../atoms/Text';

const Timeline = ({ title, items }) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <Text as="h2" variant="h2" className="text-white mb-16 text-center">
          {title}
        </Text>

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
