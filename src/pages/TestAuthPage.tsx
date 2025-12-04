import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Login from '../components/Login';
import Signup from '../components/Signup';

const TestAuthPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Firebase Authentication Test</h1>
          
          {currentUser ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-green-800">Logged In</h2>
                <p className="text-green-700">Welcome, {currentUser.email}!</p>
                <p className="text-green-700 text-sm mt-2">User ID: {currentUser.uid}</p>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-yellow-800">Not Logged In</h2>
                <p className="text-yellow-700">Please {showSignup ? 'sign up' : 'log in'} to test the authentication.</p>
              </div>
              
              <div className="mb-4">
                <button
                  onClick={() => setShowSignup(!showSignup)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  {showSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
                </button>
              </div>
              
              {showSignup ? <Signup /> : <Login />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestAuthPage;