import { Moon, Sun } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
          {portfolioData.name} <span className="text-zinc-500 font-normal hidden sm:inline ml-2">{portfolioData.role}</span>
        </h1>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden md:flex gap-6 mr-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};
