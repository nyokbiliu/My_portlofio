import { Code, Database, Globe, Cpu, GitBranch, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 88 },
         { name: 'React', level: 85 }
        { name: 'TypeScript', level: 80 }
        
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git/GitHub', level: 88 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  const additionalSkills = [
    { icon: Cpu, text: 'Software Development' },
    { icon: GitBranch, text: 'Version Control' },
    { icon: Terminal, text: 'Command Line' },
    { icon: Code, text: 'Problem Solving' }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <category.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <skill.icon className="text-blue-600" size={24} />
                </div>
                <span className="text-slate-700 font-medium">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
