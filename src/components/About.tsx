'use client';

import { useLang } from '@/context/LangContext';

const STATS = [
  { value: '10+', labelEs: 'Años de experiencia', labelEn: 'Years of experience' },
  { value: '20+', labelEs: 'Servicios migrados', labelEn: 'Services migrated' },
  { value: '2', labelEs: 'Startups como CTO', labelEn: 'Startups as CTO' },
  { value: '8', labelEs: 'Personas lideradas', labelEn: 'People led' },
];

export default function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            — {t('about.title')}
          </p>
          <div className="w-12 h-0.5 bg-indigo-500 rounded" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-zinc-300 text-lg leading-relaxed">{t('about.p1')}</p>
            <p className="text-zinc-400 leading-relaxed">{t('about.p2')}</p>
            <p className="text-zinc-400 leading-relaxed">{t('about.p3')}</p>

            {/* Contact quick links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:hectoralexanderrifo@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hectoralexanderrifo@gmail.com
              </a>
              <a
                href="https://github.com/hrifo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                github.com/hrifo
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="p-6 rounded-xl border border-zinc-800 bg-[#111111] hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">
                  {lang === 'es' ? stat.labelEs : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
