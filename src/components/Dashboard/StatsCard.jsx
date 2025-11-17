import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="flex items-center p-5 border rounded-lg bg-white hover:shadow-md transition-shadow duration-300">
      <div className="text-3xl text-blue-500 mr-4">{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
