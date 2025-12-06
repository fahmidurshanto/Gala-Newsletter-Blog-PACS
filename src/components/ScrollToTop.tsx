import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 bg-[#1C75BC] text-white p-3 rounded-full shadow-lg hover:bg-[#165a9a] transition-all duration-300 z-50 border-2 border-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1C75BC] focus:ring-opacity-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            boxShadow: '0 10px 25px rgba(28, 117, 188, 0.3)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="font-bold" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;