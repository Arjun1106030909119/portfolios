import { ExternalLink, Github, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'IoT Smart System',
    description: 'Internet of Things project implementing smart device control and monitoring with real-time data processing and automation capabilities.',
    tech: ['IoT', 'JavaScript', 'Hardware Integration'],
    github: 'https://github.com/Arjun1106030909119/iot',
    stars: 1,
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A modern, intuitive to-do list application with task organization, priority levels, and deadline tracking for enhanced productivity.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    github: 'https://github.com/Arjun1106030909119/To-Do-list',
    featured: true
  },
  {
    title: 'AI Chatbot Application',
    description: 'Intelligent chatbot solution with natural language processing capabilities, providing automated assistance and conversational AI features.',
    tech: ['CSS', 'JavaScript', 'AI Integration'],
    github: 'https://github.com/Arjun1106030909119/Chatbot-app',
    featured: true
  },
  {
    title: 'Commercial Website',
    description: 'Professional business website with modern design, responsive layout, and optimized user experience for commercial purposes.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/Arjun1106030909119/commerical_website',
    featured: true
  },
  {
    title: 'Disaster Rescue Web App',
    description: 'Emergency response web application designed to facilitate disaster rescue operations with real-time coordination and resource management.',
    tech: ['Web Development', 'Emergency Response', 'Real-time Systems'],
    featured: true
  },
  {
    title: 'Unity Game Development',
    description: 'Interactive gaming experience developed using Unity 3D engine, featuring engaging gameplay mechanics and immersive environments.',
    tech: ['Unity 3D', 'C#', 'Game Design', 'Physics'],
    featured: true
  },
  {
    title: '3D Furniture Models',
    description: 'High-quality 3D furniture modeling projects created in Blender, showcasing detailed texturing, lighting, and photorealistic rendering.',
    tech: ['Blender', '3D Modeling', 'Texturing', 'Rendering'],
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations.',
    tech: ['CSS', 'HTML', 'JavaScript', 'Responsive'],
    github: 'https://github.com/Arjun1106030909119/Profile_website',
    demo: 'https://arjun1106030909119.github.io/portfolio_web/'
  }
];

export default function Projects() {
  const { ref: containerRef, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="text-center mb-16">
          <div className={`inline-block px-4 py-2 bg-teal-500/20 rounded-full border border-teal-400/30 text-teal-700 text-sm font-medium mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            Portfolio Showcase
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            A collection of my recent work showcasing web development, game development, and 3D modeling projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500"></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">{project.stars}</span>
                    </div>
                  )}
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
          <a
            href="https://github.com/Arjun1106030909119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transform hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
