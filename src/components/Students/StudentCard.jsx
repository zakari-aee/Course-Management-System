// src/components/Students/StudentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = ({ student, onEdit, onDelete }) => {
  const getGradeColor = (grade) => {
    if (grade >= 90) return 'text-green-600 bg-green-50';
    if (grade >= 80) return 'text-blue-600 bg-blue-50';
    if (grade >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return 'text-green-600 bg-green-50';
    if (attendance >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
            <p className="text-gray-600">{student.grade}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            student.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {student.status}
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">📧 {student.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm">👨‍👩‍👧‍👦 Parent: {student.parentName}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className={`text-center p-3 rounded-lg ${getAttendanceColor(student.attendance)}`}>
            <div className="text-2xl font-bold">{student.attendance}%</div>
            <div className="text-sm">Attendance</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${getGradeColor(student.averageGrade)}`}>
            <div className="text-2xl font-bold">{student.averageGrade}%</div>
            <div className="text-sm">Average Grade</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between space-x-2">
          <Link
            to={`/students/${student.id}`}
            className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            View Details
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
      </div>
    </div>
  );
};

export default StudentCard;