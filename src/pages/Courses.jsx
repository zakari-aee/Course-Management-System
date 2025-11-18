import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import CourseCard from '../components/Courses/CourseCard';
import CourseForm from '../components/Courses/CourseForm';
import ClassSchedule from '../components/Courses/ClassSchedule';

const Courses = () => {
  const { user } = useAuth();
  const { courses, addCourse, updateCourse, deleteCourse } = useData();
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleSaveCourse = (courseData) => {
    if (editingCourse) {
      updateCourse(editingCourse.id, courseData);
    } else {
      addCourse(courseData);
    }
    setShowForm(false);
    setEditingCourse(null);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  const handleDelete = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(courseId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600">Manage all courses and schedules</p>
        </div>
        {user.role === 'admin' && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add New Course
          </button>
        )}
      </div>

      <ClassSchedule />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onEdit={handleEdit}
            onDelete={handleDelete}
            canEdit={user.role === 'admin'}
          />
        ))}
      </div>

      {showForm && (
        <CourseForm
          course={editingCourse}
          onSave={handleSaveCourse}
          onCancel={() => {
            setShowForm(false);
            setEditingCourse(null);
          }}
        />
      )}
    </div>
  );
};

export default Courses;