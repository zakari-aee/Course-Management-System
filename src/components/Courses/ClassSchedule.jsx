import React from 'react';
import { useData } from '../../context/DataContext';

const ClassSchedule = () => {
  const { courses, users } = useData();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00-9:30', '9:45-11:15', '11:30-13:00', '14:00-15:30', '15:45-17:15'];

  const getCourseForTimeSlot = (day, timeSlot) => {
    return courses.find(course => {
      const schedule = course.schedule.toLowerCase();
      return schedule.includes(day.toLowerCase()) && schedule.includes(timeSlot);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Class Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-50">Time</th>
              {days.map(day => (
                <th key={day} className="border p-2 bg-gray-50">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(timeSlot => (
              <tr key={timeSlot}>
                <td className="border p-2 bg-gray-50 font-medium">{timeSlot}</td>
                {days.map(day => {
                  const course = getCourseForTimeSlot(day, timeSlot);
                  const teacher = course ? users.find(u => u.id === course.teacherId) : null;
                  
                  return (
                    <td key={day} className="border p-2">
                      {course ? (
                        <div className="text-sm">
                          <div className="font-medium">{course.name}</div>
                          <div className="text-gray-500 text-xs">{teacher?.name}</div>
                        </div>
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassSchedule;