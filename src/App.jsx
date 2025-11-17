import React from 'react';
import StatsCard from './components/Dashboard/StatsCard';
import RecentActivities from './components/Dashboard/RecentActivities';
import { FaUserGraduate, FaBook, FaDollarSign, FaCheckCircle, FaClipboard } from 'react-icons/fa';

export default function App() {
  // Sample data for RecentActivities
  const activities = [
    {
      icon: <FaCheckCircle />,
      title: 'New student registered: Alice Johnson',
      time: '2 hours ago',
    },
    {
      icon: <FaClipboard />,
      title: 'Math exam results uploaded',
      time: '5 hours ago',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Payment received from parent: Bob Smith',
      time: '1 day ago',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">School Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of students, courses, and payments</p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatsCard
          title="Total Students"
          value="1,245"
          icon={<FaUserGraduate />}
          color="bg-blue-500"
        />
        <StatsCard
          title="Courses"
          value="32"
          icon={<FaBook />}
          color="bg-green-500"
        />
        <StatsCard
          title="Payments"
          value="$12,450"
          icon={<FaDollarSign />}
          color="bg-yellow-500"
        />
      </section>

      {/* Recent Activities */}
      <section className="max-w-4xl mx-auto">
        <RecentActivities activities={activities} />
      </section>
    </div>
  );
}
