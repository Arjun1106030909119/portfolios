import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Arjun.V
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-teal-600 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors hover:text-teal-600 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`transition-colors hover:text-teal-600 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-teal-600 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Contact
            </button>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Arjun1106030909119"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-teal-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/arjun-v-605b1a254"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-teal-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pallatharjun119@gmail.com"
                className={`transition-colors hover:text-teal-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
