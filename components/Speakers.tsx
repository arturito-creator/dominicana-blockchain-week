'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Speaker data from presentation
const speakerData = [
  {
    id: 1,
    name: 'Luis Abinader',
    roleKey: 'president' as const,
    company: 'Gobierno República Dominicana',
    tagKeys: ['government', 'leadership'] as const,
    image: '/speakers/LuisAbinader.png',
    confirmed: true,
  },
  {
    id: 2,
    name: 'Carolina Mejía',
    roleKey: 'mayor' as const,
    company: 'Santo Domingo, República Dominicana',
    tagKeys: ['government', 'city'] as const,
    image: '/speakers/CarolinaMejia.png',
    confirmed: true,
  },
  {
    id: 3,
    name: 'Antonio Gómez',
    roleKey: 'consulGeneral' as const,
    company: 'Barcelona, República Dominicana',
    tagKeys: ['diplomacy', 'international'] as const,
    image: '/speakers/AntonioGomez.png',
    confirmed: true,
  },
  {
    id: 4,
    name: 'Mance Harmon',
    roleKey: 'ceo' as const,
    company: 'Hedera',
    tagKeys: ['blockchain', 'leadership'] as const,
    image: '/speakers/ManceHarmon.png',
    confirmed: false,
  },
  {
    id: 5,
    name: 'Montse Guàrdia Güell',
    roleKey: null,
    company: 'IDEADED',
    tagKeys: ['innovation', 'ecosystem'] as const,
    image: '/speakers/MontseGuardia.png',
    confirmed: true,
  },
  {
    id: 6,
    name: 'Guillermo Gómez',
    roleKey: 'governor' as const,
    company: 'Banco Central República Dominicana',
    tagKeys: ['finance', 'regulation'] as const,
    image: '/speakers/GuillermoGomez.png',
    confirmed: true,
  },
  {
    id: 7,
    name: 'Gilbert Verdian',
    roleKey: 'founder' as const,
    company: 'Quant',
    tagKeys: ['blockchain', 'founder'] as const,
    image: '/speakers/GilbertVerdian.png',
    confirmed: false,
  },
  {
    id: 8,
    name: 'Charles Hoskinson',
    roleKey: 'cofounder' as const,
    company: 'Cardano',
    tagKeys: ['blockchain', 'founder'] as const,
    image: '/speakers/CharlesHoskinson.png',
    confirmed: false,
  },
  {
    id: 9,
    name: 'Paolo Ardoino',
    roleKey: 'cto' as const,
    company: 'Tether',
    tagKeys: ['technology', 'stablecoins'] as const,
    image: '/speakers/PaoloArdoino.png',
    confirmed: false,
  },
];

export default function Speakers() {
  const { t } = useLanguage();

  const speakers = speakerData.map((speaker) => ({
    ...speaker,
    role: speaker.roleKey ? t.speakers.roles[speaker.roleKey] : '',
    tags: speaker.tagKeys.map((tagKey) => t.speakers.tags[tagKey]),
  }));

  return (
    <section
      id="speakers"
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
            {t.speakers.title}{' '}
            <span className="text-dbw-red">{t.speakers.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto">
            {t.speakers.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-dbw-red/50 transition-all group"
            >
              {/* Speaker Image */}
              <div className="relative h-64 bg-gradient-to-br from-dbw-blue to-dbw-blue-dark overflow-hidden flex items-end justify-center p-4 pb-0">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={200}
                  height={240}
                  className="object-contain w-auto h-full max-h-[240px]"
                  unoptimized
                />
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                  {speaker.confirmed ? (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                      {t.speakers.confirmed}
                    </span>
                  ) : (
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
                      {t.speakers.pending}
                    </span>
                  )}
                </div>
                <p className="text-dbw-gray-light text-sm mb-2">
                  {speaker.role}
                </p>
                <p className="text-white text-sm font-medium mb-4">
                  {speaker.company}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {speaker.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dbw-red/20 text-dbw-red text-xs rounded-full border border-dbw-red/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-dbw-gray-light mb-4">
            {t.speakers.moreSpeakers}
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-transparent border-2 border-dbw-red text-dbw-red font-semibold rounded-lg hover:bg-dbw-red hover:text-white transition-colors"
          >
            {t.speakers.applyToSpeak}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

