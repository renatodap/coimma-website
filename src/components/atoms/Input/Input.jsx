import React from 'react';

const Input = ({
  type = 'text',
  label,
  placeholder,
  className = '',
  name,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full bg-black border border-gray-800 text-white p-4
          focus:border-coimma-red outline-none transition-colors
          font-tech
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
