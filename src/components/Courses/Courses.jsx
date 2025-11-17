import React from 'react';
import CourseCard from './CourseCard';

const Courses = ({ courses = [] }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length === 0 && <p className="text-gray-500">No courses available.</p>}
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
