'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const tracks = [
  { id: 'defi', name: 'DeFi', color: 'dbw-red' },
  { id: 'regulation', name: 'Regulation', color: 'dbw-blue' },
  { id: 'builders', name: 'Builders', color: 'dbw-red' },
  { id: 'institutions', name: 'Institutions', color: 'dbw-blue' },
  { id: 'latam', name: 'LatAm Focus', color: 'dbw-red' },
];


export default function Agenda() {
  const { t } = useLanguage();

  const schedule = [
    {
      day: t.agenda.day1,
      date: '26 de mayo, 2026',
      sessions: [
        { time: '09:00', title: 'Keynote de Apertura', track: 'all' },
        { time: '10:30', title: 'Panel de Discusión DeFi', track: 'defi' },
        { time: '12:00', title: 'Almuerzo y Networking', track: 'all' },
        { time: '14:00', title: 'Taller de Marco Regulatorio', track: 'regulation' },
        { time: '15:30', title: 'Showcase de Builders', track: 'builders' },
        { time: '17:00', title: 'Palabras de Cierre', track: 'all' },
      ],
    },
    {
      day: t.agenda.day2,
      date: '27 de mayo, 2026',
      sessions: [
        { time: '09:00', title: 'Keynote Matutino', track: 'all' },
        { time: '10:30', title: 'Adopción Institucional', track: 'institutions' },
        { time: '12:00', title: 'Almuerzo y Networking', track: 'all' },
        { time: '14:00', title: 'Panel del Ecosistema LatAm', track: 'latam' },
        { time: '15:30', title: 'Deep Dive Técnico', track: 'builders' },
        { time: '17:00', title: 'Recepción de Networking', track: 'all' },
      ],
    },
    {
      day: t.agenda.day3,
      date: '28 de mayo, 2026',
      sessions: [
        { time: '09:00', title: 'Keynote Final', track: 'all' },
        { time: '10:30', title: 'El Futuro de Web3', track: 'all' },
        { time: '12:00', title: 'Ceremonia de Cierre', track: 'all' },
      ],
    },
  ];

  return (
    <section
      id="agenda"
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
            {t.agenda.title}{' '}
            <span className="text-dbw-red">{t.agenda.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto">
            {t.agenda.description}
          </p>
        </motion.div>

        {/* Tracks */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tracks.map((track) => (
            <span
              key={track.id}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-dbw-gray-light"
            >
              {track.name}
            </span>
          ))}
        </div>

        {/* Schedule by Day */}
        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
            >
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {day.day}
                </h3>
                <p className="text-dbw-gray-light">{day.date}</p>
              </div>

              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="flex flex-col sm:flex-row gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-dbw-red/30 transition-colors"
                  >
                    <div className="text-dbw-red font-semibold min-w-[80px] font-handwritten">
                      {session.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1">
                        {session.title}
                      </h4>
                      {session.track !== 'all' && (
                        <span className="text-xs text-dbw-gray-light">
                          {tracks.find((t) => t.id === session.track)?.name ||
                            session.track}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
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
            Agenda detallada con ponentes y temas próximamente
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
          >
            {t.agenda.downloadAgenda}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

