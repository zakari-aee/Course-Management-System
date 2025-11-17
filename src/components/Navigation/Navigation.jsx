// src/components/Navigation/Navigation.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Fixed import

const Navigation = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Course Management System</h1>
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                Dashboard
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              Welcome, {user?.name} ({user?.role})
            </span>
            <button
              onClick={handleLogout}
              className="bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;