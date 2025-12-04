import React, { useState } from 'react';

// Define the shape of the state for the youth volunteer form
interface FormState {
  schoolName: string;
  nameGrade: string;
  email: string;
  areasOfInterest: Record<string, boolean>; // e.g., { Care: true, Computers: false }
}

// Area of Interest options structure
const AREA_OF_INTEREST_OPTIONS: string[] = [
  'Care', 'Computers', 'Events / Festivals',
  'Food / Hospitality', 'Fun / Games', 'Health / Education',
  'Management / Training', 'Outdoors (gardens, beaches, etc.)', 'Sales / Office',
];

const initialInterestState = AREA_OF_INTEREST_OPTIONS.reduce((acc, area) => {
  acc[area] = false;
  return acc;
}, {} as Record<string, boolean>);

const YouthPositions: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    schoolName: '',
    nameGrade: '',
    email: '',
    areasOfInterest: initialInterestState,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (area: string) => {
    setFormData(prev => ({
      ...prev,
      areasOfInterest: {
        ...prev.areasOfInterest,
        [area]: !prev.areasOfInterest[area],
      },
    }));
  };

  const handleSelectAll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const allSelected = AREA_OF_INTEREST_OPTIONS.reduce((acc, area) => {
      acc[area] = true;
      return acc;
    }, {} as Record<string, boolean>);

    setFormData(prev => ({
      ...prev,
      areasOfInterest: allSelected,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Youth Form Submitted:', formData);
    // Add your search or submission logic here
  };

  // Helper component for the Help icon and text
  const HelpLink: React.FC = () => (
    <a href="#" className="text-gray-600 text-xs ml-1 relative group"
       onClick={(e) => { e.preventDefault(); console.log("Help clicked"); }}
    >
      [<span className="font-bold text-xs">?</span>Help]
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 p-2 text-white text-xs bg-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Click for further details
      </span>
    </a>
  );


  return (
    // Mimicking the simple, unboxed, white background style of the source image
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold mb-6 text-[#061839]">Youth Volunteer Search</h1>
          <p className="text-lg mb-8 text-[#061839] opacity-80">
            Search positions suitable for minimum ages 13 to 29 on this list.<br />
            If you need help click HELP button for further details about areas of interest.
          </p>

          {/* Area of Interest Checkboxes */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
                <p className="font-semibold text-lg text-[#061839]">Area of Interest</p>
                <HelpLink />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
              {AREA_OF_INTEREST_OPTIONS.map((area) => (
                <label key={area} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    name="areasOfInterest"
                    checked={formData.areasOfInterest[area]}
                    onChange={() => handleInterestChange(area)}
                    className="form-checkbox h-5 w-5 text-[#1C75BC] rounded border-gray-300 focus:ring-[#1C75BC]"
                  />
                  <span className="text-[#061839]">{area}</span>
                </label>
              ))}
            </div>
            <a href="#" onClick={handleSelectAll} className="text-[#1C75BC] text-sm mt-2 inline-block hover:underline font-medium">
              Select All
            </a>
          </div>

          {/* School Name and Name/Grade */}
          <div className="flex flex-wrap mb-8 gap-6">
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="schoolName" className="block font-semibold mb-2 text-[#061839] text-lg">
                School Name (or N/A)
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] transition-all"
                aria-label="School Name"
                placeholder="Enter school name..."
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="nameGrade" className="block font-semibold mb-2 text-[#061839] text-lg">
                Name / Grade if appropriate
              </label>
              <input
                type="text"
                id="nameGrade"
                name="nameGrade"
                value={formData.nameGrade}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] transition-all"
                aria-label="Name / Grade"
                placeholder="Enter name and grade..."
              />
            </div>
          </div>

          {/* E-mail Address */}
          <div className="mb-8">
            <label htmlFor="email" className="block font-semibold mb-2 text-[#061839] text-lg">
              E-mail Address
              <HelpLink />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] transition-all"
              aria-label="E-mail Address"
              placeholder="Enter your email..."
            />
          </div>

          {/* Search Button */}
          <div className="mt-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-8 py-3 bg-[#1C75BC] text-white font-semibold rounded-xl hover:bg-[#165a9a] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Search Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthPositions;