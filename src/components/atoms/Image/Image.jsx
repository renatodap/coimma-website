import React from 'react';

const Image = ({
  src,
  alt,
  className = '',
  objectFit = 'cover',
  grayscale = false,
  overlay = false,
  overlayGradient = 'from-black via-transparent to-transparent',
  overlayOpacity = 'opacity-90',
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`
          w-full h-full
          object-${objectFit}
          ${grayscale ? 'grayscale' : ''}
        `}
        {...props}
      />
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient} ${overlayOpacity}`}></div>
      )}
    </div>
  );
};

export default Image;
