import React from 'react';

const RecentActivities = ({ activities = [] }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Recent Activities</h2>
      
      <ul className="space-y-4">
        {activities.length === 0 && (
          <li className="text-gray-400 italic text-center">No recent activities.</li>
        )}
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {/* Icon Circle */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600`}>
              {activity.icon}
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{activity.title}</p>
              <p className="text-gray-500 text-sm">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
