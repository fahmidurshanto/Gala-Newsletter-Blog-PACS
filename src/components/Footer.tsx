import React from 'react';
import { ChevronUp } from 'lucide-react';
import JDFPACSLogoPng from '../../public/JDFPACS-Logo.png';

const Footer = () => {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="mt-20 animate-fade-in relative"
      style={{ backgroundColor: '#061839', color: 'white', zIndex: 10 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <img 
          src={JDFPACSLogoPng} 
          alt="Logo" 
          className="h-16 w-auto mx-auto mb-4 transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center justify-center gap-2 mb-2">
          <h3 className="text-2xl font-bold"></h3>
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
        <p className="mb-6 text-base sm:text-lg" style={{ opacity: 0.7 }}>
          Building a vibrant Performing Arts Centre for our community
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6" style={{ opacity: 0.7 }}>
          <a 
            href="https://building4thearts.com/donate/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-all duration-300 hover:scale-105 transform inline-block py-2"
          >
            Support the Vision.
          </a>
          <a 
            href="https://building4thearts.com/join-support/sponsorship/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-all duration-300 hover:scale-105 transform inline-block py-2"
          >
            Become a Sponsor.
          </a>
        </div>
      </div>
      
      {/* Scroll to Top Button - Sticky to bottom right of screen */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#1C75BC] text-white p-3 rounded-full shadow-lg hover:bg-[#165a9a] transition-all duration-300 z-50 border-2 border-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1C75BC] focus:ring-opacity-50 opacity-85 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;