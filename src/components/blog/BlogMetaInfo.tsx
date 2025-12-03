import { Calendar, Clock } from 'lucide-react';

const BlogMetaInfo = () => {
  return (
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
  );
};

export default BlogMetaInfo;