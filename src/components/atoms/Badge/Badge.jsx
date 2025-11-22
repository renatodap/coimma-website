import React from 'react';

const Badge = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-white text-black',
    red: 'bg-coimma-red text-white',
    gold: 'bg-coimma-gold text-black',
    dark: 'bg-coimma-dark text-white border border-gray-800',
  };

  return (
    <div
      className={`
        inline-block py-2 px-4 rounded-sm
        shadow-[0_0_30px_rgba(255,255,255,0.1)]
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
