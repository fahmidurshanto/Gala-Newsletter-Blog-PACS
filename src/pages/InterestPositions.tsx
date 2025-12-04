import React, { useState } from 'react';
import { Check, Send, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define the full list of interests based on the screenshot
const INTEREST_AREAS = [
  "Accounting/Finance",
  "Animals/Pets",
  "Arts/Culture",
  "Boards/Committees",
  "Caring Support",
  "Children/Youth",
  "Communication/Public Relations",
  "Counselling/Conflict",
  "Driver/Transportation",
  "Events/Fundraising",
  "Food Security",
  "Food/Hospitality",
  "Gardening/Environment",
  "Health Care/Emergency",
  "Heritage/Museum",
  "Housing",
  "Leadership/Management",
  "Library/Research",
  "Maintenance/Trades",
  "Newcomer Support",
  "Office Work",
  "Recreation/Sports",
  "Recycling",
  "Retail Sales/Donations",
  "Senior Services",
  "Special Events",
  "Teaching/Tutoring",
  "Technology"
];

const InterestPositions = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Toggle individual checkbox
  const toggleInterest = (interest: string) => {
    setSelected(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  // Handle "Select All" / "Deselect All" logic
  const handleSelectAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (selected.length === INTEREST_AREAS.length) {
      setSelected([]);
    } else {
      setSelected([...INTEREST_AREAS]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Submitting interests:", selected);
      setIsSubmitting(false);
      alert(`Submitted ${selected.length} interests!`);
    }, 1000);
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  const isAllSelected = selected.length === INTEREST_AREAS.length;

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header Section */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#061839] flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-[#1C75BC]" />
              Find Volunteer Opportunities
            </h1>
            <p className="mt-2 text-[#061839] opacity-80 text-lg">
              Join our community and make a difference in areas that matter to you.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#061839] flex items-center gap-2 mb-1">
                    <Heart className="w-5 h-5 text-[#D7562B] fill-current" />
                    Areas of Interest
                  </h2>
                  <p className="text-sm text-gray-500">
                    Select any areas of work that interest you
                  </p>
                </div>

                {/* Grid of Checkboxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {INTEREST_AREAS.map((interest) => (
                    <label 
                      key={interest}
                      className={`
                        flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 border
                        ${selected.includes(interest) 
                          ? 'bg-blue-50 border-[#1C75BC]' 
                          : 'hover:bg-gray-50 border-transparent'}
                      `}
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#1C75BC] focus:ring-offset-1 checked:bg-[#1C75BC] checked:border-[#1C75BC] transition-colors"
                          checked={selected.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                        />
                        <Check className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className={`ml-3 text-sm sm:text-base ${selected.includes(interest) ? 'text-[#061839] font-medium' : 'text-gray-700'}`}>
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-4">
                  <button
                    onClick={handleSelectAll}
                    className="text-[#1C75BC] hover:text-[#061839] text-sm font-semibold hover:underline transition-colors"
                  >
                    {isAllSelected ? "Deselect All" : "Select All"}
                  </button>

                  <div className="flex gap-4 w-full sm:w-auto">
                    {/* Back Button */}
                    <button 
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 sm:flex-none px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center gap-2"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none px-8 py-2.5 bg-[#1C75BC] text-white font-medium rounded-lg hover:bg-[#165a9a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C75BC] shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Bottom decorative bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#1C75BC] via-[#061839] to-[#D7562B]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestPositions;