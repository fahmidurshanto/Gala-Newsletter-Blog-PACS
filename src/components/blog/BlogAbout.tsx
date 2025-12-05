const BlogAbout = () => {
  return (
    <div 
      className="rounded-2xl p-8 my-12 border scroll-reveal scroll-reveal-delay-2 animate-scale-in"
      style={{ 
        background: 'linear-gradient(to bottom right, rgba(28, 117, 188, 0.05), rgba(6, 24, 57, 0.02))',
        borderColor: 'rgba(28, 117, 188, 0.2)'
      }}
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="h-20 w-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 
              className="text-xl font-bold"
              style={{ color: '#061839' }}
            >
              About 
            </h3>
            <span 
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: 'rgba(215, 86, 43, 0.1)', 
                color: '#D7562B' 
              }}
            >
              Non-Profit Organization
            </span>
          </div>
          <p 
            className="mb-4"
            style={{ color: '#061839', opacity: 0.8 }}
          >
            The Juan de Fuca Performing Arts Centre Society is a charitable not-for-profit (S-0064886) which was formed in 2016, and received charitable tax status in 2017 (Reg No 79421 9725 RR0001). A working board of directors currently runs the society. Our mission is to build a regional theatre and associated arts infrastructure in a community consisting of the rapidly growing British Columbia municipalities of Colwood and Langford, together with the Districts of Metchosin and Highlands, the Town of View Royal and the Juan de Fuca Electoral Area, representing a population of approximately 79,000 people.
          </p>
          <div className="flex gap-4 text-sm" style={{ color: '#061839', opacity: 0.7 }}>
            <a 
              href="https://building4thearts.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-300 hover:opacity-100"
              style={{ color: '#1C75BC' }}
            >
              building4thearts.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAbout;