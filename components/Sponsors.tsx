'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Placeholder sponsor data - replace with real logos
const sponsors = {
  gold: [
    { name: 'Gold Sponsor 1', logo: '/placeholder-logo.png' },
    { name: 'Gold Sponsor 2', logo: '/placeholder-logo.png' },
  ],
  silver: [
    { name: 'Silver Sponsor 1', logo: '/placeholder-logo.png' },
    { name: 'Silver Sponsor 2', logo: '/placeholder-logo.png' },
    { name: 'Silver Sponsor 3', logo: '/placeholder-logo.png' },
  ],
  bronze: [
    { name: 'Bronze Sponsor 1', logo: '/placeholder-logo.png' },
    { name: 'Bronze Sponsor 2', logo: '/placeholder-logo.png' },
    { name: 'Bronze Sponsor 3', logo: '/placeholder-logo.png' },
    { name: 'Bronze Sponsor 4', logo: '/placeholder-logo.png' },
  ],
};

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sponsors.title}{' '}
            <span className="text-dbw-red">{t.sponsors.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto mb-8">
            {t.sponsors.description}
          </p>
          <a
            href="/contacto/sponsor"
            className="inline-block px-6 py-3 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
          >
            {t.sponsors.becomeSponsor}
          </a>
        </motion.div>

        {/* Gold Sponsors */}
        {sponsors.gold.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-dbw-red mb-6 text-center">
              {t.sponsors.gold}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsors.gold.map((sponsor, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex items-center justify-center h-32 hover:border-dbw-red/50 transition-colors"
                >
                  <span className="text-dbw-gray-light">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Silver Sponsors */}
        {sponsors.silver.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-dbw-gray-light mb-6 text-center">
              {t.sponsors.silver}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sponsors.silver.map((sponsor, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center h-24 hover:border-white/30 transition-colors"
                >
                  <span className="text-dbw-gray-light text-sm">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bronze Sponsors */}
        {sponsors.bronze.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-dbw-gray-light mb-6 text-center">
              {t.sponsors.bronze}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sponsors.bronze.map((sponsor, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-center h-20 hover:border-white/30 transition-colors"
                >
                  <span className="text-dbw-gray-light text-xs text-center">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-dbw-gray-light mb-6">
            {t.sponsors.interest}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
