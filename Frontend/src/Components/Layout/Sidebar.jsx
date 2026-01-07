import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, Calendar, TrendingUp, DollarSign, FileText, Settings, GraduationCap, UserCheck } from 'lucide-react';

function Sidebar() {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/students', label: 'Students', icon: Users },
    { path: '/teachers', label: 'Teachers', icon: UserCheck },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/attendance', label: 'Attendance', icon: Calendar },
    { path: '/grades', label: 'Grades', icon: TrendingUp },
    { path: '/fees', label: 'Fees', icon: DollarSign },
    { path: '/reports', label: 'Reports', icon: FileText },
    { path: '/settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="w-64 bg-linear-to-br from-purple-600 to-indigo-700 text-white fixed h-screen overflow-y-auto shadow-xl">
      <div className="p-5">
        <div className="flex items-center justify-center gap-3 mb-10">
          <GraduationCap className="w-8 h-8" />
          <span className="text-2xl font-bold">SMS Admin</span>
        </div>

        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-purple-500 bg-opacity-20 text-white'
                        : 'text-white text-opacity-80 hover:bg-gray-600 hover:bg-opacity-10'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;