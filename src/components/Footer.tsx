import JDFPACSLogoPng from '../../public/JDFPACS-Logo.png';

const Footer = () => {
  return (
    <footer 
      className="mt-20 animate-fade-in relative"
      style={{ backgroundColor: '#061839', color: 'white', zIndex: 10 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <img 
          src={JDFPACSLogoPng} 
          alt="Logo" 
          className="h-16 w-auto mx-auto mb-4 transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col items-center justify-center gap-2 mb-2">
          <h3 className="text-2xl font-bold"></h3>
          <span 
            className="text-xs font-semibold px-2 py-1 rounded-full"
            style={{ 
              backgroundColor: 'rgba(215, 86, 43, 0.2)', 
              color: '#F4BB3A' 
            }}
          >
            Non-Profit Organization
          </span>
        </div>
        <p className="mb-6 text-base sm:text-lg" style={{ opacity: 0.7 }}>
          Building a vibrant Performing Arts Centre for our community
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6" style={{ opacity: 0.7 }}>
          <a 
            href="https://building4thearts.com/donate/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-all duration-300 hover:scale-105 transform inline-block py-2"
          >
            Support the Vision.
          </a>
          <a 
            href="https://building4thearts.com/join-support/sponsorship/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-all duration-300 hover:scale-105 transform inline-block py-2"
          >
            Become a Sponsor.
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;