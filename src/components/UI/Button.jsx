import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'base', className = '' }) => {
  const baseStyle = 'rounded-lg font-semibold transition-all duration-150 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    base: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
