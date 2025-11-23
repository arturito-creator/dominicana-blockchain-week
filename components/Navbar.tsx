'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navSections = [
    { name: t.nav.home, href: '#hero', key: 'home' },
    { name: t.nav.about, href: '#about', key: 'about' },
    { name: t.nav.speakers, href: '#speakers', key: 'speakers' },
    { name: t.nav.agenda, href: '#agenda', key: 'agenda' },
    { name: t.nav.venue, href: '#venue', key: 'venue' },
    { name: t.nav.tickets, href: '#tickets', key: 'tickets' },
    { name: t.nav.sponsors, href: '#sponsors', key: 'sponsors' },
    { name: t.nav.contact, href: '#contact', key: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navSections.map((s) => s.href.replace('#', ''));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dbw-blue-dark/90 backdrop-blur-md border-b border-dbw-blue-default/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center">
            <div className="relative h-8 w-auto md:h-10">
              <Image
                src="/THE_LOGO_DBW2026.png"
                alt="Dominicana Blockchain Week 2026"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navSections.map((section) => {
              const sectionId = section.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={(e) => handleNavClick(e, section.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? 'text-dbw-red bg-dbw-red/10'
                      : 'text-dbw-gray-light hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.name}
                </Link>
              );
            })}
            
            {/* Language Switcher */}
            <div className="ml-4 flex items-center border border-white/20 rounded-full overflow-hidden">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === 'es'
                    ? 'bg-dbw-red text-white'
                    : 'text-dbw-gray-light hover:text-white hover:bg-white/5'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-dbw-red text-white'
                    : 'text-dbw-gray-light hover:text-white hover:bg-white/5'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Switcher Mobile */}
            <div className="flex items-center border border-white/20 rounded-full overflow-hidden">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  language === 'es'
                    ? 'bg-dbw-red text-white'
                    : 'text-dbw-gray-light'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-dbw-red text-white'
                    : 'text-dbw-gray-light'
                }`}
              >
                EN
              </button>
            </div>
            
            <button
              className="text-dbw-gray-light hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

