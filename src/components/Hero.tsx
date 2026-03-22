import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  return (
    <section className="space-y-6 animate-fade-in-up mt-4 md:mt-8 w-full">
      <h2 className="text-3xl md:text-[2.75rem] font-medium tracking-tight leading-[1.15] text-zinc-900 dark:text-zinc-50">
        {portfolioData.summary.split('.')[0]}.
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg max-w-2xl">
        {portfolioData.summary.substring(portfolioData.summary.indexOf('.') + 1).trim()}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <span className="flex items-center gap-2"><MapPin size={18} className="text-zinc-400" /> {portfolioData.location}</span>
        <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors"><Mail size={18} className="text-zinc-400" /> {portfolioData.email}</a>
      </div>

      <div className="flex gap-4 pt-4">
        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"><Linkedin size={20} className="text-zinc-700 dark:text-zinc-300" /></a>
        <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"><Github size={20} className="text-zinc-700 dark:text-zinc-300" /></a>
      </div>
    </section>
  );
};

