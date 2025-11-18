import React from "react";
import { User, BookOpen, CalendarCheck, CreditCard, Bell } from "lucide-react";

const ParentDashboard = () => {
  const cards = [
    { title: "Child Attendance", icon: <CalendarCheck />, color: "bg-blue-500" },
    { title: "Grades", icon: <BookOpen />, color: "bg-green-500" },
    { title: "Payments", icon: <CreditCard />, color: "bg-yellow-500" },
    { title: "Notifications", icon: <Bell />, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <User className="text-blue-500" size={40} />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Parent Dashboard
          </h2>
          <p className="text-gray-500 text-sm">Welcome back!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl text-white shadow ${card.color} flex flex-col items-center`}
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <p className="text-lg font-medium">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentDashboard;
