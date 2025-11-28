'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [showLogo, setShowLogo] = useState(pathname !== '/');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasAnimatedRef = useRef(false);

  const navSections = [
    { name: t.nav.home, href: '/', key: 'home' },
    { name: t.nav.speakers, href: '/ponentes', key: 'speakers' },
    { name: t.nav.agenda, href: '/agenda', key: 'agenda' },
    { name: t.nav.tickets, href: '/tickets', key: 'tickets' },
    { name: t.nav.contact, href: '/contacto', key: 'contact' },
  ];

  useEffect(() => {
    // Si no estamos en home, siempre mostrar el logo sin animación
    if (pathname !== '/') {
      setShowLogo(true);
      setShouldAnimate(false);
      hasAnimatedRef.current = false;
      return;
    }

    // Resetear cuando volvemos a home
    hasAnimatedRef.current = false;
    setShouldAnimate(false);
    setShowLogo(false); // Inicialmente oculto en home

    // Si estamos en home, verificar si el logo grande es visible
    let previousVisible = true;
    
    const checkLogoVisibility = () => {
      const heroLogo = document.getElementById('hero-logo');
      if (heroLogo) {
        const rect = heroLogo.getBoundingClientRect();
        // El logo grande no está visible cuando está completamente fuera de la pantalla
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        const shouldShow = !isVisible;
        
        // Solo animar cuando el logo grande pasa de visible a no visible por primera vez
        if (shouldShow && previousVisible && !hasAnimatedRef.current) {
          setShouldAnimate(true);
          hasAnimatedRef.current = true;
        } else if (!shouldShow) {
          setShouldAnimate(false);
        }
        
        setShowLogo(shouldShow);
        previousVisible = isVisible;
      } else {
        // Si no existe el logo grande aún (cargando), esperar un poco más
        setShowLogo(false);
        setShouldAnimate(false);
      }
    };

    // Verificar al cargar con un pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(checkLogoVisibility, 200);
    checkLogoVisibility();

    // Verificar al hacer scroll
    window.addEventListener('scroll', checkLogoVisibility, { passive: true });
    window.addEventListener('resize', checkLogoVisibility);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', checkLogoVisibility);
      window.removeEventListener('resize', checkLogoVisibility);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dbw-blue-dark/90 backdrop-blur-md border-b border-dbw-blue-default/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Aparece con animación desde arriba cuando el logo grande no es visible */}
          {showLogo ? (
            <motion.div
              key="navbar-logo"
              initial={shouldAnimate ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <div className="relative h-8 w-24 md:h-10 md:w-32">
                  <Image
                    src="/DBW2026_LogoCorto.png"
                    alt="Dominicana Blockchain Week 2026"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </motion.div>
          ) : (
            <div className="w-0" aria-hidden="true" />
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navSections.map((section) => {
              const sectionActive = isActive(section.href);
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    sectionActive
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

