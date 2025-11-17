import React from 'react';
import RecentActivities from './components/Dashboard/RecentActivities';
import { FaUserPlus, FaBook, FaDollarSign } from 'react-icons/fa';

export default function App() {
  const recentActivities = [
    { title: 'New student enrolled: Alice Johnson', time: '2 hours ago', icon: <FaUserPlus /> },
    { title: 'Course added: Advanced Math', time: '5 hours ago', icon: <FaBook /> },
    { title: 'Payment received: $500 from Bob Smith', time: '1 day ago', icon: <FaDollarSign /> },
    { title: 'New student enrolled: Charlie Brown', time: '2 days ago', icon: <FaUserPlus /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard Recent Activities</h1>
        <p className="text-lg text-gray-600">Testing the RecentActivities component.</p>
      </header>

      <div className="max-w-lg mx-auto">
        <RecentActivities activities={recentActivities} />
      </div>
    </div>
  );
}
