import React from 'react';

const StatsCard = ({ title, value, icon, color = 'bg-blue-500' }) => {
  return (
    <div className={`flex items-center p-6 rounded-xl shadow-lg ${color} text-white`}>
      <div className="text-4xl mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
