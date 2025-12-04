import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean; // Default true
  redirectPath?: string; // Default "/"
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true,
  redirectPath = "/" 
}) => {
  const { currentUser, loading } = useAuth();

  // Show loading state while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If auth is required but no user is logged in, redirect
  if (requireAuth && !currentUser) {
    return <Navigate to={redirectPath} />;
  }

  // If auth is NOT required but user IS logged in, redirect to dashboard
  if (!requireAuth && currentUser) {
    return <Navigate to="/dashboard" />;
  }

  // If user is logged in or auth is not required, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;