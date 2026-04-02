import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';

export const metadata: Metadata = {
  title: 'Héctor Rifo — Software Architect & CTO',
  description:
    'Portfolio of Héctor Alexander Rifo Solís — Software Architect & CTO based in Santiago, Chile. Specialist in .NET, AWS, and FullStack development.',
  keywords: [
    'Software Architect',
    'CTO',
    'Chile',
    '.NET',
    'AWS',
    'Node.js',
    'Python',
    'Microservices',
    'Cloud',
    'FullStack',
  ],
  authors: [{ name: 'Héctor Alexander Rifo Solís' }],
  creator: 'Héctor Alexander Rifo Solís',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    alternateLocale: 'en_US',
    title: 'Héctor Rifo — Software Architect & CTO',
    description:
      'Portfolio of Héctor Alexander Rifo Solís — Software Architect & CTO based in Santiago, Chile.',
    siteName: 'Héctor Rifo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Héctor Rifo — Software Architect & CTO',
    description:
      'Software Architect & CTO based in Santiago, Chile. Specialist in .NET, AWS, and FullStack development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-zinc-100 antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
