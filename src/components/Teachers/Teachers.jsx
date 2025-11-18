// src/components/Teachers/Teachers.jsx
import React, { useState, useEffect } from 'react';
import TeacherCard from './TeacherCard';
import TeacherForm from './TeacherForm';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockTeachers = [
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@school.com',
        subject: 'Mathematics',
        phone: '+1 (555) 123-4567',
        experience: '8 years',
        students: 45,
        rating: 4.8,
        status: 'active'
      },
      {
        id: 2,
        name: 'Prof. Michael Chen',
        email: 'michael.chen@school.com',
        subject: 'Science',
        phone: '+1 (555) 234-5678',
        experience: '12 years',
        students: 38,
        rating: 4.9,
        status: 'active'
      },
      {
        id: 3,
        name: 'Ms. Emily Davis',
        email: 'emily.davis@school.com',
        subject: 'English Literature',
        phone: '+1 (555) 345-6789',
        experience: '6 years',
        students: 52,
        rating: 4.7,
        status: 'active'
      },
      {
        id: 4,
        name: 'Mr. Robert Wilson',
        email: 'robert.wilson@school.com',
        subject: 'History',
        phone: '+1 (555) 456-7890',
        experience: '15 years',
        students: 41,
        rating: 4.6,
        status: 'on_leave'
      }
    ];
    setTeachers(mockTeachers);
    setLoading(false);
  }, []);

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTeacher = (teacherData) => {
    const newTeacher = {
      id: teachers.length + 1,
      ...teacherData,
      students: 0,
      rating: 0,
      status: 'active'
    };
    setTeachers([...teachers, newTeacher]);
    setShowForm(false);
  };

  const handleEditTeacher = (teacherData) => {
    setTeachers(teachers.map(teacher =>
      teacher.id === editingTeacher.id ? { ...teacher, ...teacherData } : teacher
    ));
    setEditingTeacher(null);
    setShowForm(false);
  };

  const handleDeleteTeacher = (teacherId) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
    }
  };

  const handleStatusChange = (teacherId, newStatus) => {
    setTeachers(teachers.map(teacher =>
      teacher.id === teacherId ? { ...teacher, status: newStatus } : teacher
    ));
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
        <h1 className="text-3xl font-bold text-gray-900">Teachers Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Add Teacher
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-indigo-600">{teachers.length}</div>
          <div className="text-sm text-gray-600">Total Teachers</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {teachers.filter(t => t.status === 'active').length}
          </div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">
            {teachers.reduce((sum, teacher) => sum + teacher.students, 0)}
          </div>
          <div className="text-sm text-gray-600">Total Students</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">
            {(teachers.reduce((sum, teacher) => sum + teacher.rating, 0) / teachers.length).toFixed(1)}
          </div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search teachers by name or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map(teacher => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            onEdit={() => {
              setEditingTeacher(teacher);
              setShowForm(true);
            }}
            onDelete={() => handleDeleteTeacher(teacher.id)}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No teachers found.</p>
        </div>
      )}

      {/* Teacher Form Modal */}
      {showForm && (
        <TeacherForm
          teacher={editingTeacher}
          onSubmit={editingTeacher ? handleEditTeacher : handleAddTeacher}
          onCancel={() => {
            setShowForm(false);
            setEditingTeacher(null);
          }}
        />
      )}
    </div>
  );
};

export default Teachers;