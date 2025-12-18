import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              Arjun V
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Passionate developer and digital creator specializing in web development,
              game development, and 3D modeling. Let's build something amazing together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Arjun1106030909119"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transform hover:scale-110 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/arjun-v-605b1a254"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transform hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pallatharjun119@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transform hover:scale-110 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              <a href="mailto:pallatharjun119@gmail.com" className="hover:text-teal-400">
                pallatharjun119@gmail.com
              </a>
            </p>
            <p className="text-slate-400 text-sm">
              <a href="tel:+918667588862" className="hover:text-teal-400">
                +91 8667588862
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Arjun V © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
