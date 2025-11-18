import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Parents from './pages/Parents';
import Payments from './pages/Payments';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Navigation from './components/Navigation/Navigation';
import Notifications from './components/Notifications/Notifications';

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {user && <Navigation />}
      <main className={user ? "ml-64 p-6" : "p-0"}>
        <Notifications />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path="/students" element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          } />
          <Route path="/teachers" element={
            <ProtectedRoute>
              <Teachers />
            </ProtectedRoute>
          } />
          <Route path="/parents" element={
            <ProtectedRoute>
              <Parents />
            </ProtectedRoute>
          } />
          <Route path="/payments" element={
            <ProtectedRoute>
              <Payments />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <AppContent />
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;