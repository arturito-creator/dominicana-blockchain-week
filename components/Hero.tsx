'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <Image
                src="/THE_LOGO_DBW2026.png"
                alt="Dominicana Blockchain Week 2026 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                {t.hero.title}{' '}
                <span className="text-dbw-red">{t.hero.subtitle}</span>
                <br />
                <span className="text-dbw-red font-handwritten">{t.hero.year}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-dbw-gray-light max-w-2xl leading-relaxed"
              >
                {t.hero.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="text-xl md:text-2xl font-semibold text-white"
              >
                26-28 <span className="font-handwritten text-dbw-red">Mayo</span> 2026 | Santo Domingo
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#tickets"
                className="px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors shadow-lg hover:shadow-xl"
              >
                {t.hero.getTickets}
              </a>
              <a
                href="#sponsors"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t.hero.becomeSponsor}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-dbw-gray-light font-semibold rounded-lg hover:text-white transition-colors"
              >
                {t.hero.downloadDeck}
              </a>
            </motion.div>

            {/* Floating Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                t.hero.tags.speakers,
                t.hero.tags.workshops,
                t.hero.tags.networking,
                t.hero.tags.defi,
                t.hero.tags.regulation,
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-dbw-gray-light"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual Element (optional decorative element) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-dbw-red/20 to-dbw-blue/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-dbw-red/30 font-handwritten">{t.hero.year}</div>
                  <div className="text-lg text-dbw-gray-light">
                    República Dominicana
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

