import React from 'react';

const Text = ({
  as: Component = 'p',
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    h1: 'font-industrial text-7xl md:text-9xl uppercase leading-[0.85] tracking-tighter',
    h2: 'font-legacy text-4xl md:text-5xl leading-tight',
    h3: 'font-industrial text-3xl md:text-4xl uppercase',
    h4: 'font-industrial text-2xl uppercase',
    h5: 'font-tech text-xl font-semibold',
    h6: 'font-tech text-lg font-semibold',
    body: 'font-tech text-base leading-relaxed',
    bodyLarge: 'font-tech text-lg md:text-xl leading-relaxed',
    small: 'font-tech text-sm',
    caption: 'font-tech text-xs uppercase tracking-widest',
    legacy: 'font-legacy text-2xl italic',
    industrial: 'font-industrial uppercase tracking-widest',
  };

  return (
    <Component
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
