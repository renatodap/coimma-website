import React from 'react';
import Badge from '../../atoms/Badge';
import Image from '../../atoms/Image';

const LogoBadge = ({ logoSrc, alt = 'Logo', className = '' }) => {
  return (
    <Badge variant="default" className={className}>
      <Image
        src={logoSrc}
        alt={alt}
        className="h-8 w-auto mix-blend-multiply"
      />
    </Badge>
  );
};

export default LogoBadge;
