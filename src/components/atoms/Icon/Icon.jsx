import React from 'react';
import * as Icons from 'lucide-react';

const Icon = ({
  name,
  size = 24,
  className = '',
  color,
  strokeWidth = 2,
  ...props
}) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      style={{ color }}
      {...props}
    />
  );
};

export default Icon;
