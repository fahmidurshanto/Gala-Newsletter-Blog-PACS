import { useState, useEffect } from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import BlogMetaInfo from '../components/blog/BlogMetaInfo';
import BlogContent from '../components/blog/BlogContent';
import BlogActions from '../components/blog/BlogActions';
import BlogTags from '../components/blog/BlogTags';
import BlogAbout from '../components/blog/BlogAbout';
import BlogImage from '../components/blog/BlogImage';
import AnimatedBackground from '../components/blog/AnimatedBackground';
import JDFPACSLogoSvg from '../../public/JDFPACS-Logo.svg';
import CommunityImage from '../../public/Community.png';

function BlogPage() {
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
    <div className="relative">
      <AnimatedBackground />
      <BlogHeader isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} />
      
      <article className="w-full px-4 sm:px-6 py-12 relative" style={{ zIndex: 10 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div 
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full animate-fade-in"
            style={{ backgroundColor: 'rgba(28, 117, 188, 0.1)', color: '#1C75BC' }}
          >
            Community Events
          </div>
          <img 
            src={JDFPACSLogoSvg} 
            alt="Logo" 
            className="h-6 sm:h-8 w-auto transition-transform duration-300 hover:scale-105 transform"
          />
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up"
          style={{ color: '#061839' }}
        >
          The Night West Shore Showed Its Heart: With Gratitude and Applause to Our 2025 Gala Supporters.
        </h1>

        <BlogMetaInfo />

        <BlogImage src={CommunityImage} alt="Gala 2025 at Olympic View Golf Club" />

        <BlogContent />

        <BlogActions isLiked={isLiked} setIsLiked={setIsLiked} />

        <BlogTags tags={tags} categories={categories} />

        <BlogAbout />
      </article>
    </div>
  );
}

export default BlogPage;