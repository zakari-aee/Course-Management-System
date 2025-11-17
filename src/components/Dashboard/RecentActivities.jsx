import React from 'react';

const RecentActivities = ({ activities = [] }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-3">
        {activities.length === 0 && (
          <li className="text-gray-500">No recent activities.</li>
        )}
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-blue-500">{activity.icon}</span>
            <div>
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
