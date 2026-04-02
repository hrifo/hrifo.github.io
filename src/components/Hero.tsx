'use client';

import { useLang } from '@/context/LangContext';

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-sm mb-8 animate-fade-in">
          <svg className="w-3.5 h-3.5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {t('hero.location')}
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-slide-up">
          <span className="text-gradient">Héctor Rifo</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-6 animate-slide-up">
          {t('hero.title')}
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            {t('hero.cta.projects')}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3 rounded-lg border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            {t('hero.cta.contact')}
          </button>
        </div>

        {/* Tech badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-2 animate-fade-in">
          {['.NET', 'AWS', 'Python', 'Node.js', 'React', 'Docker', 'PostgreSQL', 'Kubernetes'].map(
            (tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono text-zinc-500 border border-zinc-800 bg-zinc-900/40"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
}
