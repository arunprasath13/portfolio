import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", id }) => {
  return (
    <section id={id} className={`max-w-3xl mx-auto w-full scroll-m-24 ${className}`}>
      {title && (
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 md:mb-8">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};
