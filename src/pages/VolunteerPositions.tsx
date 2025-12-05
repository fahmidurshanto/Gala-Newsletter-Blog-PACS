import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/volunteer/HeroSection';
import FeaturesSection from '../components/volunteer/FeaturesSection';
import SearchSection from '../components/volunteer/SearchSection';
import StatsSection from '../components/volunteer/StatsSection';

const VolunteerPositions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Features Grid */}
        <FeaturesSection />
        
        {/* Search Section */}
        <SearchSection />
        
        {/* Stats Section */}
        <StatsSection />
      </div>
      
      {/* Original Search Box */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#061839' }}>
              Search for Opportunities
            </h2>
            <p className="text-lg mb-6" style={{ color: '#061839', opacity: 0.8 }}>
              Find volunteer positions that match your interests, skills, and availability.
            </p>
            
            <Link 
              to="/all-positions"
              className="inline-block bg-[#1C75BC] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#165a9a] transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Search All Positions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPositions;