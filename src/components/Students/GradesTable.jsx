// src/components/Students/GradesTable.jsx
import React, { useState, useEffect } from 'react';

const GradesTable = ({ studentId }) => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with API call
    const mockGrades = [
      { id: 1, subject: 'Mathematics', grade: 92, assignment: 'Algebra Test', date: '2024-01-15' },
      { id: 2, subject: 'Science', grade: 88, assignment: 'Chemistry Lab', date: '2024-01-16' },
      { id: 3, subject: 'English', grade: 95, assignment: 'Essay Writing', date: '2024-01-17' },
      { id: 4, subject: 'History', grade: 78, assignment: 'World War II Quiz', date: '2024-01-18' },
      { id: 5, subject: 'Mathematics', grade: 85, assignment: 'Geometry Homework', date: '2024-01-19' },
    ];
    setGrades(mockGrades);
    setLoading(false);
  }, [studentId]);

  const getGradeColor = (grade) => {
    if (grade >= 90) return 'text-green-600 bg-green-50';
    if (grade >= 80) return 'text-blue-600 bg-blue-50';
    if (grade >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const calculateAverage = () => {
    if (grades.length === 0) return 0;
    const total = grades.reduce((sum, grade) => sum + grade.grade, 0);
    return (total / grades.length).toFixed(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Grades & Performance</h3>
        <div className="text-sm text-gray-600">
          Average: <span className="font-semibold">{calculateAverage()}%</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {grades.map((grade) => (
              <tr key={grade.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {grade.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {grade.assignment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(grade.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(grade.grade)}`}>
                    {grade.grade}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {grades.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No grade records found.
        </div>
      )}
    </div>
  );
};

export default GradesTable;