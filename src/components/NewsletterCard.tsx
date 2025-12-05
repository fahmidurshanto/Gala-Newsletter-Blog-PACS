import { ArrowRight, Mail, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NewsletterCard() {
  const navigate = useNavigate();

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

    const timer = setTimeout(() => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      scrollElements.forEach((el) => observer.observe(el));

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

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl animate-fade-in-up">
      {/* Header */}
      <div 
        className="px-8 py-6 animate-fade-in-down"
        style={{ 
          background: 'linear-gradient(to right, #1C75BC, rgba(28, 117, 188, 0.9))'
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img 
              src="../../public/JDFPACS-Logo.svg" 
              alt="Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="flex items-center gap-2">
              <Mail className="text-white" size={20} />
              <span className="text-white font-semibold text-lg"></span>
            </div>
          </div>
          <span 
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ 
              backgroundColor: 'rgba(244, 187, 58, 0.25)', 
              color: '#F4BB3A' 
            }}
          >
            Non-Profit Organization
          </span>
        </div>
        <p className="text-white text-sm text-white">
          Building a vibrant Performing Arts Centre for our community.
        </p>
      </div>

      <div className="p-8">
        {/* Category Badge */}
        <div 
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-fade-in scroll-reveal"
          style={{ 
            backgroundColor: 'rgba(28, 117, 188, 0.1)', 
            color: '#1C75BC' 
          }}
        >
          Community Events
        </div>

        {/* Title */}
        <h1 
          className="text-4xl font-bold mb-4 leading-tight transition-colors duration-300 scroll-reveal scroll-reveal-delay-1"
          style={{ color: '#061839' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1C75BC'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#061839'}
        >
          The Night West Shore Showed Its Heart: With Gratitude and Applause to Our 2025 Gala Supporters.
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm mb-6 scroll-reveal scroll-reveal-delay-2" style={{ color: '#061839', opacity: 0.7 }}>
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-8 h-8 rounded-full object-contain p-1.5"
              style={{ backgroundColor: '#d9d4d4' }}
            />
            <span></span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>November 11, 2025</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>6 min read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-md scroll-reveal scroll-reveal-delay-2">
          <img
            src="/Community.png"
            alt="West Shore Arts Gala 2025 at Olympic View Golf Club"
            className="w-full h-64 object-cover image-hover animate-image-reveal"
          />
        </div>

        {/* Opening Quote */}
        <p 
          className="text-lg leading-relaxed mb-6 font-serif italic border-l-4 pl-6 scroll-reveal scroll-reveal-delay-1"
          style={{ color: '#061839', borderColor: '#1C75BC' }}
        >
          It was more than an event. It was a defining moment—where purpose, creativity, and community gathered under one roof to celebrate something far bigger than a single evening.
        </p>

        {/* Preview Text */}
        <p 
          className="leading-relaxed mb-6 scroll-reveal scroll-reveal-delay-2"
          style={{ color: '#061839' }}
        >
          The 2025 West Shore Arts Gala will go down in memory not only as a fundraiser, but also as a shared declaration: the arts matter here, and the West Shore is ready to champion them like never before.
        </p>

        <p 
          className="leading-relaxed mb-8 scroll-reveal scroll-reveal-delay-2"
          style={{ color: '#061839', opacity: 0.8 }}
        >
          Hosted against the elegant backdrop of Olympic View Golf Club, the night carried an undeniable energy. From the warmth of the welcoming reception to the final standing applause, every end of the venue reflected connection, generosity, and belonging. Surrounded by scenic panoramic views, thoughtful hospitality, and a vibrant room of changemakers, the environment became the perfect stage for a movement in the making.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/blog')}
          className="group w-full text-white font-semibold px-4 py-4 rounded-lg
                   flex items-center justify-center gap-2 transition-all duration-300
                   hover:shadow-xl transform hover:-translate-y-1 hover:scale-101 scroll-reveal scroll-reveal-delay-3"
          style={{ backgroundColor: '#1C75BC' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#165a9a';
            const icon = e.currentTarget.querySelector('svg');
            if (icon) icon.style.transform = 'translate(4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1C75BC';
            const icon = e.currentTarget.querySelector('svg');
            if (icon) icon.style.transform = 'translateX(0)';
          }}
        >
          Read Full Blog
          <ArrowRight size={20} className="transition-transform duration-300" />
        </button>
      </div>

      {/* Highlights Section */}
      <div 
        className="px-8 py-6 border-t"
        style={{ 
          backgroundColor: 'rgba(28, 117, 188, 0.03)',
          borderColor: 'rgba(28, 117, 188, 0.1)'
        }}
      >
        <p 
          className="text-sm mb-3 font-semibold scroll-reveal scroll-reveal-delay-1"
          style={{ color: '#061839' }}
        >
          💡 In this blog, you'll discover:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2 stagger-item">
            <span 
              className="font-bold mt-0.5 transition-transform duration-300 hover:scale-125"
              style={{ color: '#1C75BC' }}
            >
              •
            </span>
            <span style={{ color: '#061839' }}>
              How the community came together to celebrate the arts
            </span>
          </li>
          <li className="flex items-start gap-2 stagger-item">
            <span 
              className="font-bold mt-0.5 transition-transform duration-300 hover:scale-125"
              style={{ color: '#1C75BC' }}
            >
              •
            </span>
            <span style={{ color: '#061839' }}>
              Our deepest gratitude to sponsors, donors, and supporters
            </span>
          </li>
          <li className="flex items-start gap-2 stagger-item">
            <span 
              className="font-bold mt-0.5 transition-transform duration-300 hover:scale-125"
              style={{ color: '#1C75BC' }}
            >
              •
            </span>
            <span style={{ color: '#061839' }}>
              What's next for the 
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewsletterCard;