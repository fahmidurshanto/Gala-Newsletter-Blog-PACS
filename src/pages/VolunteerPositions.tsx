import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerPositions = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ color: '#061839' }}>
          Find Volunteer Positions
        </h1>
        
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
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#061839' }}>
            Volunteer by Location
          </h2>
          <p className="text-lg mb-6" style={{ color: '#061839', opacity: 0.8 }}>
            Find opportunities in your area.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              to="/volunteer-victoria"
              className="block p-6 bg-gradient-to-r from-[#061839] to-[#1C75BC] text-white rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">Volunteer in Victoria</h3>
              <p>Discover opportunities in the Greater Victoria area</p>
            </Link>
            
            <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#061839' }}>More Locations Coming Soon</h3>
              <p className="text-gray-600">We're expanding to more areas soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPositions;