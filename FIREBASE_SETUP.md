# Firebase Authentication Setup

This document outlines the Firebase authentication setup for the  Blog project.

## Configuration

The Firebase configuration is stored in the `.env` file with the following variables:

```
VITE_FIREBASE_API_KEY=AIzaSyAWILADP0u1RtJ5PvpoWMZKy6PUYlkV5dI
VITE_FIREBASE_AUTH_DOMAIN=gala-newsletter-blog-pacs.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=gala-newsletter-blog-pacs
VITE_FIREBASE_STORAGE_BUCKET=gala-newsletter-blog-pacs.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=124872170536
VITE_FIREBASE_APP_ID=1:124872170536:web:d9985aafe138fe33d6691d
```

## Implementation Details

### Services
- Firebase service initialization is located in `src/services/firebase.ts`
- Exports the `auth` object for use throughout the application

### Context
- Authentication context is implemented in `src/contexts/AuthContext.tsx`
- Provides authentication state and functions throughout the app
- Wrapped around the entire application in `src/main.tsx`

### Components
- Login component: `src/components/Login.tsx`
- Signup component: `src/components/Signup.tsx`
- Forgot Password component: `src/components/ForgotPassword.tsx`
- Protected Route component: `src/components/ProtectedRoute.tsx`

### Pages
- Test Authentication page: `src/pages/TestAuthPage.tsx`
- Dashboard page (protected): `src/pages/DashboardPage.tsx`
- Forgot Password page: `src/pages/ForgotPasswordPage.tsx`

### Routes
Authentication routes are added to `src/Routes.tsx`:
- `/test-auth` - Authentication testing page
- `/dashboard` - Protected dashboard page
- `/forgot-password` - Password reset page

## Available Functions

The AuthContext provides the following functions:
- `login(email, password)` - Sign in with email and password
- `signup(email, password)` - Create a new account
- `logout()` - Sign out the current user
- `resetPassword(email)` - Send password reset email
- `confirmResetPassword(oobCode, newPassword)` - Confirm password reset
- `verifyEmail(oobCode)` - Verify email address
- `sendVerificationEmail()` - Send email verification
- `updateDisplayName(displayName)` - Update user's display name

## Usage

To use authentication in components:
```javascript
import { useAuth } from '../contexts/AuthContext';

const MyComponent = () => {
  const { currentUser, login, signup, logout } = useAuth();
  
  // Check if user is logged in
  if (currentUser) {
    // User is logged in
  }
  
  // Use authentication functions
  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      // Handle error
    }
  };
};
```

To protect routes:
```javascript
import ProtectedRoute from '../components/ProtectedRoute';

<Route path="/dashboard" element={
  <ProtectedRoute>
    <DashboardPage />
  </ProtectedRoute>
} />
```