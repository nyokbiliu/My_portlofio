import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      year: '2021',
      company: 'John Garang Boys Primary School',
      position: 'Teacher',
      location: 'Malakal',
      description: 'Taught primary school students, developed curriculum materials, and fostered a positive learning environment.',
      type: 'Education'
    },
    {
      year: '2017',
      company: 'Plan International Organisation',
      position: 'Animator',
      location: 'Majji 3 Refugee Camp, Uganda',
      description: 'Coordinated youth activities, facilitated educational programs, and promoted community engagement among refugee populations.',
      type: 'NGO'
    },
    {
      year: '2017',
      company: 'Danish Refugee Council (DRC) Organisation',
      position: 'Hygiene Promoter',
      location: 'Majji 2 Refugee Camp, Uganda',
      description: 'Promoted health and hygiene practices, conducted awareness campaigns, and improved sanitation standards in refugee settlements.',
      type: 'NGO'
    }
  ];

  const courses = [
    {
      year: '2017',
      title: 'Life Skills and Youth to Youth Training',
      topics: [
        'Communication for Peace Strategy',
        'Advanced Leadership',
        'Reproductive Health',
        'Conflict Management',
        'Gender Based Violence (GBV)'
      ],
      award: 'Certificate of Completion'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education':
        return 'bg-green-100 text-green-700';
      case 'NGO':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Work Experience</h2>

        <div className="mb-16">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:ml-20">
                  <div className="absolute -left-12 top-6 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.year}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.position}</h3>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Training</h3>

          {courses.map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-blue-600" />
                <span className="text-lg font-semibold text-blue-600">{course.year}</span>
              </div>

              <h4 className="text-2xl font-bold text-slate-800 mb-6">{course.title}</h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {course.topics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-slate-700">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                {course.award}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
