import React, { useState } from 'react';
import { useData } from '../../context/DataContext'; 

const WhatsAppNotification = () => {
  const [message, setMessage] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { users } = useData();

  const handleSendNotification = () => {
    // In a real app, this would integrate with WhatsApp API
    alert(`Message sent to ${selectedUsers.length} users: ${message}`);
    setMessage('');
    setSelectedUsers([]);
  };

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">WhatsApp Notifications</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Recipients
          </label>
          <div className="max-h-40 overflow-y-auto border rounded-md p-2">
            {users.map(user => (
              <label key={user.id} className="flex items-center space-x-2 p-1">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleUserSelection(user.id)}
                  className="rounded"
                />
                <span>{user.name} ({user.role})</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your notification message..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        </div>

        <button
          onClick={handleSendNotification}
          disabled={!message || selectedUsers.length === 0}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send WhatsApp Message
        </button>
      </div>
    </div>
  );
};

export default WhatsAppNotification;