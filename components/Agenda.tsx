'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';



export default function Agenda() {
  const { t } = useLanguage();

  const tracks = [
    { id: 'defi', name: t.agenda.tracks.defi, color: 'dbw-red' },
    { id: 'regulation', name: t.agenda.tracks.regulation, color: 'dbw-blue' },
    { id: 'builders', name: t.agenda.tracks.builders, color: 'dbw-red' },
    { id: 'institutions', name: t.agenda.tracks.institutions, color: 'dbw-blue' },
    { id: 'latam', name: t.agenda.tracks.latam, color: 'dbw-red' },
  ];

  const schedule = [
    {
      day: t.agenda.day1,
      date: t.agenda.sessions.day1.date,
      sessions: [
        { time: '09:00', title: t.agenda.sessions.day1.openingKeynote, track: 'all' },
        { time: '10:30', title: t.agenda.sessions.day1.defiPanel, track: 'defi' },
        { time: '12:00', title: t.agenda.sessions.day1.lunchNetworking, track: 'all' },
        { time: '14:00', title: t.agenda.sessions.day1.regulatoryWorkshop, track: 'regulation' },
        { time: '15:30', title: t.agenda.sessions.day1.buildersShowcase, track: 'builders' },
        { time: '17:00', title: t.agenda.sessions.day1.closingWords, track: 'all' },
      ],
    },
    {
      day: t.agenda.day2,
      date: t.agenda.sessions.day2.date,
      sessions: [
        { time: '09:00', title: t.agenda.sessions.day2.morningKeynote, track: 'all' },
        { time: '10:30', title: t.agenda.sessions.day2.institutionalAdoption, track: 'institutions' },
        { time: '12:00', title: t.agenda.sessions.day2.lunchNetworking, track: 'all' },
        { time: '14:00', title: t.agenda.sessions.day2.latamEcosystemPanel, track: 'latam' },
        { time: '15:30', title: t.agenda.sessions.day2.technicalDeepDive, track: 'builders' },
        { time: '17:00', title: t.agenda.sessions.day2.networkingReception, track: 'all' },
      ],
    },
    {
      day: t.agenda.day3,
      date: t.agenda.sessions.day3.date,
      sessions: [
        { time: '09:00', title: t.agenda.sessions.day3.finalKeynote, track: 'all' },
        { time: '10:30', title: t.agenda.sessions.day3.futureOfWeb3, track: 'all' },
        { time: '12:00', title: t.agenda.sessions.day3.closingCeremony, track: 'all' },
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
          animate={{ opacity: 1, y: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.1, duration: 0.6 }}
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
                    <div className="text-white font-semibold min-w-[80px]">
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
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-dbw-gray-light mb-4">
            {t.agenda.detailedAgendaComing}
          </p>
          <a
            href="/contacto"
            className="inline-block px-6 py-3 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors"
          >
            {t.agenda.downloadAgenda}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

