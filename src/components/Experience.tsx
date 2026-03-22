import { Section } from './Section';
import { portfolioData } from '../data/portfolio';

export const Experience = () => {
  return (
    <Section title="Experience" id="experience" className="px-6 relative z-10 w-full">
      <div className="space-y-6">
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="clean-card p-6 sm:p-8 space-y-4 group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-3">
              <h4 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
                {job.role}
              </h4>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2.5 py-1 rounded whitespace-nowrap">{job.period}</span>
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">{job.company} • {job.location}</div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4 text-sm sm:text-base">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
