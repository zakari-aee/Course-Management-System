import React from 'react';

const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
