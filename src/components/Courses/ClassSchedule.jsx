import React from 'react';

const ClassSchedule = ({ schedule = [] }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Class Schedule</h2>
      {schedule.length === 0 ? (
        <p className="text-gray-500">No classes scheduled yet.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Day</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Topic</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((cls, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-700">{cls.day}</td>
                <td className="px-6 py-4 text-gray-700">{cls.time}</td>
                <td className="px-6 py-4 text-gray-700">{cls.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClassSchedule;
