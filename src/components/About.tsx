import { Code, Palette, Gamepad2, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { ref: aboutRef, isVisible } = useIntersectionObserver();
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={aboutRef} className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto transition-all duration-1000 ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <h3 className="text-3xl font-bold text-slate-900">
              Turning Ideas Into Digital Reality
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate developer and digital creator with expertise in web development,
              game development, and 3D modeling. Currently pursuing my MCA degree, I combine technical
              skills with creative vision to build immersive digital experiences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My approach focuses on delivering functional, user-friendly, and visually appealing
              solutions that exceed expectations. Whether it's crafting responsive websites,
              developing engaging games, or creating stunning 3D visualizations, I bring dedication
              and attention to detail to every project.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-teal-600">
                <Award className="w-5 h-5" />
                <span className="font-semibold">MCA Student</span>
              </div>
              <div className="flex items-center gap-2 text-teal-600">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Based in Salem, India</span>
              </div>
            </div>
          </div>

          <div ref={cardsRef} className="grid grid-cols-2 gap-6">
            <div className={`bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-all duration-500 transform ${
              cardsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`} style={{ transitionDelay: cardsVisible ? '0ms' : '0ms' }}>
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Web Development</h4>
              <p className="text-slate-600">
                Building responsive, SEO-optimized websites with modern technologies
              </p>
            </div>

            <div className={`bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl hover:shadow-lg transition-all duration-500 transform ${
              cardsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`} style={{ transitionDelay: cardsVisible ? '100ms' : '0ms' }}>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Game Development</h4>
              <p className="text-slate-600">
                Creating immersive gaming experiences for PC, console, and mobile
              </p>
            </div>

            <div className={`bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-500 transform ${
              cardsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`} style={{ transitionDelay: cardsVisible ? '200ms' : '0ms' }}>
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">3D Modeling</h4>
              <p className="text-slate-600">
                Designing architecture, products, and 3D visualizations with Blender
              </p>
            </div>

            <div className={`bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-500 transform ${
              cardsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`} style={{ transitionDelay: cardsVisible ? '300ms' : '0ms' }}>
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Creative Solutions</h4>
              <p className="text-slate-600">
                Tailored digital solutions that blend creativity with functionality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
