import React from "react";

const AttendanceView = ({ attendance = [] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Attendance</h2>

      <div className="space-y-3">
        {attendance.map((item, index) => (
          <div
            key={index}
            className="flex justify-between p-3 rounded-lg bg-gray-50"
          >
            <span className="text-gray-700">{item.date}</span>
            <span
              className={`font-semibold ${
                item.status === "Present" ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceView;
