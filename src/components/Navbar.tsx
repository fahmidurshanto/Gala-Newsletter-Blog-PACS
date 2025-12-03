import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 animate-fade-in-down relative" style={{ zIndex: 50 }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/JDFPACS-Logo.svg" 
            alt="PACS Logo" 
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
          <Link to="/" className="font-bold text-xl" style={{ color: '#061839' }}>
            PACS
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="font-medium transition-all duration-300 hover:text-blue-600"
            style={{ color: '#061839' }}
          >
            Home
          </Link>
          <Link 
            to="/newsletter" 
            className="font-medium transition-all duration-300 hover:text-blue-600"
            style={{ color: '#061839' }}
          >
            Newsletter
          </Link>
          <Link 
            to="/blog" 
            className="font-medium transition-all duration-300 hover:text-blue-600"
            style={{ color: '#061839' }}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;