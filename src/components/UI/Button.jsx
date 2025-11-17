import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'base',
  className = '',
}) => {
  const baseStyle = 'font-semibold rounded-lg shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-150 ease-in-out';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:outline-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    base: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
