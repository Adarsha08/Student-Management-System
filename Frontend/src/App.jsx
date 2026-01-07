import React from 'react';
//import css
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/layout/Sidebar';
import Header from './Components/layout/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Students from './Components/Student/Student';
import AddStudent from './Components/Student/AddStudent';
import Teachers from './Components/Teacher/Teacher';
import Courses from './Components/Courses/Courses';
import Attendance from './Components/Attendance/Attendance';
import Grades from './Components/Grades/Grades';
import Fees from './Components/Fees/Fees';
import Reports from './Components/Report/Report';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        
        <div className="ml-64 flex-1 p-6">
          <Header />
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/add" element={<AddStudent />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;