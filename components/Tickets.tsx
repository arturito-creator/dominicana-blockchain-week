'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Tickets() {
  const { t } = useLanguage();

  const tiers = [
    {
      name: t.tickets.tiers.fullAccess.name,
      price: '$500',
      priceImage: '/numeros/$500.png',
      description: t.tickets.tiers.fullAccess.description,
      features: t.tickets.tiers.fullAccess.features,
      highlighted: true,
      soldOut: false,
    },
    {
      name: t.tickets.tiers.soloExpo.name,
      price: '$50',
      priceImage: '/numeros/$50.png',
      description: t.tickets.tiers.soloExpo.description,
      features: t.tickets.tiers.soloExpo.features,
      highlighted: false,
      soldOut: false,
    },
    {
      name: t.tickets.tiers.student.name,
      price: '$50',
      priceImage: '/numeros/$50.png',
      description: t.tickets.tiers.student.description,
      features: t.tickets.tiers.student.features,
      highlighted: false,
      soldOut: false,
    },
    {
      name: t.tickets.tiers.business.name,
      price: '$3000',
      priceImage: '/numeros/$3000.png',
      description: t.tickets.tiers.business.description,
      features: t.tickets.tiers.business.features,
      highlighted: false,
      soldOut: false,
    },
    {
      name: t.tickets.tiers.vip.name,
      price: '$8000',
      priceImage: '/numeros/$8000.png',
      description: t.tickets.tiers.vip.description,
      features: t.tickets.tiers.vip.features,
      highlighted: false,
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
              className={`relative bg-white/5 backdrop-blur-sm border rounded-xl ${
                tier.highlighted
                  ? 'border-dbw-red bg-dbw-red/10 pt-10 md:pt-12 px-6 md:px-8 pb-6 md:pb-8'
                  : 'border-white/10 p-6 md:p-8'
              } ${tier.soldOut ? 'overflow-hidden' : ''}`}
            >
              {/* Sold Out Banner */}
              {tier.soldOut && (
                <div className="absolute top-0 left-0 w-full bg-dbw-red text-white text-center py-2 text-sm font-bold z-10 transform -rotate-12 origin-center">
                  {t.tickets.soldOut}
                </div>
              )}
              
              {tier.highlighted && !tier.soldOut && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-dbw-red text-white text-sm font-semibold rounded-full whitespace-nowrap z-10">
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
                 <div className="flex items-center justify-center">
                   <Image
                     src={tier.priceImage}
                     alt={tier.price}
                     width={200}
                     height={80}
                     className="h-16 w-auto object-contain"
                     unoptimized
                   />
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
                   {t.tickets.ticketsSoldOut}
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
