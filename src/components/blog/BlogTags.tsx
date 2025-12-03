interface BlogTagsProps {
  tags: string[];
  categories: string[];
}

const BlogTags = ({ tags, categories }: BlogTagsProps) => {
  return (
    <div className="border-t border-b py-8 my-8 scroll-reveal scroll-reveal-delay-2" style={{ borderColor: 'rgba(6, 24, 57, 0.1)' }}>
      <div className="mb-6">
        <h3 
          className="text-sm font-semibold mb-3 uppercase tracking-wide"
          style={{ color: '#061839', opacity: 0.7 }}
        >
          Categories
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category, index) => (
            <span key={index} className="flex items-center gap-2">
              <span
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                style={{ 
                  backgroundColor: 'rgba(28, 117, 188, 0.1)', 
                  color: '#1C75BC' 
                }}
              >
                {category}
              </span>
              {index < categories.length - 1 && (
                <span style={{ color: '#061839', opacity: 0.3 }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 
          className="text-sm font-semibold mb-3 uppercase tracking-wide"
          style={{ color: '#061839', opacity: 0.7 }}
        >
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-default"
              style={{ 
                backgroundColor: 'rgba(6, 24, 57, 0.05)', 
                color: '#061839' 
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTags;