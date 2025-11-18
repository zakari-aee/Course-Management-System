import React from 'react';

const Notifications = () => {
  const notifications = [];

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-lg mb-2 ${
            notification.type === 'success' ? 'bg-green-500' :
            notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          } text-white`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;