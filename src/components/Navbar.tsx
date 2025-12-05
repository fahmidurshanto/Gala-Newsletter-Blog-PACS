import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import JDFPACSLogoSvg from '../../public/JDFPACS-Logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 animate-fade-in-down relative" style={{ zIndex: 50 }}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img 
                src={JDFPACSLogoSvg} 
                alt="Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
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
              
              <Link 
                to="/donate" 
                className="font-medium transition-all duration-300 hover:text-blue-600"
                style={{ color: '#061839' }}
              >
                Donate
              </Link>
              
              {/* Volunteer Link - Simple link without dropdown */}
              <Link 
                to="/volunteer"
                className="font-medium transition-all duration-300 hover:text-blue-600"
                style={{ color: '#061839' }}
              >
                Volunteer
              </Link>
              
              {/* Signup Link */}
              <Link 
                to="/signup" 
                className="font-medium transition-all duration-300 hover:text-blue-600"
                style={{ color: '#061839' }}
              >
                Sign Up
              </Link>
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
              
              <Link 
                to="/donate" 
                className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                style={{ color: '#061839' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate
              </Link>
              
              {/* Mobile Volunteer Link - Simple link without dropdown */}
              <Link 
                to="/volunteer"
                className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                style={{ color: '#061839' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Volunteer
              </Link>
              
              {/* Mobile Signup Link */}
              <Link 
                to="/signup" 
                className="font-medium py-3 transition-all duration-300 hover:text-blue-600 block"
                style={{ color: '#061839' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;