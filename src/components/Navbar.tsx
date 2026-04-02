'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';

const NAV_ITEMS = [
  { key: 'nav.about' as const, href: '#about' },
  { key: 'nav.projects' as const, href: '#projects' },
  { key: 'nav.experience' as const, href: '#experience' },
  { key: 'nav.skills' as const, href: '#skills' },
  { key: 'nav.contact' as const, href: '#contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-zinc-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-semibold text-lg tracking-tight hover:text-indigo-400 transition-colors"
          >
            <span className="text-indigo-400">H</span>éctor Rifo
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.key}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-indigo-400 bg-indigo-500/10'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {t(item.key)}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right side: lang toggle + mobile menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-md text-xs font-semibold border border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 tracking-widest"
              aria-label="Toggle language"
            >
              {t('lang.toggle')}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-800 py-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {t(item.key)}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
