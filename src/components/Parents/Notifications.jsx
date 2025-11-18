import React from "react";
import { Bell } from "lucide-react";

const Notifications = ({ notifications = [] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Bell className="text-blue-500 mr-2" /> Notifications
      </h2>

      <div className="space-y-3">
        {notifications.map((n, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-700">{n.title}</p>
            <p className="text-sm text-gray-500">{n.time}</p>
          </div>
        ))}

        {notifications.length === 0 && (
          <p className="text-gray-500">No notifications.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
