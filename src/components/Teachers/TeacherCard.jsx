// src/components/Teachers/TeacherCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher, onEdit, onDelete, onStatusChange }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'on_leave': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'on_leave': return 'On Leave';
      case 'inactive': return 'Inactive';
      default: return status;
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600 bg-green-50';
    if (rating >= 4.0) return 'text-blue-600 bg-blue-50';
    if (rating >= 3.5) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
            <p className="text-gray-600">{teacher.subject}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(teacher.status)}`}>
            {getStatusText(teacher.status)}
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">📧 {teacher.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm">📞 {teacher.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm">⏰ Experience: {teacher.experience}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 rounded-lg bg-blue-50 text-blue-600">
            <div className="text-2xl font-bold">{teacher.students}</div>
            <div className="text-sm">Students</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${getRatingColor(teacher.rating)}`}>
            <div className="text-2xl font-bold">{teacher.rating}</div>
            <div className="text-sm">Rating</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between space-x-2">
          <Link
            to={`/teachers/${teacher.id}/dashboard`}
            className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            View Dashboard
          </Link>
          <div className="flex space-x-2">
            <button
              onClick={onEdit}
              className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition duration-200"
              title="Edit"
            >
              ✏️
            </button>
            <button
              onClick={onDelete}
              className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition duration-200"
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </div>

        {/* Status Change */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Change Status:</label>
          <div className="flex space-x-2">
            {['active', 'on_leave', 'inactive'].map(status => (
              <button
                key={status}
                onClick={() => onStatusChange(teacher.id, status)}
                className={`flex-1 text-xs py-1 px-2 rounded ${
                  teacher.status === status
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getStatusText(status)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;