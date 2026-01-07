import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Eye, Edit, Trash2 } from 'lucide-react';

function Students() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    { id: '2024001', name: 'John Doe', class: '10-A', email: 'john.doe@email.com', phone: '+1234567890', status: 'Active' },
    { id: '2024002', name: 'Jane Smith', class: '9-B', email: 'jane.smith@email.com', phone: '+1234567891', status: 'Active' },
    { id: '2024003', name: 'Mike Johnson', class: '11-C', email: 'mike.j@email.com', phone: '+1234567892', status: 'Inactive' }
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Students Management</h2>
        <button
          onClick={() => navigate('/students/add')}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add New Student
        </button>
      </div>

      <div className="flex gap-4 mb-5">
        <input
          type="text"
          placeholder="Search by name, ID, or class..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
        />
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          <Search className="w-4 h-4" /> Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Student ID</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Class</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Phone</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-700">{student.id}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{student.name}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{student.class}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{student.email}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{student.phone}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Students;