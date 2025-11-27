'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { MagneticButton } from '@/components/MagneticButton';
import PolaroidCard from '@/components/PolaroidCard';

export default function Hero() {
  const { t } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Polaroid Cards - Stacked in bottom right */}
      <div className="absolute bottom-8 right-8 z-20 pointer-events-none" style={{ width: '300px', height: '400px' }}>
        <div className="relative w-full h-full">
          <PolaroidCard
            image="/fotos_evento/Drag1.jpg"
            frontText={t.hero.polaroidCards.card1.frontText}
            backText={t.hero.polaroidCards.card1.backText}
            initialRotation={-3}
            initialX={0}
            initialY={0}
            zIndex={3}
            delay={1}
          />
          <PolaroidCard
            image="/fotos_evento/Drag2.jpg"
            frontText={t.hero.polaroidCards.card2.frontText}
            backText={t.hero.polaroidCards.card2.backText}
            initialRotation={5}
            initialX={-15}
            initialY={-15}
            zIndex={2}
            delay={1.2}
          />
          <PolaroidCard
            image="/fotos_evento/Drag3.jpg"
            frontText={t.hero.polaroidCards.card3.frontText}
            backText={t.hero.polaroidCards.card3.backText}
            initialRotation={-2}
            initialX={-30}
            initialY={-30}
            zIndex={1}
            delay={1.4}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Left: Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl"
            >
              {/* SEO: Hidden H1 for search engines */}
              <h1 className="sr-only">
                {t.hero.title} {t.hero.subtitle} {t.hero.year}
              </h1>
              <Image
                src="/THE_LOGO_DBW2026.png?v=3"
                alt={t.hero.logoAlt}
                width={1600}
                height={800}
                className="w-full h-auto object-contain"
                priority
                unoptimized
              />
            </motion.div>

            <div className="space-y-4 max-w-4xl md:max-w-5xl lg:max-w-6xl mt-8 md:mt-10">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-dbw-gray-light leading-relaxed"
              >
                {t.hero.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="text-xl md:text-2xl font-semibold text-white"
              >
                {t.hero.dateLocation}
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <MagneticButton>
                <a
                  href="#tickets"
                  className="px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors shadow-lg hover:shadow-xl border-2 border-transparent leading-none"
                >
                  {t.hero.getTickets}
                </a>
              </MagneticButton>
              <a
                href="#sponsors"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors leading-none"
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
        </div>
      </div>
    </section>
  );
}

