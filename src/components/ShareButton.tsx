import React from 'react';
import ShareDropdown from './ShareDropdown';

interface ShareButtonProps {
  url?: string;
  title?: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  url,
  title,
  className = ''
}) => {
  return (
    <div className={className}>
      <ShareDropdown url={url} title={title} />
    </div>
  );
};

export default ShareButton;