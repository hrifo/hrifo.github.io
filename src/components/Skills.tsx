'use client';

import { useLang } from '@/context/LangContext';

interface SkillGroup {
  labelKey: 'skills.backend' | 'skills.frontend' | 'skills.cloud' | 'skills.databases' | 'skills.architecture' | 'skills.bigdata';
  icon: string;
  skills: string[];
  accent: string;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    labelKey: 'skills.backend',
    icon: '⚙️',
    skills: ['C#', '.NET 6/7/8', 'Node.js', 'Python', 'Flask', 'FastAPI'],
    accent: 'border-indigo-500/30 hover:border-indigo-500/60',
  },
  {
    labelKey: 'skills.frontend',
    icon: '🖥️',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    accent: 'border-sky-500/30 hover:border-sky-500/60',
  },
  {
    labelKey: 'skills.cloud',
    icon: '☁️',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'CloudFormation'],
    accent: 'border-orange-500/30 hover:border-orange-500/60',
  },
  {
    labelKey: 'skills.databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'SQL Server', 'Oracle', 'MySQL', 'DynamoDB', 'Redis'],
    accent: 'border-emerald-500/30 hover:border-emerald-500/60',
  },
  {
    labelKey: 'skills.architecture',
    icon: '🏗️',
    skills: ['Microservices', 'Hexagonal', 'IaC', 'Serverless', 'REST APIs'],
    accent: 'border-violet-500/30 hover:border-violet-500/60',
  },
  {
    labelKey: 'skills.bigdata',
    icon: '📊',
    skills: ['Spark', 'Scala', 'Hadoop', 'Cloudera', 'Hive'],
    accent: 'border-amber-500/30 hover:border-amber-500/60',
  },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            — {t('skills.title')}
          </p>
          <div className="w-12 h-0.5 bg-indigo-500 rounded" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.labelKey}
              className={`p-5 rounded-xl border bg-[#111111] transition-all duration-300 ${group.accent}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl" role="img" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="font-semibold text-zinc-200 text-sm">{t(group.labelKey)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-600 transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
