import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  applyActionCode,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  AuthError
} from 'firebase/auth';
import { auth } from '../services/firebase.ts';

// Define the shape of our auth context
interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  confirmResetPassword: (oobCode: string, newPassword: string) => Promise<void>;
  verifyEmail: (oobCode: string) => Promise<void>;
  updateDisplayName: (displayName: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  signInWithGoogle: () => Promise<any>;
  loading: boolean;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
  resetPassword: async () => {},
  confirmResetPassword: async () => {},
  verifyEmail: async () => {},
  updateDisplayName: async () => {},
  sendVerificationEmail: async () => {},
  signInWithGoogle: async () => {},
  loading: true,
});

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component props
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Login function
  async function login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Login error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Signup function
  async function signup(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Signup error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Logout function
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      const authError = error as AuthError;
      console.error('Logout error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Password reset function
  async function resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const authError = error as AuthError;
      console.error('Password reset error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Confirm password reset function
  async function confirmResetPassword(oobCode: string, newPassword: string) {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
    } catch (error) {
      const authError = error as AuthError;
      console.error('Confirm password reset error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Verify email function
  async function verifyEmail(oobCode: string) {
    try {
      await applyActionCode(auth, oobCode);
    } catch (error) {
      const authError = error as AuthError;
      console.error('Email verification error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Send email verification
  async function sendVerificationEmail() {
    if (currentUser) {
      try {
        await sendEmailVerification(currentUser);
      } catch (error) {
        const authError = error as AuthError;
        console.error('Send verification email error:', authError.code, authError.message);
        throw new Error(getFriendlyErrorMessage(authError.code));
      }
    }
  }

  // Update display name function
  async function updateDisplayName(displayName: string) {
    if (currentUser) {
      try {
        await updateProfile(currentUser, { displayName });
      } catch (error) {
        const authError = error as AuthError;
        console.error('Update profile error:', authError.code, authError.message);
        throw new Error(getFriendlyErrorMessage(authError.code));
      }
    }
  }

  // Google sign in function
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      const authError = error as AuthError;
      console.error('Google sign in error:', authError.code, authError.message);
      throw new Error(getFriendlyErrorMessage(authError.code));
    }
  }

  // Helper function to convert Firebase error codes to user-friendly messages
  function getFriendlyErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No user found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email address.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/user-disabled':
        return 'This account has been disabled.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      case 'auth/popup-closed-by-user':
        return 'Sign in popup was closed. Please try again.';
      case 'auth/cancelled-popup-request':
        return 'Sign in was cancelled. Please try again.';
      case 'auth/popup-blocked':
        return 'Sign in popup was blocked. Please allow popups and try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Context value
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    confirmResetPassword,
    verifyEmail,
    updateDisplayName,
    sendVerificationEmail,
    signInWithGoogle,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};