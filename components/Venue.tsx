'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Venue() {
  const { t } = useLanguage();

  const infoCards = [
    {
      title: t.venue.whereToStay.title,
      description: t.venue.whereToStay.description,
      icon: '🏨',
    },
    {
      title: t.venue.howToArrive.title,
      description: t.venue.howToArrive.description,
      icon: '✈️',
    },
    {
      title: t.venue.thingsToDo.title,
      description: t.venue.thingsToDo.description,
      icon: '🏖️',
    },
  ];

  return (
    <section
      id="venue"
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
            {t.venue.title}{' '}
            <span className="text-dbw-red">{t.venue.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto">
            {t.venue.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Venue Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.venue.venueTitle}
            </h3>
            <p className="text-dbw-gray-light mb-4 leading-relaxed">
              {t.venue.venueDescription}
            </p>
            <p className="text-dbw-gray-light leading-relaxed">
              {t.venue.venueDetails}
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="h-full min-h-[300px] bg-gradient-to-br from-dbw-blue to-dbw-blue-dark flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <p className="text-dbw-gray-light">{t.venue.mapComingSoon}</p>
                <p className="text-sm text-dbw-gray-light mt-2">
                  {t.venue.santoDomingo}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-dbw-gray-light text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
