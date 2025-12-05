import NewsletterCard from '../components/NewsletterCard';


const HomePage = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">

        
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Newsletter Preview Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#061839' }}>
                Latest Newsletter
              </h2>
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <NewsletterCard />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: '#061839' }}>
            Explore More Content
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://building4thearts.com/projects/news" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
              style={{ 
                backgroundColor: '#1C75BC', 
                color: 'white' 
              }}
            >
              Browse All Blogs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;