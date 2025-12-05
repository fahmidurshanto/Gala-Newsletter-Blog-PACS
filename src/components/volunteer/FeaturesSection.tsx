import React from 'react';
import { Users, Heart, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Connection",
      description: "Connect with like-minded individuals passionate about making a difference"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Meaningful Impact",
      description: "Contribute to causes that matter and see the tangible results of your efforts"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skill Development",
      description: "Gain valuable experience and develop new skills while giving back to the community"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Opportunities",
      description: "Find volunteer roles that fit your schedule and interests, from one-time events to ongoing commitments"
    }
  ];

  return (
    <section className="mb-12 sm:mb-16">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#061839' }}>
          Why Volunteer With Us?
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#061839', opacity: 0.8 }}>
          The Westshore Community blends vibrant urban growth with the stunning natural beauty of Vancouver Island, offering a unique and rewarding experience for volunteers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(28, 117, 188, 0.1)' }}
            >
              <div style={{ color: '#1C75BC' }}>
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#061839' }}>
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 text-center">
        <Link
          to="/volunteer-category/all"
          className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore All Opportunities
        </Link>
      </div>
    </section>
  );
};

export default FeaturesSection;