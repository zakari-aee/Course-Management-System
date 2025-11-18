// src/components/Teachers/TeacherSchedule.jsx
import React, { useState, useEffect } from 'react';

const TeacherSchedule = ({ teacherId }) => {
  const [schedule, setSchedule] = useState([]);
  const [selectedDay, setSelectedDay] = useState('monday');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with API call
    const mockSchedule = {
      monday: [
        { id: 1, time: '08:00 - 09:00', subject: 'Mathematics', grade: 'Grade 10', room: 'Room 101' },
        { id: 2, time: '10:00 - 11:00', subject: 'Advanced Math', grade: 'Grade 11', room: 'Room 102' },
        { id: 3, time: '13:00 - 14:00', subject: 'Mathematics', grade: 'Grade 9', room: 'Room 103' }
      ],
      tuesday: [
        { id: 4, time: '09:00 - 10:00', subject: 'Mathematics', grade: 'Grade 10', room: 'Room 101' },
        { id: 5, time: '11:00 - 12:00', subject: 'Calculus', grade: 'Grade 12', room: 'Room 104' }
      ],
      wednesday: [
        { id: 6, time: '08:00 - 09:00', subject: 'Mathematics', grade: 'Grade 10', room: 'Room 101' },
        { id: 7, time: '14:00 - 15:00', subject: 'Advanced Math', grade: 'Grade 11', room: 'Room 102' }
      ],
      thursday: [
        { id: 8, time: '10:00 - 11:00', subject: 'Mathematics', grade: 'Grade 9', room: 'Room 103' },
        { id: 9, time: '13:00 - 14:00', subject: 'Calculus', grade: 'Grade 12', room: 'Room 104' }
      ],
      friday: [
        { id: 10, time: '08:00 - 09:00', subject: 'Mathematics', grade: 'Grade 10', room: 'Room 101' },
        { id: 11, time: '11:00 - 12:00', subject: 'Advanced Math', grade: 'Grade 11', room: 'Room 102' }
      ]
    };

    setSchedule(mockSchedule[selectedDay] || []);
    setLoading(false);
  }, [teacherId, selectedDay]);

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Weekly Schedule</h3>
        <div className="text-sm text-gray-600">
          {schedule.length} classes on {days.find(d => d.key === selectedDay)?.label}
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex space-x-2 mb-6">
        {days.map(day => (
          <button
            key={day.key}
            onClick={() => setSelectedDay(day.key)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition duration-200 ${
              selectedDay === day.key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* Schedule Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {classItem.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {classItem.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {classItem.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classItem.room}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    View
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {schedule.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">No classes scheduled</h4>
          <p className="text-gray-500">No classes are scheduled for this day.</p>
        </div>
      )}

      {/* Weekly Overview */}
      <div className="mt-8">
        <h4 className="text-md font-semibold mb-4">Weekly Overview</h4>
        <div className="grid grid-cols-5 gap-4">
          {days.map(day => (
            <div key={day.key} className="text-center">
              <div className={`text-sm font-medium mb-2 ${
                selectedDay === day.key ? 'text-indigo-600' : 'text-gray-600'
              }`}>
                {day.label}
              </div>
              <div className={`text-2xl font-bold rounded-lg p-3 ${
                selectedDay === day.key 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {(schedule[day.key] || []).length}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSchedule;