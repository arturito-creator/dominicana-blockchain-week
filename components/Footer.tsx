'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { name: 'X (Twitter)', href: 'https://x.com/LatamBlockWeek', icon: '𝕏' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/dominicanablockchainweek', icon: 'in' },
  { name: 'Instagram', href: 'https://instagram.com/dominicanablockchainweek', icon: '📷' },
];


const governmentLogos = [
  { src: '/logos_gubernamentales/1_alcaldia_del_distrito_nacional_rd.png', alt: 'Alcaldía del Distrito Nacional RD' },
  { src: '/logos_gubernamentales/2_itla.png', alt: 'ITLA' },
  { src: '/logos_gubernamentales/3_gobierno_de_rd.png', alt: 'Gobierno de República Dominicana' },
  { src: '/logos_gubernamentales/4_consulado_rd_barcelona.png', alt: 'Consulado RD Barcelona' },
  { src: '/logos_gubernamentales/5_banco_central_rd.png', alt: 'Banco Central RD' },
  { src: '/logos_gubernamentales/6_banco_central_rd_2.png', alt: 'Banco Central RD' },
  { src: '/logos_gubernamentales/7_pro_dominicana.png', alt: 'Pro Dominicana' },
];

export default function Footer() {
  const { t } = useLanguage();
  const logosContainerRef = useRef<HTMLDivElement>(null);
  const logosContentRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const checkIfNeedsAnimation = () => {
      if (logosContainerRef.current && logosContentRef.current) {
        const containerWidth = logosContainerRef.current.offsetWidth;
        const contentWidth = logosContentRef.current.scrollWidth;
        // Si el contenido es más ancho que el contenedor, activar animación
        setShouldAnimate(contentWidth > containerWidth);
      }
    };

    // Esperar a que el DOM esté completamente renderizado
    const timeoutId = setTimeout(() => {
      checkIfNeedsAnimation();
    }, 200);

    // También verificar cuando la ventana cambie de tamaño
    window.addEventListener('resize', checkIfNeedsAnimation);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkIfNeedsAnimation);
    };
  }, []);

  const legalLinks = [
    { name: t.footer.legal.privacyPolicy, href: '#' },
    { name: t.footer.legal.termsOfService, href: '#' },
    { name: t.footer.legal.cookiePolicy, href: '#' },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/DBW2026_LogoCorto.png"
                alt="DBW2026"
                width={250}
                height={100}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-dbw-gray-light text-sm">
              Dominicana Blockchain Week 2026
              <br />
              {t.footer.location}
              <br />
              <a href="https://www.dominicanablockchainweek.com" target="_blank" rel="noopener noreferrer" className="hover:text-dbw-red transition-colors">
                www.dominicanablockchainweek.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-dbw-gray-light text-sm hover:text-white transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#speakers"
                  className="text-dbw-gray-light text-sm hover:text-white transition-colors"
                >
                  {t.nav.speakers}
                </Link>
              </li>
              <li>
                <Link
                  href="#tickets"
                  className="text-dbw-gray-light text-sm hover:text-white transition-colors"
                >
                  {t.nav.tickets}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-dbw-gray-light text-sm hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.connect}</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-dbw-red/20 hover:border-dbw-red transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dbw-gray-light text-xs hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Government Logos */}
        <div className="pt-8 border-t border-white/10 mb-8">
          <div 
            ref={logosContainerRef}
            className={`flex items-center justify-center ${
              shouldAnimate ? 'overflow-hidden' : 'overflow-x-auto flex-wrap'
            }`}
          >
            <div
              ref={logosContentRef}
              className={`flex items-center gap-3 md:gap-4 ${
                shouldAnimate ? 'flex-nowrap' : ''
              }`}
              style={
                shouldAnimate
                  ? {
                      animation: 'scroll-slow 30s linear infinite',
                    }
                  : {}
              }
            >
              {/* Primera serie de logos */}
              {governmentLogos.map((logo, index) => (
                <Image
                  key={`first-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={100}
                  className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
              {/* Segunda serie de logos (para el loop infinito) */}
              {shouldAnimate &&
                governmentLogos.map((logo, index) => (
                  <Image
                    key={`second-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={100}
                    className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-dbw-gray-light text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
