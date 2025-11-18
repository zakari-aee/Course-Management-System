// src/components/Students/Students.jsx
import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';
import StudentForm from './StudentForm';
import StudentExport from './StudentExport';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockStudents = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@school.com',
        grade: '10th Grade',
        parentName: 'Mike Smith',
        parentEmail: 'mike.smith@email.com',
        attendance: 95,
        averageGrade: 88,
        status: 'active'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@school.com',
        grade: '11th Grade',
        parentName: 'Lisa Johnson',
        parentEmail: 'lisa.johnson@email.com',
        attendance: 92,
        averageGrade: 94,
        status: 'active'
      },
      {
        id: 3,
        name: 'Michael Brown',
        email: 'michael.brown@school.com',
        grade: '9th Grade',
        parentName: 'David Brown',
        parentEmail: 'david.brown@email.com',
        attendance: 85,
        averageGrade: 76,
        status: 'active'
      }
    ];
    setStudents(mockStudents);
    setLoading(false);
  }, []);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = (studentData) => {
    const newStudent = {
      id: students.length + 1,
      ...studentData,
      attendance: 100,
      averageGrade: 0,
      status: 'active'
    };
    setStudents([...students, newStudent]);
    setShowForm(false);
  };

  const handleEditStudent = (studentData) => {
    setStudents(students.map(student =>
      student.id === editingStudent.id ? { ...student, ...studentData } : student
    ));
    setEditingStudent(null);
    setShowForm(false);
  };

  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== studentId));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Students Management</h1>
        <div className="flex space-x-4">
          <StudentExport students={students} />
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search students by name or grade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map(student => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={() => {
              setEditingStudent(student);
              setShowForm(true);
            }}
            onDelete={() => handleDeleteStudent(student.id)}
          />
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No students found.</p>
        </div>
      )}

      {/* Student Form Modal */}
      {showForm && (
        <StudentForm
          student={editingStudent}
          onSubmit={editingStudent ? handleEditStudent : handleAddStudent}
          onCancel={() => {
            setShowForm(false);
            setEditingStudent(null);
          }}
        />
      )}
    </div>
  );
};

export default Students;