import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
     {
        years: '2022 - 2026',
      institution: 'Mizan Tepi University',
      degree: 'Becholar in software Engineering (BSE)',
      description: 'Completed University education with focus on web devlopment and cybersecurity.',
      type: 'University'
     },


    {
      years: '2017 - 2020',
      institution: 'Juba Parent High School',
      degree: 'South Sudan Certificate of Secondary Education (CSE)',
      description: 'Completed secondary education with focus on science and mathematics subjects.',
      type: 'Secondary'
    },
    {
      years: '2008 - 2016',
      institution: 'Giada Boys Primary School',
      degree: 'Primary Leaving Certificate (PLE)',
      description: 'Completed primary education with strong academic performance.',
      type: 'Primary'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Education</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="text-blue-600" size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-600 mb-1">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{edu.years}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    edu.type === 'Secondary' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {edu.type} Education
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-3">{edu.institution}</h3>

              <div className="flex items-start gap-2 mb-4">
                <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-blue-600 font-semibold">{edu.degree}</p>
              </div>

              <p className="text-slate-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="text-blue-600" size={32} />
            <h3 className="text-2xl font-bold text-slate-800">Current Position</h3>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-bold text-blue-600 mb-4">Software Engineer</h4>
            <p className="text-xl text-slate-700 mb-4">Mizan Tepi University</p>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Currently working as a Software Engineer at Mizan Tepi University, contributing to
              educational technology initiatives and developing innovative solutions for academic
              and administrative systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
