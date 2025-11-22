import React from 'react';
import Text from '../../atoms/Text';

const NavItem = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        font-industrial uppercase tracking-widest text-sm
        hover:text-coimma-red transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default NavItem;
