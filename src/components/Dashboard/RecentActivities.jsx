import React from 'react';
import { useData } from '../../context/DataContext';

const RecentActivities = () => {
  const { enrollments, users, courses } = useData();

  const recentEnrollments = enrollments.slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Recent Enrollments</h3>
      <div className="space-y-3">
        {recentEnrollments.map(enrollment => {
          const student = users.find(u => u.id === enrollment.studentId);
          const course = courses.find(c => c.id === enrollment.courseId);
          
          return (
            <div key={enrollment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">{student?.name}</p>
                <p className="text-sm text-gray-600">{course?.name}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                enrollment.grade === 'A' ? 'bg-green-100 text-green-800' :
                enrollment.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                enrollment.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                Grade: {enrollment.grade || 'N/A'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;