import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">

      {/* Subtle cursor glow for a tiny bit of interaction */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
            }, transparent 80%)`
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Spacer for header */}
        <div className="h-16" />

        <main className="space-y-16 py-6 md:py-12 relative w-full max-w-3xl px-6">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
