import React from 'react';
import { useData } from '../../context/DataContext';

const CourseDetails = ({ course }) => {
  const { users, enrollments } = useData();
  const teacher = users.find(u => u.id === course.teacherId);
  const courseEnrollments = enrollments.filter(e => e.courseId === course.id);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
      <p className="text-gray-600 mb-4">{course.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Course Information</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Schedule:</span> {course.schedule}</p>
            <p><span className="font-medium">Teacher:</span> {teacher?.name || 'Not assigned'}</p>
            <p><span className="font-medium">Students Enrolled:</span> {courseEnrollments.length}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Enrolled Students</h3>
          <div className="space-y-2">
            {courseEnrollments.map(enrollment => {
              const student = users.find(u => u.id === enrollment.studentId);
              return (
                <div key={enrollment.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>{student?.name}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    enrollment.grade === 'A' ? 'bg-green-100 text-green-800' :
                    enrollment.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                    enrollment.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {enrollment.grade || 'No grade'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;