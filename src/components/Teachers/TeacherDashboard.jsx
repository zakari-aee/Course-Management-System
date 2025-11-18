// src/components/Teachers/TeacherDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TeacherSchedule from './TeacherSchedule';

const TeacherDashboard = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Mock data - replace with API call
    const mockTeacher = {
      id: parseInt(id),
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@school.com',
      subject: 'Mathematics',
      phone: '+1 (555) 123-4567',
      experience: '8 years',
      qualification: 'Master\'s Degree',
      joinDate: '2018-09-01',
      address: '123 Education Ave, City, State 12345',
      students: 45,
      rating: 4.8,
      status: 'active'
    };

    const mockStats = {
      totalClasses: 12,
      upcomingClasses: 3,
      assignmentsGraded: 28,
      pendingGrading: 5,
      averageAttendance: 92,
      studentPerformance: 88
    };

    setTeacher(mockTeacher);
    setStats(mockStats);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Teacher not found</h2>
        <Link to="/teachers" className="text-indigo-600 hover:text-indigo-800">
          Back to Teachers
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
            to="/teachers" 
            className="text-indigo-600 hover:text-indigo-800 mb-2 inline-block"
          >
            ← Back to Teachers
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{teacher.name}'s Dashboard</h1>
          <p className="text-gray-600">{teacher.subject} • {teacher.experience} experience</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-indigo-600">{stats.totalClasses}</div>
          <div className="text-sm text-gray-600">Total Classes</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{stats.upcomingClasses}</div>
          <div className="text-sm text-gray-600">Upcoming Today</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{teacher.students}</div>
          <div className="text-sm text-gray-600">Students</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">{teacher.rating}</div>
          <div className="text-sm text-gray-600">Rating</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {['overview', 'schedule', 'students', 'performance'].map(tab => (
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Teacher Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Teacher Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-gray-900">{teacher.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{teacher.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Subject</label>
                    <p className="text-gray-900">{teacher.subject}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-gray-900">{teacher.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Qualification</label>
                    <p className="text-gray-900">{teacher.qualification}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Join Date</label>
                    <p className="text-gray-900">{new Date(teacher.joinDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Assignments Graded</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(stats.assignmentsGraded / (stats.assignmentsGraded + stats.pendingGrading)) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {stats.assignmentsGraded}/{stats.assignmentsGraded + stats.pendingGrading}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Average Attendance</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${stats.averageAttendance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{stats.averageAttendance}%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Student Performance</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-600 h-2 rounded-full" 
                          style={{ width: `${stats.studentPerformance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{stats.studentPerformance}%</span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Classes */}
                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-3">Today's Classes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Grade 10 - Algebra</span>
                      <span className="text-sm text-blue-600">10:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Grade 11 - Calculus</span>
                      <span className="text-sm text-green-600">1:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="p-6">
            <TeacherSchedule teacherId={teacher.id} />
          </div>
        )}

        {activeTab === 'students' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Student Roster</h3>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">Student roster functionality would be implemented here.</p>
              <p className="text-sm text-gray-400 mt-2">View and manage all students in your classes.</p>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Analytics</h3>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">Performance analytics dashboard would be implemented here.</p>
              <p className="text-sm text-gray-400 mt-2">Charts and graphs showing teaching performance metrics.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;