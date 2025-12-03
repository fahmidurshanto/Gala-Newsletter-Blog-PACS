import React, { useState, useRef, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Link } from 'lucide-react';

interface ShareDropdownProps {
  url?: string;
  title?: string;
}

const ShareDropdown: React.FC<ShareDropdownProps> = ({ 
  url = window.location.href, 
  title = document.title 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToInstagram = () => {
    // Instagram doesn't support direct URL sharing, so we'll just copy the URL
    copyToClipboard();
  };

  const shareToLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
        style={{ color: '#061839' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in-down"
          style={{ zIndex: 100 }}
        >
          <button
            onClick={shareToFacebook}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Facebook size={18} className="mr-3" style={{ color: '#1877F2' }} />
            <span>Facebook</span>
          </button>
          
          <button
            onClick={shareToInstagram}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Instagram size={18} className="mr-3" style={{ color: '#E4405F' }} />
            <span>Instagram</span>
          </button>
          
          <button
            onClick={shareToLinkedIn}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Linkedin size={18} className="mr-3" style={{ color: '#0A66C2' }} />
            <span>LinkedIn</span>
          </button>
          
          <button
            onClick={copyToClipboard}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 border-t border-gray-100"
          >
            <Link size={18} className="mr-3" style={{ color: '#061839' }} />
            <span>{showCopied ? 'Copied!' : 'Copy URL'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareDropdown;