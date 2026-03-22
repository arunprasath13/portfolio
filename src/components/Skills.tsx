import { Section } from './Section';
import { portfolioData } from '../data/portfolio';

export const Skills = () => {
  const { languages, frontend, backend, tools, core } = portfolioData.skills;
  
  return (
    <Section title="Technical Skills" id="skills" className="px-6 relative z-10 w-full">
      <div className="clean-card p-8 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-base">
          <div>
            <span className="block font-medium text-zinc-900 dark:text-zinc-100 mb-3 text-lg">Languages</span>
            <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{languages}</span>
          </div>
          <div>
            <span className="block font-medium text-zinc-900 dark:text-zinc-100 mb-3 text-lg">Frontend</span>
            <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{frontend}</span>
          </div>
          <div>
            <span className="block font-medium text-zinc-900 dark:text-zinc-100 mb-3 text-lg">State Mgmt & Backend</span>
            <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{backend}</span>
          </div>
          <div>
            <span className="block font-medium text-zinc-900 dark:text-zinc-100 mb-3 text-lg">Developer Tools</span>
            <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{tools}</span>
          </div>
          <div className="sm:col-span-2 pt-2">
            <span className="block font-medium text-zinc-900 dark:text-zinc-100 mb-4 text-lg">Core Skills</span>
            <div className="flex flex-wrap gap-2">
              {core.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50 rounded text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
