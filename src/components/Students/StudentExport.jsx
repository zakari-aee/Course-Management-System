// src/components/Students/StudentExport.jsx
import React, { useState } from 'react';

const StudentExport = ({ students }) => {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const exportToPDF = () => {
    // Mock PDF export - implement with a library like jsPDF
    alert('Exporting to PDF... This would generate a PDF file with student data.');
    setShowExportMenu(false);
  };

  const exportToExcel = () => {
    // Mock Excel export - implement with a library like xlsx
    alert('Exporting to Excel... This would download an Excel file with student data.');
    setShowExportMenu(false);
  };

  const exportToCSV = () => {
    // Simple CSV export implementation
    const headers = ['Name', 'Email', 'Grade', 'Parent Name', 'Parent Email', 'Attendance', 'Average Grade'];
    const csvData = students.map(student => [
      student.name,
      student.email,
      student.grade,
      student.parentName,
      student.parentEmail,
      `${student.attendance}%`,
      `${student.averageGrade}%`
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `students_export_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    setShowExportMenu(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowExportMenu(!showExportMenu)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 flex items-center space-x-2"
      >
        <span>📊 Export</span>
      </button>

      {showExportMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          <div className="py-1">
            <button
              onClick={exportToPDF}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <span>📄</span>
              <span>Export as PDF</span>
            </button>
            <button
              onClick={exportToExcel}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <span>📊</span>
              <span>Export as Excel</span>
            </button>
            <button
              onClick={exportToCSV}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <span>📝</span>
              <span>Export as CSV</span>
            </button>
          </div>
        </div>
      )}

      {/* Close menu when clicking outside */}
      {showExportMenu && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowExportMenu(false)}
        />
      )}
    </div>
  );
};

export default StudentExport;