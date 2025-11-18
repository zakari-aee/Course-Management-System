import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', roles: ['admin', 'teacher', 'student', 'parent'] },
    { path: '/courses', label: 'Courses', roles: ['admin', 'teacher', 'student', 'parent'] },
    { path: '/students', label: 'Students', roles: ['admin', 'teacher'] },
    { path: '/teachers', label: 'Teachers', roles: ['admin'] },
    { path: '/parents', label: 'Parents', roles: ['admin'] },
    { path: '/payments', label: 'Payments', roles: ['admin', 'parent'] },
  ];

  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(user.role)
  );

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">EduManage Pro</h1>
        <p className="text-sm text-gray-600 mt-1 capitalize">{user.role}</p>
      </div>
      
      <nav className="mt-6">
        {filteredNavItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
              location.pathname === item.path ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition duration-200 text-sm font-medium"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navigation;