import React from 'react';
import StatCard from '../Components/common/StatCard';
import { stats } from '../utils/constants';
import { Plus, Calendar, DollarSign } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
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
};

export default Dashboard;