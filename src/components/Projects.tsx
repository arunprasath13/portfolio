import { ExternalLink } from 'lucide-react';
import { Section } from './Section';
import { portfolioData } from '../data/portfolio';

export const Projects = () => {
  return (
    <Section title="Projects" id="projects" className="px-6 relative z-10 w-full">
      <div className="space-y-6">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="clean-card p-6 sm:p-8 space-y-4 group">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2 transition-colors">
                {project.title}
                <a href={project.link} aria-label={`View ${project.title}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                  <ExternalLink size={18} />
                </a>
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded border border-zinc-200/50 dark:border-zinc-700/50">{tech}</span>
              ))}
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4 text-sm sm:text-base">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
