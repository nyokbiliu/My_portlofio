import { Heart, Users, Lightbulb, Target, BookOpen, Dumbbell } from 'lucide-react';

export default function About() {
  const competencies = [
    { icon: Users, text: 'Good communication and negotiation skills' },
    { icon: Users, text: 'Team work' },
    { icon: Lightbulb, text: 'Creativity' },
    { icon: Target, text: 'Computer literate' },
    { icon: Target, text: 'Flexible to move to places where needs arise' },
    { icon: Heart, text: 'Dedicated to achieve driven results' }
  ];

  const hobbies = [
    { icon: BookOpen, text: 'Reading novels, magazines and newspapers' },
    { icon: Dumbbell, text: 'Yoga fitness, gym' },
    { icon: Users, text: 'Attending drama and cultural activities' },
    { icon: Heart, text: 'Watching movies, football and listening to music' }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Personal Profile</h3>
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between">
                <span className="font-medium">Full Name:</span>
                <span>Nyok Biliu Kuol Kiir</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date of Birth:</span>
                <span>April 29, 1998</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Place of Birth:</span>
                <span>Atar Jonglei State, South Sudan</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Nationality:</span>
                <span>South Sudanese</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>nyokbiliu804@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>(+211) 922155437</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Language Proficiency</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">English</span>
                  <span className="text-sm text-slate-600">Excellent</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">Dinka</span>
                  <span className="text-sm text-slate-600">Excellent</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">Arabic</span>
                  <span className="text-sm text-slate-600">Good</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Competencies</h3>
            <div className="space-y-3">
              {competencies.map((comp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <comp.icon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{comp.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Hobbies & Interests</h3>
            <div className="space-y-3">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-start gap-3">
                  <hobby.icon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{hobby.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
