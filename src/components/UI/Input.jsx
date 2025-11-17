import React from 'react';

const Input = ({ label, id, value, onChange, placeholder, type = 'text', className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {label && <label htmlFor={id} className="block text-gray-700 font-medium mb-1">{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
