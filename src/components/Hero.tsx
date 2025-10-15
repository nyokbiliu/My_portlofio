import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              Nyok Biliu Kuol Kiir
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              Mizan Tepi University
            </p>
            <div className="flex items-center gap-2 text-slate-600 mb-8">
              <MapPin size={18} />
              <span>Jebel, Juba, South Sudan</span>
            </div>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Passionate software engineer with expertise in Python, Java, HTML, and modern web technologies.
              Dedicated to creating innovative solutions and sharing creative ideas with team members.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="mailto:simonyok7@gmail.com"
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} className="inline mr-2" />
                Email Me
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600 rounded-full blur-2xl opacity-20"></div>
              <img
                src="/photo_2025-10-15_10-21-53.jpg"
                alt="Nyok Biliu Kuol Kiir"
                className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
