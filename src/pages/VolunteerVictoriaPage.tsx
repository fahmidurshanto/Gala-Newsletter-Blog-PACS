import React from 'react';
import HeroSection from '../components/volunteer/HeroSection';
import FeaturesSection from '../components/volunteer/FeaturesSection';
import SearchSection from '../components/volunteer/SearchSection';
import StatsSection from '../components/volunteer/StatsSection';
const VolunteerVictoriaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Grid */}
        <FeaturesSection />

        {/* Search Section */}
        <SearchSection />

        {/* Stats Section */}
        <StatsSection />
      </div>
    </div>
  );
};

export default VolunteerVictoriaPage;
