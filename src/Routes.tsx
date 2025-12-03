import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsletterPreview from './pages/NewsletterPreview';
import BlogPage from './pages/BlogPage';
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
  }
]);

export default router;