import React from 'react';
import { Plus } from 'lucide-react';

function Settings() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>
      <p className="text-gray-500">Settings interface coming soon...</p>
    </div>
  );
}

export default Settings;