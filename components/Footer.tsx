'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { name: 'X (Twitter)', href: 'https://x.com/LatamBlockWeek', icon: '𝕏' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/dominicanablockchainweek', icon: 'in' },
  { name: 'Instagram', href: 'https://instagram.com/dominicanablockchainweek', icon: '📷' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              DBW<span className="text-dbw-red font-handwritten">2026</span>
            </div>
            <p className="text-dbw-gray-light text-sm">
              Dominicana Blockchain Week <span className="font-handwritten text-dbw-red">2026</span>
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

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-dbw-gray-light text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
