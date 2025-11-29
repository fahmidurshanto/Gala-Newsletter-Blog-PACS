import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Heart, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BlogPage() {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Observe all scroll-reveal elements
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      scrollElements.forEach((el) => observer.observe(el));

      // Observe stagger items with delay
      const staggerItems = document.querySelectorAll('.stagger-item');
      staggerItems.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const delay = index * 0.1;
        htmlEl.style.transitionDelay = `${delay}s`;
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      const staggerItems = document.querySelectorAll('.stagger-item');
      scrollElements.forEach((el) => observer.unobserve(el));
      staggerItems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const tags = [
    "West Shore Arts",
    "Community Arts",
    "Performing Arts Centre",
    "Gala Sponsors",
    "Arts Fundraising"
  ];

  const categories = [
    "Arts & Culture",
    "Community Events",
    "Fundraising & Sponsorship"
  ];

  return (
    <div className="min-h-screen bg-white bg-pattern relative">
      {/* Subtle Background Elements */}
      <div className="bg-decorative">
        <div className="decorative-element decorative-element-1"></div>
        <div className="decorative-element decorative-element-2"></div>
        <div className="decorative-line decorative-line-left"></div>
        <div className="decorative-line decorative-line-right"></div>
      </div>
      
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 animate-fade-in-down relative" style={{ zIndex: 50 }}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/JDFPACS-Logo.svg" 
              alt="PACS Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 transition-all duration-300 group hover:gap-3"
              style={{ color: '#061839' }}
            >
              <ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-medium">Back to Newsletter</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isBookmarked ? 'hover:bg-gray-100' : 'hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: isBookmarked ? 'rgba(28, 117, 188, 0.1)' : 'transparent',
                color: isBookmarked ? '#1C75BC' : '#061839'
              }}
            >
              <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} className="transition-all duration-300" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              style={{ color: '#061839' }}
            >
              <Share2 size={20} className="transition-transform duration-300 hover:rotate-12" />
            </button>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12 relative" style={{ zIndex: 10 }}>
        <div className="flex items-center justify-between mb-6">
          <div 
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full animate-fade-in"
            style={{ backgroundColor: 'rgba(28, 117, 188, 0.1)', color: '#1C75BC' }}
          >
            Community Events
          </div>
          <img 
            src="/JDFPACS-Logo.svg" 
            alt="PACS Logo" 
            className="h-8 w-auto opacity-20 transition-opacity duration-300 hover:opacity-30"
          />
        </div>

        <h1 
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up"
          style={{ color: '#061839' }}
        >
          The Night West Shore Showed Its Heart: With Gratitude and Applause to Our 2025 Gala Supporters.
        </h1>

        <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-in-up" style={{ color: '#061839' }}>
          <div className="flex items-center gap-3">
            <img 
              src="/JDFPACS-Logo.svg" 
              alt="PACS Logo" 
              className="w-12 h-12 rounded-full object-contain p-2"
              style={{ backgroundColor: '#d9d4d4' }}
            />
            <div>
              <p className="font-semibold" style={{ color: '#061839' }}>PACS</p>
              <p className="text-sm" style={{ color: '#061839', opacity: 0.7 }}>Non-Profit Organization</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>November 11, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>6 min read</span>
          </div>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up scroll-reveal">
          <img
            src="/Community.png"
            alt="PACS Gala 2025 at Olympic View Golf Club"
            className="w-full h-96 object-cover image-hover animate-image-reveal"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p 
            className="text-xl leading-relaxed mb-8 font-serif italic border-l-4 pl-6 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839', borderColor: '#1C75BC' }}
          >
            It was more than an event. It was a defining moment—where purpose, creativity, and community gathered under one roof to celebrate something far bigger than a single evening.
          </p>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839' }}
          >
            The 2025 West Shore Arts Gala will go down in memory not only as a fundraiser, but also as a shared declaration: the arts matter here, and the West Shore is ready to champion them like never before.
          </p>

          <p 
            className="leading-relaxed mb-8 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            Hosted against the elegant backdrop of Olympic View Golf Club, the night carried an undeniable energy. From the warmth of the welcoming reception to the final standing applause, every end of the venue reflected connection, generosity, and belonging. Surrounded by scenic panoramic views, thoughtful hospitality, and a vibrant room of changemakers, the environment became the perfect stage for a movement in the making.
          </p>

          <h2 
            className="text-3xl font-bold mb-4 mt-12 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839' }}
          >
            A Stage Built by Community
          </h2>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            From breathtaking performances to stirring speeches, the evening shimmered with talent, heart, and advocacy. Every auction bid, every ticket purchased, and every conversation between attendees reflected the same truth:
          </p>

          <div 
            className="rounded-2xl p-6 mb-8 border scroll-reveal scroll-reveal-delay-2 animate-scale-in"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
              borderColor: 'rgba(28, 117, 188, 0.2)'
            }}
          >
            <p 
              className="text-xl font-serif italic mb-4"
            >
              "Investing in the arts is investing in people, identity, and future possibility."
            </p>
          </div>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            This gala wasn't just an event—it was proof of a community stepping forward together to build something permanent, meaningful, and shared: a future West Shore Performing Arts Centre.
          </p>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg scroll-reveal scroll-reveal-delay-3">
            <img
              src="/Heart.png"
              alt="Performance at the West Shore Arts Gala"
              className="w-full h-94 object-cover image-hover"
            />
          </div>

          <div 
            className="rounded-2xl p-6 mb-8 border scroll-reveal scroll-reveal-delay-2 animate-scale-in"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
              borderColor: 'rgba(28, 117, 188, 0.2)'
            }}
          >
            <p className="text-xl font-serif italic mb-4">
              "A community that supports the arts, supports its own future."
            </p>
          </div>

          <h2 
            className="text-3xl font-bold mb-4 mt-12 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839' }}
          >
            Our Deepest Gratitude
          </h2>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            To our sponsors, donors, performers, volunteers, organizers, and guests:
          </p>

          <div 
            className="rounded-2xl p-8 mb-8 border scroll-reveal scroll-reveal-delay-2 animate-scale-in animate-thank-you"
            style={{ 
              borderColor: 'rgba(215, 86, 43, 0.3)',
              boxShadow: '0 8px 32px rgba(215, 86, 43, 0.1)'
            }}
          >
            <p 
              className="text-xl font-bold mb-4"
              style={{ color: '#061839' }}
            >
              Thank you for believing. Thank you for showing up. Thank you for making a difference.
            </p>
          </div>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839' }}
          >
            You are the reason:
          </p>

          <ul className="space-y-1 mb-8">
            <li className="flex items-start gap-3 stagger-item">
              <span 
                className="text-2xl font-bold mt-1 transition-transform duration-300 hover:scale-125"
                style={{ color: '#1C75BC' }}
              >
                •
              </span>
              <p 
                className="leading-relaxed text-lg"
                style={{ color: '#061839' }}
              >
                Voices will have stages
              </p>
            </li>
            <li className="flex items-start gap-3 stagger-item">
              <span 
                className="text-2xl font-bold mt-1 transition-transform duration-300 hover:scale-125"
                style={{ color: '#1C75BC' }}
              >
                •
              </span>
              <p 
                className="leading-relaxed text-lg"
                style={{ color: '#061839' }}
              >
                Youth will have creative outlets
              </p>
            </li>
            <li className="flex items-start gap-3 stagger-item">
              <span 
                className="text-2xl font-bold mt-1 transition-transform duration-300 hover:scale-125"
                style={{ color: '#1C75BC' }}
              >
                •
              </span>
              <p 
                className="leading-relaxed text-lg"
                style={{ color: '#061839' }}
              >
                Culture will have a home in West Shore
              </p>
            </li>
          </ul>

          

          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg scroll-reveal scroll-reveal-delay-4">
            <img
              src="/Sponsor.png"
              alt="Community gathering at the PACS Gala"
              className="w-full h-94 object-cover image-hover"
            />
          </div>
          <p 
            className="text-center leading-relaxed mb-8 scroll-reveal scroll-reveal-delay-3"
            style={{ color: '#061839' }}
          >
            Your contribution is transforming the local creative landscape and lighting the path for generations to come.
          </p>
          

          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg scroll-reveal scroll-reveal-delay-3">
            <img
              src="/11.png"
              alt="Elegant venue at Olympic View Golf Club"
              className="w-full h-94 object-cover image-hover"
            />
          </div>

          <h2 
            className="text-3xl font-bold mb-4 mt-12 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839' }}
          >
            What's Next?
          </h2>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            This gala was not the finale—it was the spark.
          </p>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            The momentum continues. The mission grows. The community leads.
          </p>

          <p 
            className="leading-relaxed mb-8 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            Stay connected. Stay inspired. Stay involved.
          </p>

          <div>
            <p className="text-2xl font-bold mb-2">
              Because the arts in West Shore?
            </p>
            <p className="text-xl">
              They're just getting started.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 my-12 scroll-reveal scroll-reveal-delay-2">
            <a
              href="https://building4thearts.com/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              style={{ backgroundColor: '#1C75BC', color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#165a9a';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'translate(2px, -2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1C75BC';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'translate(0, 0)';
              }}
            >
              Support the Vision
              <ExternalLink size={20} className="transition-transform duration-300" />
            </a>
            <a
              href="https://building4thearts.com/join-support/sponsorship/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 border-2"
              style={{ 
                borderColor: '#D7562B', 
                color: '#D7562B',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D7562B';
                e.currentTarget.style.color = 'white';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'translate(2px, -2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#D7562B';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'translate(0, 0)';
              }}
            >
              Become a Sponsor
              <ExternalLink size={20} className="transition-transform duration-300" />
            </a>
          </div>
          <h2 
            className="text-3xl font-bold mb-4 mt-12 scroll-reveal scroll-reveal-delay-1"
            style={{ color: '#061839' }}
          >
            Reliving the Impact
          </h2>

          <p 
            className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
            style={{ color: '#061839' }}
          >
            If you'd like to explore the importance of arts investment, these reads offer powerful insight:
          </p>

          <div 
            className="rounded-2xl p-6 mb-8 border scroll-reveal scroll-reveal-delay-2 animate-scale-in"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
              borderColor: 'rgba(28, 117, 188, 0.2)'
            }}
          >
            <ul className="space-y-3">
              <li className="stagger-item">
                <a 
                  href="https://canadacouncil.ca/research/arts-impact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline flex items-center gap-2 transition-all duration-300 hover:gap-3 group"
                  style={{ color: '#1C75BC' }}
                >
                  Canada Council for the Arts - Arts Impact Research
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
              <li className="stagger-item">
                <a 
                  href="https://www.canada.ca/en/canadian-heritage/news/2025/11/backgrounder-budget-2025-protecting-canadian-culture-values-and-identity.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline flex items-center gap-2 transition-all duration-300 hover:gap-3 group"
                  style={{ color: '#1C75BC' }}
                >
                  Canadian Heritage - Budget 2025: Protecting Canadian Culture
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
            </ul>
          </div>
          {/* Tags and Categories */}
          <div className="border-t border-b py-8 my-8 scroll-reveal scroll-reveal-delay-2" style={{ borderColor: 'rgba(6, 24, 57, 0.1)' }}>
            <div className="mb-6">
              <h3 
                className="text-sm font-semibold mb-3 uppercase tracking-wide"
                style={{ color: '#061839', opacity: 0.7 }}
              >
                Categories
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((category, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                      style={{ 
                        backgroundColor: 'rgba(28, 117, 188, 0.1)', 
                        color: '#1C75BC' 
                      }}
                    >
                      {category}
                    </span>
                    {index < categories.length - 1 && (
                      <span style={{ color: '#061839', opacity: 0.3 }}>|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 
                className="text-sm font-semibold mb-3 uppercase tracking-wide"
                style={{ color: '#061839', opacity: 0.7 }}
              >
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-default"
                    style={{ 
                      backgroundColor: 'rgba(6, 24, 57, 0.05)', 
                      color: '#061839' 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-b py-6 my-12 scroll-reveal scroll-reveal-delay-1" style={{ borderColor: 'rgba(6, 24, 57, 0.1)' }}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isLiked ? '' : 'hover:bg-gray-100'
              }`}
              style={{ 
                backgroundColor: isLiked ? 'rgba(215, 86, 43, 0.1)' : 'transparent',
                color: isLiked ? '#D7562B' : '#061839'
              }}
            >
              <Heart 
                size={20} 
                fill={isLiked ? 'currentColor' : 'none'} 
                className={`transition-all duration-300 ${isLiked ? 'animate-pulse' : ''}`}
              />
              <span className="font-medium transition-all duration-300">{isLiked ? '243' : '242'}</span>
            </button>
            <span style={{ color: '#061839', opacity: 0.4 }}>•</span>
            <span style={{ color: '#061839' }}>1.2k views</span>
          </div>
          <button 
            className="flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: '#1C75BC', color: 'white' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#165a9a';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.transform = 'rotate(12deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1C75BC';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.transform = 'rotate(0deg)';
            }}
          >
            <Share2 size={18} className="transition-transform duration-300" />
            <span>Share</span>
          </button>
        </div>

        <div 
          className="rounded-2xl p-8 my-12 border scroll-reveal scroll-reveal-delay-2 animate-scale-in"
          style={{ 
            background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
            borderColor: 'rgba(28, 117, 188, 0.2)'
          }}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <img 
                src="/JDFPACS-Logo.svg" 
                alt="PACS Logo" 
                className="h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 
                  className="text-xl font-bold"
                  style={{ color: '#061839' }}
                >
                  About PACS
                </h3>
                <span 
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: 'rgba(215, 86, 43, 0.1)', 
                    color: '#D7562B' 
                  }}
                >
                  Non-Profit Organization
                </span>
              </div>
              <p 
                className="mb-4"
                style={{ color: '#061839', opacity: 0.8 }}
              >
                The Juan de Fuca Performing Arts Centre Society is a charitable not-for-profit (S-0064886) which was formed in 2016, and received charitable tax status in 2017 (Reg No 79421 9725 RR0001). A working board of directors currently runs the society. Our mission is to build a regional theatre and associated arts infrastructure in a community consisting of the rapidly growing British Columbia municipalities of Colwood and Langford, together with the Districts of Metchosin and Highlands, the Town of View Royal and the Juan de Fuca Electoral Area, representing a population of approximately 79,000 people.
              </p>
              <div className="flex gap-4 text-sm" style={{ color: '#061839', opacity: 0.7 }}>
                <a 
                  href="https://building4thearts.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-300 hover:opacity-100"
                  style={{ color: '#1C75BC' }}
                >
                  building4thearts.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer 
        className="mt-20 animate-fade-in relative"
        style={{ backgroundColor: '#061839', color: 'white', zIndex: 10 }}
      >
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <img 
            src="/JDFPACS-Logo.svg" 
            alt="PACS Logo" 
            className="h-16 w-auto mx-auto mb-4 transition-transform duration-300 hover:scale-105"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-2xl font-bold">PACS</h3>
            <span 
              className="text-xs font-semibold px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: 'rgba(215, 86, 43, 0.2)', 
                color: '#F4BB3A' 
              }}
            >
              Non-Profit Organization
            </span>
          </div>
          <p className="mb-6" style={{ opacity: 0.7 }}>Building a vibrant Performing Arts Centre for our community</p>
          <div className="flex justify-center gap-6 mb-6" style={{ opacity: 0.7 }}>
            <a 
              href="https://building4thearts.com/donate/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-all duration-300 hover:scale-105 transform inline-block"
            >
              Support the Vision.
            </a>
            <a 
              href="https://building4thearts.com/join-support/sponsorship/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-all duration-300 hover:scale-105 transform inline-block"
            >
              Become a Sponsor.
            </a>
          </div>
          <p className="text-sm" style={{ opacity: 0.5 }}>
            © 2025 PACS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default BlogPage;
