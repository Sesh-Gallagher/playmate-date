import React from 'react';
import { Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">PlayMate Finder</h1>
          </Link>
          <nav className="flex space-x-4">
            <button
              onClick={() => navigate('/signin')}
              className="text-white hover:text-purple-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md text-sm font-medium"
            >
              Join Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}