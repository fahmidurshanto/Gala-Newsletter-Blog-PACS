import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminPanelPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('users');

  const handleManageUsers = () => {
    alert('User management functionality would be implemented here');
  };

  const handleManageContent = () => {
    alert('Content management functionality would be implemented here');
  };

  const handleConfigureSettings = () => {
    alert('System settings functionality would be implemented here');
  };

  const handleViewAnalytics = () => {
    alert('Analytics functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="mx-auto h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="mt-2 text-gray-600">System administration and management</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'dashboard'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                User Management
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'content'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Content Management
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                System Settings
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">System Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">1,248</p>
                      <p className="text-gray-600">Total Users</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">342</p>
                      <p className="text-gray-600">Active Today</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">98%</p>
                      <p className="text-gray-600">System Uptime</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                      <span className="text-gray-700">New user registered: john@example.com</span>
                      <span className="text-gray-500 text-sm ml-auto">2 minutes ago</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700">Blog post published: "Community Updates"</span>
                      <span className="text-gray-500 text-sm ml-auto">1 hour ago</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yellow-500 mr-3"></div>
                      <span className="text-gray-700">System maintenance completed</span>
                      <span className="text-gray-500 text-sm ml-auto">3 hours ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">User Management</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">User List</h3>
                    <button 
                      onClick={handleManageUsers}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Add New User
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <span className="text-blue-800 font-medium">JD</span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">John Doe</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Administrator</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                  <span className="text-green-800 font-medium">JS</span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Editor</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Content Management</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Blog Posts</h3>
                    <p className="text-blue-700 text-sm mb-4">Manage blog articles and publications</p>
                    <button 
                      onClick={handleManageContent}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Manage Blog Posts
                    </button>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Newsletters</h3>
                    <p className="text-green-700 text-sm mb-4">Manage newsletter templates and campaigns</p>
                    <button 
                      onClick={handleManageContent}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                      Manage Newsletters
                    </button>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Media Library</h3>
                    <p className="text-purple-700 text-sm mb-4">Upload and manage images and documents</p>
                    <button 
                      onClick={handleManageContent}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
                    >
                      Manage Media
                    </button>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Pages</h3>
                    <p className="text-yellow-700 text-sm mb-4">Manage static pages and content</p>
                    <button 
                      onClick={handleManageContent}
                      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-300"
                    >
                      Manage Pages
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">System Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">General Settings</h3>
                    <p className="text-blue-700 text-sm mb-4">Configure site name, description, and basic settings</p>
                    <button 
                      onClick={handleConfigureSettings}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Configure
                    </button>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Security</h3>
                    <p className="text-green-700 text-sm mb-4">Manage security policies and authentication</p>
                    <button 
                      onClick={handleConfigureSettings}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                      Configure
                    </button>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Email Templates</h3>
                    <p className="text-purple-700 text-sm mb-4">Customize email notifications and templates</p>
                    <button 
                      onClick={handleConfigureSettings}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300"
                    >
                      Configure
                    </button>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Analytics</h3>
                    <p className="text-yellow-700 text-sm mb-4">Connect and configure analytics services</p>
                    <button 
                      onClick={handleConfigureSettings}
                      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-300"
                    >
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;