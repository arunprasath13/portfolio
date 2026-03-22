import { portfolioData } from '../data/portfolio';

export const Footer = () => {
  return (
    <footer className="mt-16 pt-6 pb-8 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 w-full max-w-3xl mx-auto px-6">
      <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
        <a href={portfolioData.github} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
      </div>
    </footer>
  );
};
