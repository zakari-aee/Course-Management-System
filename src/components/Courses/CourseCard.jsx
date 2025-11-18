import React from 'react';
import { useData } from '../../context/DataContext'; 
import { useAuth } from '../../context/AuthContext'; 


const CourseCard = ({ course }) => {
  const { users } = useData();
  const { user } = useAuth();
  const teacher = users.find(u => u.id === course.teacherId);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      
      <div className="space-y-2 text-sm text-gray-500">
        <p>📅 {course.schedule}</p>
        <p>👨‍🏫 Teacher: {teacher?.name || 'Not assigned'}</p>
      </div>
      
      {user.role === 'admin' && (
        <div className="mt-4 flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            Edit
          </button>
          <button className="text-red-600 hover:text-red-800 text-sm">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;