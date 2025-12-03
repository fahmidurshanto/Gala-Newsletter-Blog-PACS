import NewsletterCard from '../components/NewsletterCard';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#061839' }}>
            Welcome to PACS
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#061839', opacity: 0.8 }}>
            Building a vibrant Performing Arts Centre for our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Preview Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#061839' }}>
                Latest Newsletter
              </h2>
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <NewsletterCard />
              </div>
            </div>
          </div>
          
          {/* Blog Preview Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" style={{ color: '#061839' }}>
                  Featured Blog
                </h2>
                <Link 
                  to="/blog" 
                  className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(28, 117, 188, 0.1)', 
                    color: '#1C75BC' 
                  }}
                >
                  Read Full Story
                </Link>
              </div>
              
              {/* Blog Preview Card */}
              <BlogCard />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#061839' }}>
            Explore More Content
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/newsletter" 
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: '#1C75BC', 
                color: 'white' 
              }}
            >
              View All Newsletters
            </Link>
            <Link 
              to="/blog" 
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
              style={{ 
                borderColor: '#1C75BC', 
                color: '#1C75BC',
                backgroundColor: 'transparent'
              }}
            >
              Browse All Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;