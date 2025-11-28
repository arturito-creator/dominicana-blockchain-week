'use client';

import { useState, useEffect, useRef } from 'react';
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

interface SpeakersProps {
  showSearch?: boolean;
}

export default function Speakers({ showSearch = false }: SpeakersProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const speakers = speakerData.map((speaker) => ({
    ...speaker,
    role: speaker.roleKey ? t.speakers.roles[speaker.roleKey] : '',
    tags: speaker.tagKeys.map((tagKey) => t.speakers.tags[tagKey]),
  }));

  // Filtrar speakers según la búsqueda (solo si showSearch es true)
  const filteredSpeakers = showSearch
    ? speakers.filter((speaker) => {
        const query = searchQuery.toLowerCase();
        return (
          speaker.name.toLowerCase().includes(query) ||
          speaker.company.toLowerCase().includes(query) ||
          speaker.role.toLowerCase().includes(query)
        );
      })
    : speakers;

  // Scroll automático continuo (solo cuando no hay búsqueda activa)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || filteredSpeakers.length === 0 || (showSearch && searchQuery.trim() !== '')) return;

    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 0.3; // Velocidad de scroll (píxeles por frame)
    let isPaused = false;
    let animationId: number;

    const pauseScroll = () => {
      isPaused = true;
    };

    const resumeScroll = () => {
      isPaused = false;
      // Actualizar la posición del scroll con la posición actual del contenedor
      scrollPosition = container.scrollLeft;
    };

    const scroll = () => {
      if (container && !isPaused && !dragStateRef.current.isDragging) {
        scrollPosition += scrollSpeed;
        const singleSetWidth = container.scrollWidth / 2; // Ancho de una serie de elementos
        
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = scrollPosition - singleSetWidth; // Reiniciar suavemente
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    const pauseScrollTouch = () => {
      isPaused = true;
    };

    const resumeScrollTouch = () => {
      isPaused = false;
      // Actualizar la posición del scroll con la posición actual del contenedor
      scrollPosition = container.scrollLeft;
    };

    container.addEventListener('mouseenter', pauseScroll);
    container.addEventListener('mouseleave', resumeScroll);
    container.addEventListener('touchstart', pauseScrollTouch);
    container.addEventListener('touchend', resumeScrollTouch);
    container.addEventListener('touchcancel', resumeScrollTouch);
    
    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', pauseScroll);
      container.removeEventListener('mouseleave', resumeScroll);
      container.removeEventListener('touchstart', pauseScrollTouch);
      container.removeEventListener('touchend', resumeScrollTouch);
      container.removeEventListener('touchcancel', resumeScrollTouch);
    };
  }, [filteredSpeakers.length, showSearch, searchQuery]);

  // Funcionalidad de drag (mouse y touch)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Handlers para mouse
    const handleMouseDown = (e: MouseEvent) => {
      dragStateRef.current.isDragging = true;
      dragStateRef.current.startX = e.pageX - container.offsetLeft;
      dragStateRef.current.scrollLeft = container.scrollLeft;
      setIsDragging(true);
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStateRef.current.isDragging) return;
      e.preventDefault();
      
      const x = e.pageX - container.offsetLeft;
      const walk = (x - dragStateRef.current.startX) * 2; // Velocidad del scroll
      container.scrollLeft = dragStateRef.current.scrollLeft - walk;
    };

    const handleMouseUp = () => {
      dragStateRef.current.isDragging = false;
      setIsDragging(false);
      container.style.cursor = 'grab';
      // Actualizar la posición del scroll para que el scroll automático continúe desde aquí
      // Esto se hace a través del evento resumeScroll cuando el mouse sale
    };

    // Handlers para touch
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return; // Solo un dedo
      dragStateRef.current.isDragging = true;
      dragStateRef.current.startX = e.touches[0].pageX - container.offsetLeft;
      dragStateRef.current.scrollLeft = container.scrollLeft;
      setIsDragging(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragStateRef.current.isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - dragStateRef.current.startX) * 2; // Velocidad del scroll
      container.scrollLeft = dragStateRef.current.scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      dragStateRef.current.isDragging = false;
      setIsDragging(false);
      // La posición ya está actualizada en el contenedor, el scroll automático la tomará
    };

    // Event listeners para mouse
    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Event listeners para touch
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      // Cleanup mouse events
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Cleanup touch events
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <section
      id="speakers"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.speakers.title}{' '}
            <span className="text-dbw-red">{t.speakers.titleHighlight}</span>
          </h2>
          <p className="text-lg text-dbw-gray-light max-w-3xl mx-auto mb-8">
            {t.speakers.description}
          </p>

          {/* Buscador o Botón según la prop showSearch */}
          {showSearch ? (
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.speakers.searchPlaceholder}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dbw-gray-light focus:outline-none focus:border-dbw-red transition-colors text-lg"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-dbw-gray-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <a
                href="/ponentes"
                className="inline-block px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors shadow-lg hover:shadow-xl"
              >
                {t.speakers.viewAllSpeakers}
              </a>
            </div>
          )}
        </motion.div>

        {/* Tira horizontal de ponentes con scroll automático */}
        {filteredSpeakers.length > 0 ? (
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide w-full select-none"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
              {/* Duplicar los speakers solo cuando no hay búsqueda activa para scroll infinito */}
              {(showSearch && searchQuery.trim() !== '' ? filteredSpeakers : [...filteredSpeakers, ...filteredSpeakers]).map((speaker, i) => (
                <motion.div
                  key={`${speaker.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-dbw-red/50 transition-all group flex-shrink-0"
                  style={{ width: '320px' }}
                >
                  {/* Speaker Image */}
                  <div className="relative h-64 bg-gradient-to-br from-dbw-blue to-dbw-blue-dark overflow-hidden flex items-end justify-center p-4 pb-0">
                    <Image
                      src={speaker.image}
                      alt={`${speaker.name} - Ponente de Dominicana Blockchain Week 2026`}
                      width={200}
                      height={240}
                      className="object-contain w-auto h-full max-h-[240px] select-none"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
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
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-dbw-gray-light text-lg">
              {t.speakers.noResults}
            </p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-dbw-gray-light mb-4">
            {t.speakers.moreSpeakers}
          </p>
          <a
            href="/contacto/ponente"
            className="inline-block px-8 py-4 bg-dbw-red text-white font-semibold rounded-lg hover:bg-dbw-red-dark transition-colors shadow-lg hover:shadow-xl"
          >
            {t.speakers.applyToSpeak}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

