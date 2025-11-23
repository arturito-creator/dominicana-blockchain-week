'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Tickets() {
  const { t } = useLanguage();

  const tiers = [
    {
      name: 'Full Access | DBW',
      price: '$500',
      description: 'Categoría de participación para Público en General Full Access CC | After Party / Además tienes un 5% de descuento en alojamiento por medio de la plataforma BLOCK TRAVEL',
      features: [
        'Acceso completo a todas las sesiones',
        'After Party incluido',
        '5% descuento en alojamiento',
        'Materiales digitales del evento',
        'Coffee breaks y almuerzo',
      ],
      highlighted: false,
      soldOut: false,
    },
    {
      name: 'Solo Expo | 1 Día',
      price: '$50',
      description: 'Categoría de participación para Público en General Solo Expo CC | Día 23/ABR',
      features: [
        'Acceso a la zona de exposición',
        'Un día completo',
        'Networking básico',
        'Materiales digitales',
      ],
      highlighted: false,
      soldOut: false,
    },
    {
      name: 'Estudiante | 1 Día',
      price: '$50',
      description: 'Categoría de participación para Público en General Formación | 1 Día | After Party',
      features: [
        'Acceso a sesiones de formación',
        'Un día completo',
        'After Party incluido',
        'Materiales educativos',
      ],
      highlighted: false,
      soldOut: false,
    },
    {
      name: 'Business',
      price: '$3000',
      description: 'Acceso full CC Food&drinks CC Investor\'s Night | Plazas Limitadas. Además tienes un 10% de descuento en alojamiento por medio de la plataforma BLOCK TRAVEL',
      features: [
        'Acceso completo a todas las sesiones',
        'Food & drinks incluidos',
        'Investor\'s Night exclusivo',
        '10% descuento en alojamiento',
        'Networking premium',
        'Materiales exclusivos',
      ],
      highlighted: true,
      soldOut: false,
    },
    {
      name: 'VIP',
      price: '$8000',
      description: 'Cena Inaugural | Cena Investor\'s Night Acceso Full Zona VIP Welcome Pack | After Party VIP',
      features: [
        'Cena Inaugural exclusiva',
        'Cena Investor\'s Night',
        'Acceso completo zona VIP',
        'Welcome Pack premium',
        'After Party VIP',
        'Networking de élite',
        'Materiales exclusivos VIP',
      ],
      highlighted: true,
      soldOut: false,
    },
  ];

  return (
    <section
      id="tickets"
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
            {t.tickets.title}{' '}
            <span className="text-dbw-red">{t.tickets.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto">
            {t.tickets.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-6 md:p-8 overflow-hidden ${
                tier.highlighted
                  ? 'border-dbw-red bg-dbw-red/10'
                  : 'border-white/10'
              }`}
            >
              {/* Sold Out Banner */}
              {tier.soldOut && (
                <div className="absolute top-0 left-0 w-full bg-dbw-red text-white text-center py-2 text-sm font-bold z-10 transform -rotate-12 origin-center">
                  SOLD OUT
                </div>
              )}
              
              {tier.highlighted && !tier.soldOut && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-dbw-red text-white text-sm font-semibold rounded-full">
                  {t.tickets.popular}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-dbw-gray-light text-sm mb-4">
                  {tier.description}
                </p>
                 <div className="flex items-baseline justify-center gap-2">
                   <span className="text-4xl font-bold font-handwritten text-dbw-red">
                     {tier.price}
                   </span>
                 </div>
              </div>

               <ul className="space-y-3 mb-8">
                 {tier.features.map((feature, idx) => (
                   <li key={idx} className="flex items-start gap-2">
                     <span className="text-dbw-red mt-1">✓</span>
                     <span className="text-dbw-gray-light text-sm">
                       {feature}
                     </span>
                   </li>
                 ))}
               </ul>

               {tier.soldOut ? (
                 <div className="w-full text-center py-3 px-6 rounded-lg font-semibold bg-white/5 text-dbw-gray-light border border-white/10 cursor-not-allowed">
                   Tickets Agotados
                 </div>
               ) : (
                 <a
                   href="#contact"
                   className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                     tier.highlighted
                       ? 'bg-dbw-red text-white hover:bg-dbw-red-dark'
                       : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                   }`}
                 >
                   {t.tickets.buyNow}
                 </a>
               )}
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
            {t.tickets.groupDiscounts}
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-transparent border-2 border-dbw-red text-dbw-red font-semibold rounded-lg hover:bg-dbw-red hover:text-white transition-colors"
          >
            {t.tickets.contactGroupRates}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
