'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Speaker data from presentation
const speakers = [
  {
    id: 1,
    name: 'Luis Abinader',
    role: 'Presidente',
    company: 'Gobierno República Dominicana',
    tags: ['Gobierno', 'Liderazgo'],
    image: '/placeholder-speaker.jpg',
    confirmed: true,
  },
  {
    id: 2,
    name: 'Carolina Mejía',
    role: 'Alcaldesa',
    company: 'Santo Domingo, República Dominicana',
    tags: ['Gobierno', 'Ciudad'],
    image: '/placeholder-speaker.jpg',
    confirmed: true,
  },
  {
    id: 3,
    name: 'Antonio Gómez',
    role: 'Consul General',
    company: 'Barcelona, República Dominicana',
    tags: ['Diplomacia', 'Internacional'],
    image: '/placeholder-speaker.jpg',
    confirmed: true,
  },
  {
    id: 4,
    name: 'Mance Harmon',
    role: 'CEO',
    company: 'Hedera',
    tags: ['Blockchain', 'Liderazgo'],
    image: '/placeholder-speaker.jpg',
    confirmed: false,
  },
  {
    id: 5,
    name: 'Montse Guàrdia Güell',
    role: '',
    company: 'IDEADED',
    tags: ['Innovación', 'Ecosistema'],
    image: '/placeholder-speaker.jpg',
    confirmed: true,
  },
  {
    id: 6,
    name: 'Guillermo Gómez',
    role: 'Gobernador',
    company: 'Banco Central República Dominicana',
    tags: ['Finanzas', 'Regulación'],
    image: '/placeholder-speaker.jpg',
    confirmed: true,
  },
  {
    id: 7,
    name: 'Gilbert Verdian',
    role: 'Fundador y CEO',
    company: 'Quant',
    tags: ['Blockchain', 'Fundador'],
    image: '/placeholder-speaker.jpg',
    confirmed: false,
  },
  {
    id: 8,
    name: 'Charles Hoskinson',
    role: 'Cofundador de Ethereum y Fundador',
    company: 'Cardano',
    tags: ['Blockchain', 'Fundador'],
    image: '/placeholder-speaker.jpg',
    confirmed: false,
  },
  {
    id: 9,
    name: 'Paolo Ardoino',
    role: 'CTO',
    company: 'Tether',
    tags: ['Tecnología', 'Stablecoins'],
    image: '/placeholder-speaker.jpg',
    confirmed: false,
  },
];

export default function Speakers() {
  const { t } = useLanguage();

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
              <div className="relative h-64 bg-gradient-to-br from-dbw-blue to-dbw-blue-dark flex items-center justify-center">
                <div className="text-6xl text-white/20">👤</div>
                {/* Placeholder for actual image */}
                {/* <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                  {speaker.confirmed ? (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                      ✓
                    </span>
                  ) : (
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
                      PENDING
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

