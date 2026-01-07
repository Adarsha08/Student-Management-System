import React from 'react';
import { Users, BookOpen, Calendar, UserCheck, Plus, DollarSign } from 'lucide-react';


function Dashboard() {
  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, gradient: 'from-purple-500 to-indigo-600' },
    { title: 'Total Teachers', value: '87', icon: UserCheck, gradient: 'from-green-500 to-teal-600' },
    { title: 'Total Courses', value: '45', icon: BookOpen, gradient: 'from-pink-500 to-rose-600' },
    { title: 'Attendance Today', value: '92%', icon: Calendar, gradient: 'from-blue-500 to-cyan-600' }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Recent Activities</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 border-l-4 border-purple-500 rounded">
            <div className="flex items-center text-gray-700">
              <Plus className="w-5 h-5 text-purple-500 mr-3" />
              New student registered: John Doe (ID: 2024001)
            </div>
          </div>
          <div className="p-4 bg-gray-50 border-l-4 border-green-500 rounded">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 text-green-500 mr-3" />
              Attendance marked for Class 10-A
            </div>
          </div>
          <div className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
            <div className="flex items-center text-gray-700">
              <DollarSign className="w-5 h-5 text-blue-500 mr-3" />
              Fee payment received from Student ID: 2023445
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;