import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isVolunteerMenuOpen, setIsVolunteerMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileVolunteerMenuOpen, setIsMobileVolunteerMenuOpen] = useState(false);
  const volunteerMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { currentUser, logout } = useAuth();
  const [logoutError, setLogoutError] = useState('');

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (volunteerMenuRef.current && !volunteerMenuRef.current.contains(event.target as Node)) {
        setIsVolunteerMenuOpen(false);
      }
      
      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsMobileVolunteerMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      setLogoutError('');
      await logout();
    } catch (err: any) {
      setLogoutError(err.message || 'Failed to log out');
    }
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 animate-fade-in-down relative" style={{ zIndex: 50 }}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/JDFPACS-Logo.svg" 
              alt="Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <Link to="/" className="font-bold text-xl" style={{ color: '#061839' }}>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Main Navigation */}
            <div className="flex items-center gap-6">
              <Link 
                to="/" 
                className="font-medium transition-all duration-300 hover:text-blue-600"
                style={{ color: '#061839' }}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="font-medium transition-all duration-300 hover:text-blue-600"
                style={{ color: '#061839' }}
              >
                Blog
              </Link>
              
              {/* Volunteer Dropdown Menu */}
              <div className="relative" ref={volunteerMenuRef}>
                <button
                  onClick={() => setIsVolunteerMenuOpen(!isVolunteerMenuOpen)}
                  className="font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-1"
                  style={{ color: '#061839' }}
                >
                  Volunteer
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-4 h-4 transition-transform duration-300 ${isVolunteerMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isVolunteerMenuOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in-down"
                    style={{ zIndex: 100 }}
                  >
                    <Link
                      to="/volunteer"
                      className="block px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsVolunteerMenuOpen(false)}
                    >
                      Find Volunteer Positions
                    </Link>
                    <Link
                      to="/volunteer-victoria"
                      className="block px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 border-t border-gray-100"
                      onClick={() => setIsVolunteerMenuOpen(false)}
                    >
                      Victoria Opportunities
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Authentication Section - Visually Separated */}
            <div className="border-l border-gray-200 pl-6">
              {currentUser ? (
                <div className="flex items-center gap-4">
                  <Link 
                    to="/dashboard" 
                    className="font-medium transition-all duration-300 hover:text-blue-600"
                    style={{ color: '#061839' }}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/profile" 
                    className="font-medium transition-all duration-300 hover:text-blue-600"
                    style={{ color: '#061839' }}
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className="font-medium transition-all duration-300 hover:text-blue-600"
                    style={{ color: '#061839' }}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="font-medium transition-all duration-300 hover:text-blue-600"
                    style={{ color: '#061839' }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="font-medium transition-all duration-300 hover:text-blue-600"
                  style={{ color: '#061839' }}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                style={{ color: '#061839' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                style={{ color: '#061839' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Volunteer Dropdown Menu */}
              <div className="w-full">
                <button
                  onClick={() => setIsMobileVolunteerMenuOpen(!isMobileVolunteerMenuOpen)}
                  className="font-medium py-3 transition-all duration-300 hover:text-blue-600 flex items-center justify-between w-full text-left"
                  style={{ color: '#061839' }}
                >
                  <span>Volunteer</span>
                  {isMobileVolunteerMenuOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {isMobileVolunteerMenuOpen && (
                  <div className="mt-2 ml-4 space-y-2 bg-gray-50 rounded-lg p-2">
                    <Link
                      to="/volunteer"
                      className="block py-2 px-3 text-left hover:bg-gray-100 transition-colors duration-200 rounded-md"
                      onClick={() => {
                        setIsMobileVolunteerMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Find Volunteer Positions
                    </Link>
                    <Link
                      to="/volunteer-victoria"
                      className="block py-2 px-3 text-left hover:bg-gray-100 transition-colors duration-200 rounded-md"
                      onClick={() => {
                        setIsMobileVolunteerMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Victoria Opportunities
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Authentication Section */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                {currentUser ? (
                  <div className="space-y-2">
                    <Link 
                      to="/dashboard" 
                      className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                      style={{ color: '#061839' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/profile" 
                      className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                      style={{ color: '#061839' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/settings" 
                      className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                      style={{ color: '#061839' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="font-medium py-3 transition-all duration-300 hover:text-blue-600 text-left w-full"
                      style={{ color: '#061839' }}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                    style={{ color: '#061839' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {logoutError && (
        <div className="bg-red-50 border-t border-red-200 p-2">
          <p className="text-red-700 text-center text-sm">{logoutError}</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;