import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Building2,
  MapPin,
  ArrowRight,
} from "lucide-react";

// --- Types ---
interface Organization {
  id: string;
  name: string;
  category: string;
  location: string;
}

// --- Mock Data (Based on your screenshot + extras for pagination) ---
const MOCK_DATA: Organization[] = [
  {
    id: "1",
    name: "1Up Victoria Single Parent Resource Centre",
    category: "Community Services",
    location: "Victoria",
  },
  {
    id: "2",
    name: "36 Annual TC10K",
    category: "Events",
    location: "Victoria",
  },
  {
    id: "3",
    name: "9-10 Club Serving Soup to the Hungry",
    category: "Food Security",
    location: "Downtown",
  },
  {
    id: "4",
    name: "Abbeyfield House St. Peter's Society",
    category: "Housing",
    location: "Saanich",
  },
  {
    id: "5",
    name: "Action Committee of People with Disabilities",
    category: "Advocacy",
    location: "Victoria",
  },
  {
    id: "6",
    name: "Alix Goolden Performance Hall",
    category: "Arts & Culture",
    location: "Victoria",
  },
  {
    id: "7",
    name: "Alzheimer Society of B.C.",
    category: "Health",
    location: "Provincial",
  },
  {
    id: "8",
    name: "Amica Jubilee House",
    category: "Seniors",
    location: "Jubilee",
  },
  {
    id: "9",
    name: "Amy's Bunny Barn Society",
    category: "Animal Welfare",
    location: "Sooke",
  },
  {
    id: "10",
    name: "Art Gallery of Greater Victoria",
    category: "Arts & Culture",
    location: "Victoria",
  },
  {
    id: "11",
    name: "Artemis Place Society",
    category: "Education",
    location: "Victoria",
  },
  {
    id: "12",
    name: "artsREACH",
    category: "Arts & Culture",
    location: "Regional",
  },
  {
    id: "13",
    name: "Athletics & Student Life Camosun College",
    category: "Education",
    location: "Saanich",
  },
  {
    id: "14",
    name: "AVI Health & Community Services",
    category: "Health",
    location: "Victoria",
  },
  {
    id: "15",
    name: "Ballet Victoria",
    category: "Arts & Culture",
    location: "Victoria",
  },
  {
    id: "16",
    name: "BC Children's Hospital Foundation",
    category: "Health",
    location: "Provincial",
  },
  {
    id: "17",
    name: "BC SPCA Wild ARC",
    category: "Animal Welfare",
    location: "Metchosin",
  },
  {
    id: "18",
    name: "Beacon Community Services",
    category: "Community Services",
    location: "Sidney",
  },
  {
    id: "19",
    name: "BGC South Vancouver Island",
    category: "Youth",
    location: "Langford",
  },
  {
    id: "20",
    name: "Big Brothers Big Sisters of Victoria",
    category: "Youth",
    location: "Victoria",
  },
  {
    id: "21",
    name: "Bolivian Children Foundation",
    category: "International Aid",
    location: "Victoria",
  },
  {
    id: "22",
    name: "Broad View Thrift Store",
    category: "Retail",
    location: "Broadmead",
  },
  {
    id: "23",
    name: "Canadian Blood Services",
    category: "Health",
    location: "Saanich",
  },
  {
    id: "24",
    name: "Capital Bike",
    category: "Transportation",
    location: "Victoria",
  },
  {
    id: "25",
    name: "Civic Orchestra Of Victoria",
    category: "Arts & Culture",
    location: "Victoria",
  },
];

const CATEGORIES = [
  "All Categories",
  "Community Services",
  "Events",
  "Food Security",
  "Housing",
  "Advocacy",
  "Arts & Culture",
  "Health",
  "Seniors",
  "Animal Welfare",
  "Education",
  "Youth",
];

const ITEMS_PER_PAGE = 10;

const OrganizationsPositions = () => {
  // --- State ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // --- Filtering Logic ---
  const filteredData = useMemo(() => {
    return MOCK_DATA.filter((org) => {
      const matchesSearch = org.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        org.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredData]);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // --- Handlers ---
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header Section */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#061839] mb-2">
              Organization Directory
            </h1>
            <p className="text-[#061839] opacity-80">
              Find volunteer opportunities and memberships in your community.
            </p>
          </header>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Organization Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-[#1C75BC] focus:ring-2 focus:ring-blue-100 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1C75BC] sm:text-sm appearance-none cursor-pointer transition duration-150 ease-in-out"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {/* Custom Arrow for Select */}
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <button className="w-full md:w-auto px-6 py-2.5 bg-[#1C75BC] text-white font-medium rounded-lg hover:bg-[#165a9a] transition-colors duration-200 shadow-sm">
              Search
            </button>
          </div>

          {/* Results List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header (Hidden on Mobile) */}
            <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-3 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Organization Name</div>
              <div className="col-span-3">Category</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* List Items */}
            <div className="divide-y divide-gray-100">
              {currentData.length > 0 ? (
                currentData.map((org) => (
                  <div
                    key={org.id}
                    className="group md:grid md:grid-cols-12 md:gap-4 px-6 py-4 hover:bg-blue-50 transition-colors duration-150 items-center"
                  >
                    {/* Name */}
                    <div className="col-span-6 mb-2 md:mb-0">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3 text-[#1C75BC] group-hover:bg-blue-200 transition-colors">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <a
                          href="#"
                          className="text-lg font-medium text-[#1C75BC] hover:text-[#061839] hover:underline"
                        >
                          {org.name}
                        </a>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-span-3 mb-1 md:mb-0 flex items-center text-sm text-gray-600">
                      <span className="md:hidden font-semibold mr-2">
                        Category:
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {org.category}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="col-span-2 mb-1 md:mb-0 flex items-center text-sm text-gray-500">
                      <span className="md:hidden font-semibold mr-2">
                        Location:
                      </span>
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {org.location}
                    </div>

                    {/* Action */}
                    <div className="col-span-1 flex justify-end">
                      <button className="text-gray-400 group-hover:text-[#1C75BC] transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-gray-500">
                  No organizations found matching your criteria.
                </div>
              )}
            </div>
          </div>

          {/* Footer / Pagination */}
          {filteredData.length > 0 && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors flex items-center justify-center gap-2"
              >
                Back
              </button>

              <div className="text-sm text-gray-600">
                Displaying{" "}
                <span className="font-medium">
                  {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}
                </span>{" "}
                of <span className="font-medium">{filteredData.length}</span>{" "}
                organizations
              </div>

              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === page
                          ? "z-10 bg-[#1C75BC] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C75BC]"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationsPositions;