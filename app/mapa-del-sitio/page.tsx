'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function MapaDelSitioPage() {
  const { t } = useLanguage();

  const links = [
    {
      title: t.nav.home,
      href: '/',
      description: 'Página principal del evento',
    },
    {
      title: t.nav.about,
      href: '/#about',
      description: 'Información sobre el evento y por qué Dominicana',
    },
    {
      title: t.nav.speakers,
      href: '/ponentes',
      description: 'Conoce a nuestros ponentes destacados',
    },
    {
      title: t.nav.agenda,
      href: '/agenda',
      description: 'Agenda completa del evento',
    },
    {
      title: t.nav.venue,
      href: '/#venue',
      description: 'Información sobre el lugar del evento',
    },
    {
      title: t.nav.tickets,
      href: '/tickets',
      description: 'Compra tus entradas para el evento',
    },
    {
      title: t.nav.sponsors,
      href: '/#sponsors',
      description: 'Nuestros patrocinadores y socios',
    },
    {
      title: t.nav.contact,
      href: '/contacto',
      description: 'Formulario de contacto general',
    },
    {
      title: 'Aplicar como Sponsor',
      href: '/contacto/sponsor',
      description: 'Formulario para aplicar como patrocinador',
    },
    {
      title: 'Aplicar como Ponente',
      href: '/contacto/ponente',
      description: 'Formulario para aplicar como ponente',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mapa del <span className="text-dbw-red">Sitio</span>
          </h1>
          <p className="text-lg text-dbw-gray-light">
            Navega fácilmente por todas las secciones de nuestro sitio web
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-dbw-red/50 transition-colors"
            >
              <Link
                href={link.href}
                className="block group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-dbw-red transition-colors">
                  {link.title}
                </h3>
                <p className="text-dbw-gray-light text-sm">{link.description}</p>
                <span className="text-dbw-red text-sm mt-2 inline-block group-hover:underline">
                  Ver página →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

