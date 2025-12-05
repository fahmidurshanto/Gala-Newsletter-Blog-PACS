import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ 
          backgroundImage: "url('/JUAN_DE_FUCA.jpg')"
        }}
      />
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Find Your <span className="text-yellow-300">Perfect</span> Volunteer Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white">
            Connect with meaningful causes and make a difference in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/volunteer-category/all"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg border-2 border-blue-600"
              style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.borderColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.borderColor = '#2563eb';
              }}
            >
              Explore Opportunities <ArrowRight size={20} />
            </Link>
            <button 
              onClick={() => {
                console.log('Book Appointment clicked');
                alert('Appointment booking feature would open here');
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              <Calendar size={20} /> Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;