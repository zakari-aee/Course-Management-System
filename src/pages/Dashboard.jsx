import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import StatsCard from '../components/Dashboard/StatsCard';
import RecentActivities from '../components/Dashboard/RecentActivities';

const Dashboard = () => {
  const { user } = useAuth();
  const { users, courses, enrollments, payments } = useData();

  const stats = {
    totalStudents: users.filter(u => u.role === 'student').length,
    totalTeachers: users.filter(u => u.role === 'teacher').length,
    totalCourses: courses.length,
    totalPayments: payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0),
  };

  const studentEnrollments = enrollments.filter(e => e.studentId === user.id);
  const parentStudent = user.role === 'parent' ? users.find(u => u.id === user.studentId) : null;
  const parentEnrollments = parentStudent ? enrollments.filter(e => e.studentId === parentStudent.id) : [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}</p>
        </div>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      {user.role === 'admin' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              title="Total Students" 
              value={stats.totalStudents}
              color="blue"
            />
            <StatsCard 
              title="Total Teachers" 
              value={stats.totalTeachers}
              color="green"
            />
            <StatsCard 
              title="Active Courses" 
              value={stats.totalCourses}
              color="purple"
            />
            <StatsCard 
              title="Total Revenue" 
              value={`$${stats.totalPayments}`}
              color="yellow"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivities />
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
              <div className="space-y-3">
                {payments.slice(0, 5).map(payment => {
                  const student = users.find(u => u.id === payment.studentId);
                  return (
                    <div key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-sm">{student?.name}</p>
                        <p className="text-xs text-gray-600">{payment.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">${payment.amount}</p>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {(user.role === 'student' || user.role === 'parent') && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            {user.role === 'student' ? 'My Courses' : `${parentStudent?.name}'s Courses`}
          </h2>
          <div className="space-y-4">
            {(user.role === 'student' ? studentEnrollments : parentEnrollments).map(enrollment => {
              const course = courses.find(c => c.id === enrollment.courseId);
              const teacher = users.find(u => u.id === course?.teacherId);
              return (
                <div key={enrollment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{course?.name}</h3>
                      <p className="text-gray-600 text-sm">{course?.description}</p>
                      <p className="text-sm text-gray-500 mt-1">Instructor: {teacher?.name || 'TBA'}</p>
                      <p className="text-sm text-gray-500">Schedule: {course?.schedule}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        enrollment.grade === 'A' ? 'bg-green-100 text-green-800' :
                        enrollment.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        Grade: {enrollment.grade || 'Pending'}
                      </span>
                      <p className="text-sm text-gray-500 mt-2">
                        Attendance: {enrollment.attendance}%
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {user.role === 'teacher' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Courses</h2>
          <div className="space-y-4">
            {courses.filter(c => c.teacherId === user.id).map(course => {
              const courseEnrollments = enrollments.filter(e => e.courseId === course.id);
              return (
                <div key={course.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">{course.name}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  <p className="text-sm text-gray-500 mt-1">Schedule: {course.schedule}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-sm font-medium">Enrolled Students: {courseEnrollments.length}</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;