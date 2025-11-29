import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsletterPreview from './pages/NewsletterPreview';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsletterPreview />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
