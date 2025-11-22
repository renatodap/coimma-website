import React from 'react';

const Divider = ({
  orientation = 'horizontal',
  color = 'gray-800',
  width = '1px',
  length = 'full',
  className = '',
  ...props
}) => {
  const orientationStyles = orientation === 'horizontal'
    ? `h-[${width}] w-${length}`
    : `w-[${width}] h-${length}`;

  return (
    <div
      className={`bg-${color} ${orientationStyles} ${className}`}
      {...props}
    />
  );
};

export default Divider;
