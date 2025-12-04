import React from 'react';

const StatsSection = () => {
  return (
    <div 
      className="bg-gradient-to-r from-[#061839] to-[#1C75BC] rounded-3xl p-8 text-white"
      style={{ background: 'linear-gradient(to right, #061839, #1C75BC)' }}
    >
      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-[#F4BB3A] mb-2">500+</div>
          <div className="text-blue-100">Active Volunteers</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#F4BB3A] mb-2">120+</div>
          <div className="text-blue-100">Organizations</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#F4BB3A] mb-2">1,200+</div>
          <div className="text-blue-100">Opportunities</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-[#F4BB3A] mb-2">Weekly</div>
          <div className="text-blue-100">Updated Listings</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;