import { Heart } from 'lucide-react';
import ShareDropdown from '../ShareDropdown';

interface BlogActionsProps {
  isLiked: boolean;
  setIsLiked: (liked: boolean) => void;
}

const BlogActions = ({ isLiked, setIsLiked }: BlogActionsProps) => {
  return (
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
      <ShareDropdown />
    </div>
  );
};

export default BlogActions;