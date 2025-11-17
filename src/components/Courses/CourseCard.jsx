import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
      <p className="text-gray-500 mt-2">{course.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">{course.teacher}</span>
        <span className="text-sm text-blue-500 font-medium">{course.students} Students</span>
      </div>
    </div>
  );
};

export default CourseCard;
