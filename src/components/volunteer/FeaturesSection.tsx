import React from 'react';
import { Users, Target, Zap, MapPin } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: 'Inspire & Empower',
      description: 'We inspire volunteers and empower volunteerism across Greater Victoria'
    },
    {
      icon: <Target size={24} />,
      title: 'Support Organizations',
      description: 'Dedicated support for volunteer-led organizations, groups and projects'
    },
    {
      icon: <Zap size={24} />,
      title: 'Tools & Training',
      description: 'Comprehensive tools and training for volunteers and staff'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Unique Opportunities',
      description: 'Creating opportunities that exist nowhere else in Greater Victoria'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          style={{ 
            background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
            borderColor: 'rgba(28, 117, 188, 0.2)'
          }}
        >
          <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#1C75BC] mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-bold text-[#061839] mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;