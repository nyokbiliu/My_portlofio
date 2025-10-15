import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Nyok Biliu Kuol Kiir</h3>
            <p className="text-slate-400">Software Engineer at Mizan Tepi University</p>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; {currentYear} Nyok Biliu Kuol Kiir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
