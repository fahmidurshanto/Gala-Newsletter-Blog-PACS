import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ src, alt, className = '' }: BlogImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className={`rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up scroll-reveal ${className}`}
        onClick={() => setOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-80 sm:h-96 object-cover image-hover animate-image-reveal"
        />
      </div>
      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt }]}
        carousel={{
          finite: true,
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        toolbar={{
          buttons: [],
        }}
        controller={{
          touchAction: "none",
          disableSwipeNavigation: true,
        }}
      />
    </>
  );
};

export default BlogImage;