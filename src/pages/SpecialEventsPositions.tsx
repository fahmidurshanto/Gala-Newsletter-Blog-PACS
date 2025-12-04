import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  MapPin 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- TypeScript Interface for Data Structure ---
interface EventPosition {
    id: number;
    position: string;
    program: string;
    organization: string;
    endDate: string; // ISO date string for sorting and display
    location?: string; // Optional location detail based on the data
}

// --- Mock Data based on the provided image ---
const mockPositions: EventPosition[] = [
    { id: 1, position: 'Environmental Volunteer', program: 'Meet New Friends & Remove Invasive Species', organization: 'Greater Victoria Green Team', endDate: '2025-12-06', location: 'Dickson Woods, North Saanich' },
    { id: 2, position: 'Celebration of Lights Volunteer', program: 'Celebration of Lights Esquimalt', organization: 'Victoria Rainbow Kitchen Society', endDate: '2025-12-07' },
    { id: 3, position: 'Environmental Volunteer', program: 'Meet Community & Remove Invasive Plants from UVic', organization: 'Greater Victoria Green Team', endDate: '2025-12-07', location: 'UVic - Dec 7' },
    { id: 4, position: 'Winter Dinner', program: '2025 Winter Dinner', organization: 'Quadra Village Community Centre', endDate: '2025-12-11' },
    { id: 5, position: 'Breakfast with Santa! Various Roles', program: '2025 Breakfast with Santa 12-13 Dec', organization: 'Victoria West Community Association', endDate: '2025-12-13' },
    { id: 6, position: 'Environmental Volunteer - Dickson Woods Dec 13', program: 'Remove Invasive Plants at Dickson Woods', organization: 'Greater Victoria Green Team', endDate: '2025-12-13', location: 'Dickson Woods Dec 13' },
    { id: 7, position: 'Ice Crew', program: "BC Men's and Women's and U20 Curling Championships", organization: 'Curl BC', endDate: '2026-01-04' },
    { id: 8, position: 'Volunteer Ambassadors', program: '17th Annual Gingerbread Showcase', organization: 'Habitat for Humanity Victoria', endDate: '2026-01-04' },
    { id: 9, position: '2026 Victoria Film Festival Driver Volunteers', program: '2026 Victoria Film Festival (Feb 6–15)', organization: 'Victoria Film Festival', endDate: '2026-02-17' },
];

/**
 * Main component to display a list of special event volunteer positions.
 */
const SpecialEventsPositions = () => {
    const [positions] = useState<EventPosition[]>(mockPositions);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPositions = positions.filter(p =>
        p.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.program.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Helper to format the date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {/* Header and Search */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 p-4 bg-white rounded-xl">
                        <h1 className="text-2xl font-extrabold text-[#061839] mb-4 md:mb-0">
                            Event Positions ({filteredPositions.length})
                        </h1>
                        <input
                            type="text"
                            placeholder="Search positions or organizations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-80 p-3 border-2 border-gray-200 rounded-lg focus:ring-[#1C75BC] focus:border-[#1C75BC] transition duration-150"
                        />
                    </div>

                    {/* Desktop Table Header (visible on medium screens and up) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-semibold uppercase text-gray-500 mb-2 py-3 border-b-2 border-[#1C75BC]">
                        <div className="col-span-3">
                            <Users className="inline-block w-4 h-4 mr-1 mb-0.5 text-[#1C75BC]" />
                            Position
                        </div>
                        <div className="col-span-4">Program / Event</div>
                        <div className="col-span-3">Organization</div>
                        <div className="col-span-2 text-right">
                            <Calendar className="inline-block w-4 h-4 mr-1 mb-0.5 text-[#1C75BC]" />
                            End Date
                        </div>
                    </div>

                    {/* Positions List */}
                    <div className="space-y-4">
                        {filteredPositions.length > 0 ? (
                            filteredPositions.map((p) => (
                                <div
                                    key={p.id}
                                    className="bg-white p-4 md:py-3 md:px-4 hover:shadow-lg transition duration-300 rounded-xl md:grid md:grid-cols-12 md:gap-4 items-center border border-gray-100"
                                >
                                    {/* Position Name (Mobile & Desktop) */}
                                    <div className="col-span-3 mb-2 md:mb-0 font-medium text-lg">
                                        {/* Simulate react-router Link */}
                                        <Link
                                            to={`/positions/${p.id}`}
                                            className="text-[#1C75BC] hover:text-[#061839] transition duration-150 font-bold"
                                        >
                                            {p.position}
                                        </Link>
                                    </div>

                                    {/* Program / Event (Mobile & Desktop) */}
                                    <div className="col-span-4 mb-2 md:mb-0 text-gray-700 text-sm md:text-base">
                                        <span className="md:hidden font-semibold text-gray-500 mr-2">Event:</span>
                                        {p.program}
                                        {p.location && (
                                            <div className="flex items-center text-xs text-gray-500 mt-1">
                                                <MapPin className="w-3 h-3 mr-1 text-[#1C75BC]" />
                                                {p.location}
                                            </div>
                                        )}
                                    </div>

                                    {/* Organization (Mobile & Desktop) */}
                                    <div className="col-span-3 mb-2 md:mb-0 text-sm md:text-base text-[#061839] font-semibold">
                                        <span className="md:hidden font-semibold text-gray-500 mr-2">Org:</span>
                                        {p.organization}
                                    </div>

                                    {/* End Date (Mobile & Desktop) */}
                                    <div className="col-span-2 text-sm md:text-base text-gray-600 font-mono text-left md:text-right">
                                        <span className="md:hidden font-semibold text-gray-500 mr-2">Ends:</span>
                                        {formatDate(p.endDate)}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center p-10 bg-white rounded-xl shadow-lg text-gray-600">
                                No events found matching your search. Try a different keyword!
                            </div>
                        )}
                    </div>

                    {/* Footer/Pagination Placeholder */}
                    <div className="mt-8 text-center text-gray-500 text-sm p-4 bg-white rounded-xl shadow-md">
                        Displaying {filteredPositions.length} of {positions.length} entries.
                        {/* Pagination component would go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialEventsPositions;