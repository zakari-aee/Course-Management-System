import React from "react";

const GradesView = ({ grades = [] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Grades</h2>

      <div className="space-y-3">
        {grades.map((g, i) => (
          <div
            key={i}
            className="bg-gray-50 p-3 rounded-lg flex justify-between"
          >
            <span className="text-gray-700 font-medium">{g.subject}</span>
            <span className="font-bold text-blue-600">{g.grade}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradesView;
