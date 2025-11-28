'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function AgendaPreview() {
  const { t } = useLanguage();

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
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.agenda.title}{' '}
            <span className="text-dbw-red">{t.agenda.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto mb-8">
            {t.agenda.description}
          </p>
          
          <Link
            href="/agenda"
            className="inline-block px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors shadow-lg hover:shadow-xl"
          >
            Ver Agenda Completa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

