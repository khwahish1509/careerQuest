import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">ConsultBook</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/consultants" className="text-gray-600 hover:text-blue-600">Find Consultants</Link>
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <User className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;