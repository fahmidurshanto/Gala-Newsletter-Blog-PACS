import { Bookmark } from 'lucide-react';
import ShareDropdown from '../ShareDropdown';

interface BlogHeaderProps {
  isBookmarked: boolean;
  setIsBookmarked: (bookmarked: boolean) => void;
}

const BlogHeader = ({ isBookmarked, setIsBookmarked }: BlogHeaderProps) => {
  return (
    <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 animate-fade-in-down relative" style={{ zIndex: 50 }}>
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-end">
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
          <ShareDropdown />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;