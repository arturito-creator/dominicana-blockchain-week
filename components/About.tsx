'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Timeline } from '@/components/Timeline';
import AttendeesChart from '@/components/AttendeesChart';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '+2000', label: t.about.stats.attendees },
    { value: '+150', label: t.about.stats.investors },
    { value: '+125', label: t.about.stats.speakers },
    { value: '+200', label: t.about.stats.media },
    { value: '+50', label: t.about.stats.web3Alliances },
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

        {/* Timeline Stats */}
        <div className="mb-16">
          <Timeline
            data={stats.map((stat, index) => {
              // Extract numeric value from stat.value (e.g., "+2000" -> 2000)
              const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
              
              // Map images for each stat
              const imageMap: { [key: number]: string | undefined } = {
                0: undefined, // Asistentes - uses chart with image
                1: '/fotos_evento/Inversores.JPG', // Inversores
                2: '/fotos_evento/DSC09943.jpg', // Ponentes
                3: '/fotos_evento/DSM09163.jpg', // Medios
                4: '/fotos_evento/Alianzas.JPG', // Alianzas WEB3
              };
              
              // Check if this is the attendees stat (first one)
              const isAttendees = index === 0;
              
              return {
                number: numericValue,
                title: stat.value,
                imageUrl: imageMap[index],
                content: stat.label,
                description: isAttendees ? (
                  <div className="space-y-6">
                    <AttendeesChart 
                      imageUrl="/fotos_evento/Asistentes.jpg"
                      description="Nuestro evento reúne a una comunidad global diversa de profesionales, innovadores y entusiastas del blockchain. Con una representación significativa de América Latina, complementada por participantes de Europa, Medio Oriente, África, Estados Unidos y Asia, creamos un ecosistema único de intercambio de ideas y networking internacional."
                    />
                  </div>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                ),
              };
            })}
          />
        </div>

      </div>
    </section>
  );
}

