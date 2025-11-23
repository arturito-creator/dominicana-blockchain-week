'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '+2000', label: t.about.stats.attendees },
    { value: '+150', label: 'Inversores' },
    { value: '+125', label: t.about.stats.speakers },
    { value: '+200', label: 'Medios' },
    { value: '+50', label: 'Alianzas WEB3' },
  ];

  const reasons = [
    {
      title: t.about.reasons.location.title,
      description: t.about.reasons.location.description,
    },
    {
      title: t.about.reasons.ecosystem.title,
      description: t.about.reasons.ecosystem.description,
    },
    {
      title: t.about.reasons.regulation.title,
      description: t.about.reasons.regulation.description,
    },
    {
      title: t.about.reasons.tourism.title,
      description: t.about.reasons.tourism.description,
    },
  ];
  return (
    <section
      id="about"
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
            {t.about.title}{' '}
            <span className="text-dbw-red">{t.about.titleHighlight}</span>?
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-dbw-red mb-2 font-handwritten">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-dbw-gray-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <div className="text-5xl md:text-6xl font-bold text-dbw-red mb-4 font-handwritten">
              80%
            </div>
            <p className="text-dbw-gray-light leading-relaxed">
              El 80% de los asistentes a la Blockchain Week toma decisiones de negocio.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <div className="text-5xl md:text-6xl font-bold text-dbw-red mb-4 font-handwritten">
              +25
            </div>
            <p className="text-dbw-gray-light leading-relaxed">
              Países Representados en la Blockchain Week.
            </p>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-dbw-gray-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-4 text-dbw-red">
              +8 AÑOS EXPERIENCIA EN WEB3
            </h3>
            <p className="text-dbw-gray-light leading-relaxed">
              El 80% de los asistentes a la Blockchain Week cuenta con más de 8 años de experiencia en el ámbito de Web3. Esto garantiza que solo participen directores generales y veteranos.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl md:text-6xl font-bold text-dbw-red font-handwritten">
                85%
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 text-dbw-red">
                  OBJETIVO PROFESIONAL
                </h3>
              </div>
            </div>
            <p className="text-dbw-gray-light leading-relaxed">
              El 85% de los asistentes a la Blockchain Week tienen como principal motivación hacer networking y establecer nuevas conexiones comerciales. Este evento se ha confeccionado para las interacciones cara a cara y la creación de oportunidades de negocio y colaboraciones estratégicas.
            </p>
          </div>
        </motion.div>

        {/* Countries Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            ASISTENTES POR PAÍSES
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-3/4 h-8 bg-dbw-red rounded flex items-center justify-end pr-4">
                <span className="text-white text-sm font-semibold">70% LATAM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1/4 h-8 bg-white/20 rounded flex items-center justify-end pr-4">
                <span className="text-white text-sm font-semibold">20% EMEA</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[5%] h-8 bg-dbw-blue rounded flex items-center justify-end pr-2">
                <span className="text-white text-xs font-semibold">5% EEUU</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[5%] h-8 bg-dbw-blue rounded flex items-center justify-end pr-2">
                <span className="text-white text-xs font-semibold">5% ASIA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

