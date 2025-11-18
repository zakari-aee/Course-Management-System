// src/App.jsx (move from src/pages/App.jsx to here)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Navigation from './components/Navigation/Navigation';

// Dashboard components
const AdminDashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">Manage Courses</div>
      <div className="bg-white p-4 rounded-lg shadow">Manage Users</div>
      <div className="bg-white p-4 rounded-lg shadow">System Settings</div>
    </div>
  </div>
);

const StudentDashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">My Courses</div>
      <div className="bg-white p-4 rounded-lg shadow">Grades</div>
    </div>
  </div>
);

const TeacherDashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">My Classes</div>
      <div className="bg-white p-4 rounded-lg shadow">Student Progress</div>
    </div>
  </div>
);

const ParentDashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Parent Dashboard</h1>
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">Child Progress</div>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();
  
  switch (user?.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'student':
      return <StudentDashboard />;
    case 'teacher':
      return <TeacherDashboard />;
    case 'parent':
      return <ParentDashboard />;
    default:
      return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <>
                    <Navigation />
                    <Dashboard />
                  </>
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;