import React from 'react';
import * as Icons from 'lucide-react';

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  onClick,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-coimma-red text-white hover:bg-red-800 relative overflow-hidden group',
    secondary: 'border border-gray-700 text-gray-300 hover:border-white hover:text-white',
    ghost: 'text-white hover:text-coimma-red',
    outline: 'border border-white text-white hover:bg-white hover:text-black',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-4',
    large: 'px-10 py-6 text-lg',
  };

  const IconComponent = icon && Icons[icon];

  return (
    <button
      className={`
        font-industrial uppercase tracking-wider transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      )}
      <span className="relative flex items-center justify-center">
        {icon && iconPosition === 'left' && IconComponent && (
          <IconComponent className="w-4 h-4 mr-2" />
        )}
        {children}
        {icon && iconPosition === 'right' && IconComponent && (
          <IconComponent className="w-4 h-4 ml-2" />
        )}
      </span>
    </button>
  );
};

export default Button;
