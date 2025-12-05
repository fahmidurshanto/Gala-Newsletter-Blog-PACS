import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function BlogCard() {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div 
        className="px-6 py-4"
        style={{ 
          background: 'linear-gradient(to right, #1C75BC, rgba(28, 117, 188, 0.9))'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="h-8 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold"></span>
            </div>
          </div>
          <span 
            className="text-xs font-semibold px-2 py-1 rounded-full"
            style={{ 
              backgroundColor: 'rgba(244, 187, 58, 0.25)', 
              color: '#F4BB3A' 
            }}
          >
            Non-Profit Organization
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div 
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
          style={{ 
            backgroundColor: 'rgba(28, 117, 188, 0.1)', 
            color: '#1C75BC' 
          }}
        >
          Community Events
        </div>
        
        <h3 className="text-2xl font-bold mb-4 leading-tight" style={{ color: '#061839' }}>
          The Night West Shore Showed Its Heart: With Gratitude and Applause to Our 2025 Gala Supporters.
        </h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm mb-6" style={{ color: '#061839', opacity: 0.7 }}>
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-6 h-6 rounded-full object-contain p-1"
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
        
        <div className="mb-6 rounded-lg overflow-hidden shadow-md">
          <img
            src="/Community.png"
            alt="West Shore Arts Gala 2025 at Olympic View Golf Club"
            className="w-full h-48 object-cover image-hover"
          />
        </div>
        
        <p className="text-lg leading-relaxed mb-6 font-serif italic border-l-4 pl-4" style={{ color: '#061839', borderColor: '#1C75BC' }}>
          It was more than an event. It was a defining moment—where purpose, creativity, and community gathered under one roof to celebrate something far bigger than a single evening.
        </p>
        
        <p className="leading-relaxed mb-6" style={{ color: '#061839' }}>
          The 2025 West Shore Arts Gala will go down in memory not only as a fundraiser, but also as a shared declaration: the arts matter here, and the West Shore is ready to champion them like never before.
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(6, 24, 57, 0.1)' }}>
          <div className="flex items-center gap-2">
            <Link 
              to="/blog" 
              className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(28, 117, 188, 0.1)', 
                color: '#1C75BC' 
              }}
            >
              Continue Reading
            </Link>
          </div>
          <div className="text-sm" style={{ color: '#061839', opacity: 0.6 }}>
            Published November 11, 2025
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;