import { Calendar, Clock } from 'lucide-react';
import JDFPACSLogoSvg from '../../../public/JDFPACS-Logo.svg';

const BlogMetaInfo = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 animate-fade-in-up" style={{ color: '#061839' }}>
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src={JDFPACSLogoSvg} 
          alt="Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain p-1 sm:p-2"
          style={{ backgroundColor: '#d9d4d4' }}
        />
        <div>
          <p className="font-semibold text-sm sm:text-base" style={{ color: '#061839' }}></p>
          <p className="text-xs sm:text-sm" style={{ color: '#061839', opacity: 0.7 }}>Non-Profit Organization</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} className="sm:size-18" />
        <span className="text-sm sm:text-base">November 11, 2025</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={16} className="sm:size-18" />
        <span className="text-sm sm:text-base">6 min read</span>
      </div>
    </div>
  );
};

export default BlogMetaInfo;