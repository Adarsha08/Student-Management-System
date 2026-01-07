import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, RotateCcw } from 'lucide-react';

function AddStudent() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Student form submitted!');
    navigate('/students');
  };

  const handleReset = () => {
    // Reset logic here
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Add New Student</h2>
        <button
          onClick={() => navigate('/students')}
          className="bg-gray-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to List
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">First Name *</label>
              <input 
                type="text" 
                placeholder="Enter first name" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Last Name *</label>
              <input 
                type="text" 
                placeholder="Enter last name" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Date of Birth *</label>
              <input 
                type="date" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Gender *</label>
              <select 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Email *</label>
              <input 
                type="email" 
                placeholder="student@email.com" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Phone Number *</label>
              <input 
                type="tel" 
                placeholder="+1234567890" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Class *</label>
              <select 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              >
                <option value="">Select class</option>
                <option value="9-a">9-A</option>
                <option value="9-b">9-B</option>
                <option value="10-a">10-A</option>
                <option value="10-b">10-B</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Roll Number *</label>
              <input 
                type="text" 
                placeholder="Enter roll number" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Parent/Guardian Name *</label>
              <input 
                type="text" 
                placeholder="Enter parent name" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Parent Contact *</label>
              <input 
                type="tel" 
                placeholder="+1234567890" 
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Address *</label>
            <textarea 
              rows="3" 
              placeholder="Enter full address" 
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="flex gap-3">
            <button 
              type="submit"
              className="bg-Linear-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Student
            </button>
            <button 
              type="button"
              onClick={handleReset} 
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddStudent;