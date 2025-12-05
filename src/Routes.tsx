import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsletterPreview from './pages/NewsletterPreview';
import BlogPage from './pages/BlogPage';
import VolunteerPositions from './pages/VolunteerPositions';
import AllPositions from './pages/AllPositions';
import YouthPositions from './pages/YouthPositions';
import InterestPositions from './pages/InterestPositions';
import OrganizationsPositions from './pages/OrganizationsPositions';
import SkillsPositions from './pages/SkillsPositions';
import SpecialEventsPositions from './pages/SpecialEventsPositions';
import DonatePage from './pages/DonatePage';
import SignupPage from './pages/SignupPage';
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
  {
    path: '/donate',
    element: (
      <Layout>
        <DonatePage />
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
  // Signup route (no authentication needed for non-profit)
  {
    path: '/signup',
    element: (
      <Layout>
        <SignupPage />
      </Layout>
    )
  }
]);

export default router;