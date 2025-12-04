import React, { useState, useMemo } from 'react';
import { Search, Target, Briefcase, Heart, Building, Star, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Positions', icon: <Briefcase size={20} /> },
    { id: 'youth', label: 'Youth', icon: <GraduationCap size={20} /> },
    { id: 'interests', label: 'Interests', icon: <Heart size={20} /> },
    { id: 'organizations', label: 'Organizations', icon: <Building size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Star size={20} /> },
    { id: 'special-events', label: 'Special Events', icon: <Calendar size={20} /> },
  ];

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories;
    }
    
    const query = searchQuery.toLowerCase();
    return categories.filter(category => 
      category.label.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Search is handled by the filteredCategories useMemo above
  };

  const handleRequestVolunteer = () => {
    console.log('Requesting one-time volunteer');
    // Add request volunteer functionality here
    alert('One-time volunteer request form would open here');
  };

  return (
    <div 
      className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100"
      style={{ 
        background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
        borderColor: 'rgba(28, 117, 188, 0.2)'
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#061839] mb-6 text-center">
          Find Your Perfect <span className="text-[#1C75BC]">Volunteer</span> Role
        </h2>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Everyone deserves an opportunity to volunteer but not everyone wants the same position.
          That's why we post new positions weekly.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search volunteer positions by keyword..."
              className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#1C75BC] focus:ring-2 focus:ring-blue-100 transition-all"
              style={{ borderColor: 'rgba(28, 117, 188, 0.2)' }}
              onFocus={(e) => e.target.style.borderColor = '#1C75BC'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(28, 117, 188, 0.2)'}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1C75BC] text-white px-6 py-2 rounded-xl hover:bg-[#165a9a] transition-colors"
              style={{ backgroundColor: '#1C75BC' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#165a9a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1C75BC'}
            >
              Search
            </button>
          </div>
        </form>

        {/* Categories Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#061839] mb-6 flex items-center gap-2">
            <Target size={20} /> Browse Categories
            {searchQuery && (
              <span className="text-sm font-normal text-gray-500">
                ({filteredCategories.length} of {categories.length} categories)
              </span>
            )}
          </h3>
          
          {filteredCategories.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No categories found matching "{searchQuery}"
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCategories.map((category) => (
                <Link
                  key={category.id}
                  to={category.id === 'all' ? '/volunteer-category/all' : `/volunteer-category/${category.id}`}
                  className={`block p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-[#1C75BC] bg-blue-50 text-[#061839] shadow-md'
                      : 'border-gray-200 bg-white text-[#061839] hover:border-[#1C75BC] hover:shadow-sm'
                  }`}
                  style={{
                    borderColor: activeCategory === category.id ? '#1C75BC' : 'rgba(28, 117, 188, 0.2)',
                    backgroundColor: activeCategory === category.id ? 'rgba(28, 117, 188, 0.05)' : 'white'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      activeCategory === category.id ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={handleRequestVolunteer}
            className="group bg-gradient-to-r from-[#1C75BC] to-[#061839] text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(to right, #1C75BC, #061839)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #165a9a, #041026)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #1C75BC, #061839)';
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">Request a One-Time Volunteer</h4>
                <p className="text-blue-100 text-sm">Perfect for short-term opportunities</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <ChevronRight size={24} />
              </div>
            </div>
          </button>

          <button 
            className="group bg-gradient-to-r from-[#D7562B] to-[#061839] text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(to right, #D7562B, #061839)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #b04523, #041026)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #D7562B, #061839)';
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2">Virtual Advising</h4>
                <p className="text-orange-100 text-sm">Get personalized guidance</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <Calendar size={24} />
              </div>
            </div>
          </button>
        </div>

        {/* Help Text */}
        <div 
          className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100"
          style={{ 
            background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
            borderColor: 'rgba(28, 117, 188, 0.2)'
          }}
        >
          <p className="text-[#061839] text-center">
            <span className="font-semibold text-[#1C75BC]">Whether you're new to volunteering,</span> 
            {' '}or looking for a new opportunity, we're here to help you make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;