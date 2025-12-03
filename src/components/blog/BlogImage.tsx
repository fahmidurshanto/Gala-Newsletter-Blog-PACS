interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ src, alt, className = '' }: BlogImageProps) => {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up scroll-reveal ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-96 object-cover image-hover animate-image-reveal"
      />
    </div>
  );
};

export default BlogImage;