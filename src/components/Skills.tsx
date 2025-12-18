import { Code2, Gamepad2, Palette, Database, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Web Development',
    icon: Code2,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3/Tailwind', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'WordPress', level: 75 },
      { name: 'Responsive Design', level: 90 }
    ]
  },
  {
    title: 'Game Development',
    icon: Gamepad2,
    color: 'from-blue-500 to-teal-500',
    skills: [
      { name: 'Unity 3D', level: 85 },
      { name: 'Unreal Engine', level: 75 },
      { name: 'C#', level: 80 },
      { name: 'Game Design', level: 85 },
      { name: 'Physics Systems', level: 75 },
      { name: 'Cross-platform Dev', level: 80 }
    ]
  },
  {
    title: '3D Modeling & Design',
    icon: Palette,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Blender', level: 85 },
      { name: '3D Visualization', level: 90 },
      { name: 'Architecture Design', level: 80 },
      { name: 'Product Design', level: 85 },
      { name: 'Texturing', level: 80 },
      { name: 'Rendering', level: 85 }
    ]
  },
  {
    title: 'Additional Skills',
    icon: Wrench,
    color: 'from-teal-600 to-cyan-600',
    skills: [
      { name: 'SEO Optimization', level: 80 },
      { name: 'IoT Development', level: 75 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Project Management', level: 75 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-teal-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-teal-400">5+</div>
              <div className="text-slate-300">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-cyan-400">8+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-teal-300">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
