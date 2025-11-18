// src/components/Students/StudentDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AttendanceTable from './AttendanceTable';
import GradesTable from './GradesTable';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with API call
    const mockStudent = {
      id: parseInt(id),
      name: 'John Smith',
      email: 'john.smith@school.com',
      grade: '10th Grade',
      parentName: 'Mike Smith',
      parentEmail: 'mike.smith@email.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, City, State 12345',
      attendance: 95,
      averageGrade: 88,
      status: 'active',
      enrollmentDate: '2023-09-01'
    };
    setStudent(mockStudent);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Student not found</h2>
        <Link to="/students" className="text-indigo-600 hover:text-indigo-800">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <Link 
            to="/students" 
            className="text-indigo-600 hover:text-indigo-800 mb-2 inline-block"
          >
            ← Back to Students
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
          <p className="text-gray-600">{student.grade} • {student.email}</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {['overview', 'attendance', 'grades'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {activeTab === 'overview' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-gray-900">{student.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{student.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Grade</label>
                    <p className="text-gray-900">{student.grade}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-gray-900">{student.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Address</label>
                    <p className="text-gray-900">{student.address}</p>
                  </div>
                </div>
              </div>

              {/* Parent & Academic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Parent & Academic Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Parent Name</label>
                    <p className="text-gray-900">{student.parentName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Parent Email</label>
                    <p className="text-gray-900">{student.parentEmail}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Enrollment Date</label>
                    <p className="text-gray-900">{student.enrollmentDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      student.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="p-6">
            <AttendanceTable studentId={student.id} />
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="p-6">
            <GradesTable studentId={student.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;