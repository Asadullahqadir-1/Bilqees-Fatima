import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Skills', target: 'skills' },
    { name: 'Contact', target: 'contact' },
  ];

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    setIsOpen(false);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, 'about')}
              className="font-bold text-2xl text-white tracking-tight group font-serif"
            >
              Bilqees Fatima<span className="text-gray-500 group-hover:text-gray-300 transition-colors">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                onClick={(event) => scrollToSection(event, link.target)}
                className="text-gray-400 hover:text-white font-medium transition-colors duration-200 text-sm tracking-wide uppercase hover:underline hover:decoration-white hover:underline-offset-4 font-sans"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(event) => scrollToSection(event, 'contact')}
              className="bg-gray-100 text-black px-5 py-2 rounded-full font-medium hover:bg-white transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-2 font-sans"
            >
              <Mail size={16} /> Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl border-t border-white/5 animate-fade-in-down shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                onClick={(event) => scrollToSection(event, link.target)}
                className="block px-3 py-4 text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all border-l-2 border-transparent hover:border-white font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;