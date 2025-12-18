import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTJoLTEyVjE2em0wIDBjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnMtMTItNS4zNzMtMTItMTIgNS4zNzMtMTIgMTItMTJoMTJ2MTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`animate-fadeIn transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`mb-6 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/30 text-teal-300 text-sm font-medium mb-4 hover:bg-teal-500/30 transition-colors duration-300">
              Welcome to my portfolio
            </div>
          </div>

          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '100ms' }}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Arjun V</span>
          </h1>

          <p className={`text-xl sm:text-2xl md:text-3xl text-teal-100 mb-4 font-light transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            Web Developer | Game Developer | 3D Artist
          </p>

          <p className={`text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            Passionate about crafting immersive experiences through 3D modeling and web development,
            blending digital creation with technical expertise to build functional, user-friendly, and visually appealing solutions.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">View My Work</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className={`flex items-center justify-center gap-6 transform transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <a
              href="https://github.com/Arjun1106030909119"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/arjun-v-605b1a254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:pallatharjun119@gmail.com"
              className="text-white hover:text-teal-400 transform hover:scale-110 hover:rotate-12 transition-all duration-300"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
