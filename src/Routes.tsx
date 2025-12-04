import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsletterPreview from './pages/NewsletterPreview';
import BlogPage from './pages/BlogPage';
import VolunteerPositions from './pages/VolunteerPositions';
import VolunteerVictoriaPage from './pages/VolunteerVictoriaPage';
import AllPositions from './pages/AllPositions';
import YouthPositions from './pages/YouthPositions';
import InterestPositions from './pages/InterestPositions';
import OrganizationsPositions from './pages/OrganizationsPositions';
import SkillsPositions from './pages/SkillsPositions';
import SpecialEventsPositions from './pages/SpecialEventsPositions';
import DashboardPage from './pages/DashboardPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import AdminPanelPage from './pages/AdminPanelPage';
import SettingsPage from './pages/SettingsPage';
import ActivityPage from './pages/ActivityPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: '/newsletter',
    element: (
      <Layout>
        <NewsletterPreview />
      </Layout>
    )
  },
  {
    path: '/blog',
    element: (
      <Layout>
        <BlogPage />
      </Layout>
    )
  },
  // Public routes (no protection needed)
  {
    path: '/volunteer',
    element: (
      <Layout>
        <VolunteerPositions />
      </Layout>
    )
  },
  {
    path: '/volunteer-victoria',
    element: (
      <Layout>
        <VolunteerVictoriaPage />
      </Layout>
    )
  },
  // Volunteer category routes
  {
    path: '/volunteer-category/all',
    element: (
      <Layout>
        <AllPositions />
      </Layout>
    )
  },
  {
    path: '/volunteer-category/youth',
    element: (
      <Layout>
        <YouthPositions />
      </Layout>
    )
  },
  {
    path: '/volunteer-category/interests',
    element: (
      <Layout>
        <InterestPositions />
      </Layout>
    )
  },
  {
    path: '/volunteer-category/organizations',
    element: (
      <Layout>
        <OrganizationsPositions />
      </Layout>
    )
  },
  {
    path: '/volunteer-category/skills',
    element: (
      <Layout>
        <SkillsPositions />
      </Layout>
    )
  },
  {
    path: '/volunteer-category/special-events',
    element: (
      <Layout>
        <SpecialEventsPositions />
      </Layout>
    )
  },
  {
    path: '/all-positions',
    element: (
      <Layout>
        <AllPositions />
      </Layout>
    )
  },
  // Auth routes (redirect if already logged in)
  {
    path: '/login',
    element: (
      <Layout>
        <ProtectedRoute requireAuth={false} redirectPath="/dashboard">
          <LoginPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: '/signup',
    element: (
      <Layout>
        <ProtectedRoute requireAuth={false} redirectPath="/dashboard">
          <SignupPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: '/forgot-password',
    element: (
      <Layout>
        <ProtectedRoute requireAuth={false} redirectPath="/dashboard">
          <ForgotPasswordPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  // Private routes (require authentication)
  {
    path: '/dashboard',
    element: (
      <Layout>
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: '/profile',
    element: (
      <Layout>
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: '/settings',
    element: (
      <Layout>
        <ProtectedRoute>
          <SettingsPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: '/activity',
    element: (
      <Layout>
        <ProtectedRoute>
          <ActivityPage />
        </ProtectedRoute>
      </Layout>
    )
  },
  {
    path: '/admin',
    element: (
      <Layout>
        <ProtectedRoute>
          <AdminPanelPage />
        </ProtectedRoute>
      </Layout>
    )
  }
]);

export default router;