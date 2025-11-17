import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

const CourseForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [teacher, setTeacher] = useState(initialData.teacher || '');
  const [students, setStudents] = useState(initialData.students || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, teacher, students });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">{initialData.name ? 'Edit Course' : 'Add Course'}</h3>
      <Input label="Course Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input label="Teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
      <Input label="Number of Students" type="number" value={students} onChange={(e) => setStudents(e.target.value)} />
      <div className="flex justify-end">
        <Button type="submit" variant="primary">{initialData.name ? 'Update' : 'Create'}</Button>
      </div>
    </form>
  );
};

export default CourseForm;
