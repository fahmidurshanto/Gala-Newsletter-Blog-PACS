import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Define the shape of the state for the volunteer form
interface FormState {
  keyword: string;
  volunteerType: "An Individual" | "A Group";
  gender: "Male" | "Female" | "Other";
  age: "13 and under" | "14-17" | "18+";
  volunteerFor: string;
  locations: Record<string, boolean>; // e.g., { Victoria: true, Colwood: false }
}

// Location options data structure
const LOCATION_OPTIONS: string[] = [
  "Any Location",
  "Victoria",
  "Oak Bay",
  "Esquimalt",
  "Saanich",
  "View Royal",
  "Colwood",
  "Langford",
  "Metchosin",
  "Sooke",
  "Highlands",
  "Central Saanich",
  "North Saanich",
  "Sidney",
  "Everywhere",
  "Remote/Virtual",
];

const initialLocationState = LOCATION_OPTIONS.reduce((acc, location) => {
  acc[location] = false;
  return acc;
}, {} as Record<string, boolean>);

const AllPositions: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    keyword: "",
    volunteerType: "An Individual",
    gender: "Male",
    age: "13 and under",
    volunteerFor: "choose one",
    locations: initialLocationState,
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = (location: string) => {
    setFormData((prev) => {
      const newLocations = { ...prev.locations };

      if (location === "Any Location" || location === "Everywhere") {
        const isChecked = !newLocations[location];
        // Special logic: Selecting 'Any Location' or 'Everywhere' should unselect others, and vice-versa
        if (isChecked) {
          Object.keys(newLocations).forEach(
            (key) => (newLocations[key] = false)
          );
          newLocations[location] = true;
        } else {
          newLocations[location] = false; // Just unselect the specific one
        }
      } else {
        // If a specific location is selected, unselect 'Any Location' and 'Everywhere'
        newLocations["Any Location"] = false;
        newLocations["Everywhere"] = false;
        newLocations[location] = !newLocations[location];
      }

      return {
        ...prev,
        locations: newLocations,
      };
    });
  };

  const handleSelectAll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const allSelected = LOCATION_OPTIONS.reduce((acc, location) => {
      acc[location] = true;
      return acc;
    }, {} as Record<string, boolean>);

    setFormData((prev) => ({
      ...prev,
      locations: allSelected,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your search logic here
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold mb-6 text-[#061839]">
            Search Volunteer Opportunities
          </h1>
          <p className="text-lg mb-8 text-[#061839] opacity-80">
            To help you find a suitable volunteer opportunity, please answer all
            the following questions.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Keyword Search */}
            <div className="mb-8">
              <label
                htmlFor="keyword"
                className="block font-semibold mb-2 text-[#061839] text-lg"
              >
                Keyword Search
              </label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                value={formData.keyword}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] transition-all"
                placeholder="Enter keywords..."
              />
            </div>

            {/* I will volunteer as: / Gender / My Age */}
            <div className="flex flex-wrap items-start justify-between mb-8 gap-6">
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="volunteerType"
                  className="block font-semibold mb-2 text-[#061839] text-lg"
                >
                  I will volunteer as:
                </label>
                <div className="flex items-center">
                  <select
                    id="volunteerType"
                    name="volunteerType"
                    value={formData.volunteerType}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] bg-white transition-all"
                  >
                    <option value="An Individual">An Individual</option>
                    <option value="A Group">A Group</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <label
                    htmlFor="gender"
                    className="block font-semibold mb-2 text-[#061839] text-lg"
                  >
                    Gender:
                  </label>
                  <div className="flex items-center">
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] bg-white transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <label
                    htmlFor="age"
                    className="block font-semibold mb-2 text-[#061839] text-lg"
                  >
                    My Age:
                  </label>
                  <div className="flex items-center">
                    <select
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] bg-white transition-all"
                    >
                      <option value="13 and under">13 and under</option>
                      <option value="14-17">14-17</option>
                      <option value="18+">18+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* I will volunteer for: */}
            <div className="mb-8">
              <label
                htmlFor="volunteerFor"
                className="block font-semibold mb-2 text-[#061839] text-lg"
              >
                I will volunteer for:
              </label>
              <select
                id="volunteerFor"
                name="volunteerFor"
                value={formData.volunteerFor}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1C75BC] bg-white transition-all"
              >
                <option value="choose one">Choose one</option>
                <option value="Non-profit">Non-profit</option>
                <option value="Charity">Charity</option>
                <option value="Community Center">Community Center</option>
                <option value="School">School</option>
                <option value="Environmental">Environmental</option>
                <option value="Youth Program">Youth Program</option>
              </select>
            </div>

            {/* I would like to volunteer in: (Locations) */}
            <div className="mb-8">
              <p className="font-semibold mb-4 text-[#061839] text-lg">
                I would like to volunteer in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                {LOCATION_OPTIONS.map((location) => (
                  <label
                    key={location}
                    className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="locations"
                      checked={formData.locations[location]}
                      onChange={() => handleLocationChange(location)}
                      className="form-checkbox h-5 w-5 text-[#1C75BC] rounded border-gray-300 focus:ring-[#1C75BC]"
                    />
                    <span className="text-[#061839]">{location}</span>
                  </label>
                ))}
              </div>
              <a
                href="#"
                onClick={handleSelectAll}
                className="text-[#1C75BC] text-sm mt-2 inline-block hover:underline font-medium"
              >
                Select All
              </a>
            </div>

            {/* Search Button */}
            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center gap-2"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-3 bg-[#1C75BC] text-white font-semibold rounded-lg hover:bg-[#165a9a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C75BC] shadow-sm transition-all flex items-center justify-center gap-2"
              >
                Search Opportunities
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllPositions;