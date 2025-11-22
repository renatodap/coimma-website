import React from 'react';
import Text from '../../atoms/Text';

const SectionHeader = ({
  tag,
  title,
  subtitle,
  titleClassName = '',
  subtitleClassName = '',
  className = '',
}) => {
  return (
    <div className={className}>
      {tag && (
        <Text variant="caption" className="text-coimma-red mb-2 block">
          {tag}
        </Text>
      )}
      {title && (
        <Text as="h2" variant="h2" className={`text-white ${titleClassName}`}>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text as="h2" variant="h2" className={`mt-2 ${subtitleClassName}`}>
          {subtitle}
        </Text>
      )}
    </div>
  );
};

export default SectionHeader;
