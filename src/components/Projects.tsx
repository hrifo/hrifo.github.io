'use client';

import { useLang } from '@/context/LangContext';

interface Project {
  nameKey: 'projects.tusii.name' | 'projects.fmtech.name' | 'projects.viaschile.name' | 'projects.jetsmart.name';
  tagKey: 'projects.tusii.tag' | 'projects.fmtech.tag' | 'projects.viaschile.tag' | 'projects.jetsmart.tag';
  descKey: 'projects.tusii.desc' | 'projects.fmtech.desc' | 'projects.viaschile.desc' | 'projects.jetsmart.desc';
  tech: string[];
  icon: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    nameKey: 'projects.tusii.name',
    tagKey: 'projects.tusii.tag',
    descKey: 'projects.tusii.desc',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Playwright', 'Fly.io'],
    icon: '🧾',
    color: 'from-indigo-600/20 to-violet-600/10',
  },
  {
    nameKey: 'projects.fmtech.name',
    tagKey: 'projects.fmtech.tag',
    descKey: 'projects.fmtech.desc',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Fly.io'],
    icon: '🏛️',
    color: 'from-emerald-600/20 to-teal-600/10',
  },
  {
    nameKey: 'projects.viaschile.name',
    tagKey: 'projects.viaschile.tag',
    descKey: 'projects.viaschile.desc',
    tech: ['Python', 'AWS', 'Docker', 'Kubernetes', 'Flask'],
    icon: '🛣️',
    color: 'from-amber-600/20 to-orange-600/10',
  },
  {
    nameKey: 'projects.jetsmart.name',
    tagKey: 'projects.jetsmart.tag',
    descKey: 'projects.jetsmart.desc',
    tech: ['Node.js', 'AWS Lambda', 'Redshift', 'Athena', 'CloudFormation'],
    icon: '✈️',
    color: 'from-sky-600/20 to-blue-600/10',
  },
];

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            — {t('projects.title')}
          </p>
          <div className="w-12 h-0.5 bg-indigo-500 rounded" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.nameKey}
              className={`relative rounded-2xl border border-zinc-800 bg-[#111111] p-6 card-hover overflow-hidden group`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-hidden="true">
                      {project.icon}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {t(project.nameKey)}
                      </h3>
                      <span className="text-xs text-indigo-400 font-medium">
                        {t(project.tagKey)}
                      </span>
                    </div>
                  </div>
                  {/* Arrow icon */}
                  <div className="w-8 h-8 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-600 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-all duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{t(project.descKey)}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono text-zinc-500 border border-zinc-800 bg-zinc-900/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
