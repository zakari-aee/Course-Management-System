import React from 'react';

const Select = ({ label, id, options = [], value, onChange, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {label && <label htmlFor={id} className="block text-gray-700 font-medium mb-1">{label}</label>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
