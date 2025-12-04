import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const SettingsPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false
  });
  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en'
  });
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNotificationChange = (setting: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePreferenceChange = (setting: string, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSuccessMessage('');
      setErrorMessage('');
      // In a real app, you would update the user's profile here
      // For now, we'll just show a success message
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to update profile');
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        setErrorMessage('');
        // In a real app, you would delete the user's account here
        // For now, we'll just show an alert
        alert('Account deletion functionality would be implemented here');
      } catch (error: any) {
        setErrorMessage(error.message || 'Failed to delete account');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {errorMessage && (
          <div className="rounded-md bg-red-50 p-4 mb-6 animate-fade-in-down">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  {errorMessage}
                </h3>
              </div>
            </div>
          </div>
        )}
        
        {successMessage && (
          <div className="rounded-md bg-green-50 p-4 mb-6 animate-fade-in-down">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  {successMessage}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="mx-auto h-24 w-24 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="mt-2 text-gray-600">Manage your account preferences and notifications</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="space-y-8">
              {/* Account Settings */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <p className="mt-1 text-gray-900">{currentUser?.email}</p>
                    </div>
                    <div>
                      <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">Display Name</label>
                      <input
                        type="text"
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your display name"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              </div>

              {/* Notification Preferences */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Notification Preferences</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive updates via email</p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('email')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          notifications.email ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-pressed={notifications.email}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notifications.email ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Push Notifications</h3>
                        <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('push')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          notifications.push ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-pressed={notifications.push}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notifications.push ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">SMS Notifications</h3>
                        <p className="text-sm text-gray-500">Receive text messages</p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('sms')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          notifications.sms ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-pressed={notifications.sms}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notifications.sms ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Preferences */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Application Preferences</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Theme</label>
                      <select
                        id="theme"
                        value={preferences.theme}
                        onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="auto">Auto</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                      <select
                        id="language"
                        value={preferences.language}
                        onChange={(e) => handlePreferenceChange('language', e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Danger Zone</h2>
                <div className="bg-red-50 rounded-xl p-6">
                  <button
                    onClick={handleDeleteAccount}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    Delete Account
                  </button>
                  <p className="mt-2 text-sm text-red-700">Permanently delete your account and all associated data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;