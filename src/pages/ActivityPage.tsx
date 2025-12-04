import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ActivityPage: React.FC = () => {
  const { currentUser } = useAuth();

  // Mock activity data
  const activities = [
    {
      id: 1,
      action: 'Logged in',
      description: 'Successful login from Chrome on Windows',
      time: '2 hours ago',
      ip: '192.168.1.100'
    },
    {
      id: 2,
      action: 'Updated profile',
      description: 'Changed display name to John Doe',
      time: '1 day ago',
      ip: '192.168.1.100'
    },
    {
      id: 3,
      action: 'Created post',
      description: 'Published "Community Event Update"',
      time: '3 days ago',
      ip: '192.168.1.100'
    },
    {
      id: 4,
      action: 'Changed password',
      description: 'Password updated successfully',
      time: '1 week ago',
      ip: '192.168.1.100'
    },
    {
      id: 5,
      action: 'Logged in',
      description: 'Successful login from Firefox on macOS',
      time: '2 weeks ago',
      ip: '192.168.1.101'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="mx-auto h-24 w-24 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Activity Log</h1>
            <p className="mt-2 text-gray-600">View your recent account activity</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
                Refresh
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {activities.map((activity) => (
                  <li key={activity.id} className="px-6 py-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{activity.action}</h3>
                          <span className="text-sm text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{activity.description}</p>
                        <p className="text-sm text-gray-500 mt-1">IP: {activity.ip}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Security Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800">Recognize Suspicious Activity</h3>
                  <p className="text-sm text-blue-700 mt-1">If you see unfamiliar activity, change your password immediately.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800">Enable Two-Factor Authentication</h3>
                  <p className="text-sm text-green-700 mt-1">Add an extra layer of security to your account.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Link 
                to="/dashboard" 
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300 mr-3"
              >
                Back to Dashboard
              </Link>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300">
                Report Suspicious Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;