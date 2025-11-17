import React from 'react';
import Card from '../UI/Card';

const Notifications = ({ notifications = [] }) => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications available.</p>
      ) : (
        <ul className="space-y-3">
          {notifications.map((notif, index) => (
            <li key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all">
              <span className="text-blue-500 text-xl">{notif.icon}</span>
              <div>
                <p className="text-gray-800 font-medium">{notif.title}</p>
                <p className="text-gray-500 text-sm">{notif.time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Notifications;
