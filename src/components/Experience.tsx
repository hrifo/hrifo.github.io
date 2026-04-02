'use client';

import { useLang } from '@/context/LangContext';

interface ExperienceItem {
  roleKeyEs: string;
  roleKeyEn: string;
  companyKey: 'experience.corfo.company' | 'experience.viaschile.company' | 'experience.jetsmart.company' | 'experience.sii.company' | 'experience.duoc.company' | 'experience.igm.company';
  descKeyEs: string;
  descKeyEn: string;
  period: string;
  presentKey?: true;
  tags: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    roleKeyEs: 'Líder Técnico',
    roleKeyEn: 'Technical Lead',
    companyKey: 'experience.corfo.company',
    descKeyEs: 'Diseño y desarrollo de servicios .NET 8 con CI/CD en Azure DevOps. Liderazgo de equipo de 8 personas. Reemplazo de servicios OSB legacy por APIs nativas. Arquitectura contenerizada con Docker.',
    descKeyEn: '.NET 8 service design with Azure DevOps CI/CD. Leadership of an 8-person team. Replacement of legacy OSB services with native APIs. Containerized architecture with Docker.',
    period: '2024',
    presentKey: true,
    tags: ['.NET 8', 'Azure DevOps', 'Docker', 'APIs'],
  },
  {
    roleKeyEs: 'Arquitecto de Software',
    roleKeyEn: 'Software Architect',
    companyKey: 'experience.viaschile.company',
    descKeyEs: 'Modernización de sistemas legacy hacia Python 3.9, AWS y microservicios. Migración completa de Oracle a MySQL afectando 20+ servicios.',
    descKeyEn: 'Modernization of legacy systems to Python 3.9, AWS, and microservices. Full Oracle-to-MySQL migration affecting 20+ services.',
    period: '2022 – 2024',
    tags: ['Python', 'AWS', 'Kubernetes', 'IaC'],
  },
  {
    roleKeyEs: 'FullStack Senior',
    roleKeyEn: 'Senior FullStack',
    companyKey: 'experience.jetsmart.company',
    descKeyEs: 'Microservicios cloud-native con Node.js y AWS Lambda. Infraestructura como código con CloudFormation.',
    descKeyEn: 'Cloud-native microservices with Node.js and AWS Lambda. Infrastructure as code with CloudFormation.',
    period: '2021 – 2022',
    tags: ['Node.js', 'AWS Lambda', 'CloudFormation'],
  },
  {
    roleKeyEs: 'Arquitecto de Software',
    roleKeyEn: 'Software Architect',
    companyKey: 'experience.sii.company',
    descKeyEs: 'Diseño e implementación de arquitecturas orientadas a servicios en el Servicio de Impuestos Internos de Chile.',
    descKeyEn: 'Design and implementation of service-oriented architectures at the Chilean Internal Revenue Service.',
    period: '2020 – 2021',
    tags: ['Microservices', 'SOA', '.NET'],
  },
  {
    roleKeyEs: 'Docente',
    roleKeyEn: 'Instructor',
    companyKey: 'experience.duoc.company',
    descKeyEs: 'Docente de programación, bases de datos y arquitectura de software para carreras de ingeniería.',
    descKeyEn: 'Instructor for programming, databases, and software architecture courses in engineering programs.',
    period: '2019 – 2022',
    tags: ['Teaching', 'SQL', 'Architecture'],
  },
  {
    roleKeyEs: 'DBA',
    roleKeyEn: 'DBA',
    companyKey: 'experience.igm.company',
    descKeyEs: 'Administración y optimización de bases de datos geoespaciales y sistemas de información geográfica.',
    descKeyEn: 'Administration and optimization of geospatial databases and geographic information systems.',
    period: '2016 – 2019',
    tags: ['PostgreSQL', 'GIS', 'Oracle'],
  },
];

export default function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
            — {t('experience.title')}
          </p>
          <div className="w-12 h-0.5 bg-indigo-500 rounded" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((item, idx) => (
              <div key={idx} className="relative sm:pl-10 group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-[#0a0a0a] hidden sm:block group-hover:bg-indigo-500 transition-colors duration-200" />

                <div className="p-5 rounded-xl border border-zinc-800 bg-[#111111] hover:border-zinc-700 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-white">
                        {lang === 'es' ? item.roleKeyEs : item.roleKeyEn}
                      </h3>
                      <p className="text-indigo-400 text-sm font-medium">{t(item.companyKey)}</p>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono whitespace-nowrap shrink-0 mt-0.5">
                      {item.period}
                      {item.presentKey && (
                        <>
                          {' – '}
                          <span className="text-indigo-400">{t('experience.present')}</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {lang === 'es' ? item.descKeyEs : item.descKeyEn}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-mono text-zinc-500 border border-zinc-800 bg-zinc-900/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
