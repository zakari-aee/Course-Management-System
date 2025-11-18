import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Fixed import
import { useData } from '../../context/DataContext'; // Fixed import
import CourseCard from './CourseCard';
import CourseForm from './CourseForm';

// ... rest of the code remains the same

const Courses = () => {
  const { user } = useAuth();
  const { courses } = useData();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Courses Management</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;