import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/students': 'Students Management',
    '/students/add': 'Add New Student',
    '/teachers': 'Teachers Management',
    '/courses': 'Courses Management',
    '/attendance': 'Attendance Management',
    '/grades': 'Grades Management',
    '/fees': 'Fee Management',
    '/reports': 'Reports & Analytics',
    '/settings': 'System Settings'
  };

  const currentTitle = pageTitles[location.pathname] || 'Dashboard';

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">{currentTitle}</h1>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="font-semibold text-gray-800">Admin User</div>
          <div className="text-xs text-gray-500">admin@school.com</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
          AU
        </div>
      </div>
    </div>
  );
}

export default Header;