import { portfolioData } from '../data/portfolio';

export const Education = () => {
  return (
    <div className="clean-card mx-6 sm:mx-auto p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl w-auto relative z-10 mb-10 section">
      <div className="space-y-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Education</h3>
        <div>
          <h4 className="font-medium text-xl text-zinc-900 dark:text-zinc-100 leading-snug">{portfolioData.education.degree}</h4>
          <div className="text-zinc-600 dark:text-zinc-400 mt-2 font-medium">
            {portfolioData.education.institution} <br />
            <span className="text-sm font-normal text-zinc-500">{portfolioData.education.period} • {portfolioData.education.location}</span>
          </div>
          <div className="inline-block mt-4 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded text-sm font-medium border border-zinc-200/50 dark:border-zinc-700/50">
            CGPA: {portfolioData.education.cgpa}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Achievements</h3>
        <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {portfolioData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
