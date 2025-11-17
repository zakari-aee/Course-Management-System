import React from 'react';
import Card from '../UI/Card';

const CourseDetails = ({ course }) => {
  if (!course) return <p className="text-gray-500">Select a course to see details.</p>;

  return (
    <Card title={course.name}>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Teacher:</span> {course.teacher}</p>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Students:</span> {course.students}</p>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Description:</span> {course.description}</p>
    </Card>
  );
};

export default CourseDetails;
