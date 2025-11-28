'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChartSegment {
  percentage: number;
  label: string;
  color: 'red' | 'white' | 'blue';
  textColor: 'white' | 'blue';
}

const segments: ChartSegment[] = [
  { percentage: 70, label: 'LATAM', color: 'red', textColor: 'white' },
  { percentage: 20, label: 'EMEA', color: 'white', textColor: 'blue' },
  { percentage: 5, label: 'EEUU', color: 'blue', textColor: 'white' },
  { percentage: 5, label: 'ASIA', color: 'white', textColor: 'blue' },
];

interface AttendeesChartProps {
  imageUrl?: string;
  description?: string;
}

export default function AttendeesChart({ imageUrl, description }: AttendeesChartProps = {} as AttendeesChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const { t } = useLanguage();

  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-dbw-red';
      case 'blue':
        return 'bg-dbw-blue';
      case 'white':
        return 'bg-white';
      default:
        return 'bg-white';
    }
  };

  const getTextColorClass = (textColor: string) => {
    switch (textColor) {
      case 'white':
        return 'text-white';
      case 'blue':
        return 'text-dbw-blue';
      default:
        return 'text-white';
    }
  };

  const getBarGradient = (color: string) => {
    switch (color) {
      case 'red':
        return 'from-dbw-red to-red-700';
      case 'blue':
        return 'from-dbw-blue to-blue-700';
      case 'white':
        return 'from-white to-gray-200';
      default:
        return 'from-white to-gray-200';
    }
  };

  return (
    <div ref={ref} className="w-full">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-center md:text-left lowercase">
            {t.about.stats.attendeesByCountry.first}{' '}
            <span className="text-dbw-red">{t.about.stats.attendeesByCountry.second}</span>
          </h3>
        </motion.div>

        {/* Vertical Bar Chart Section */}
        <div className="relative">
          {/* Chart area with grid lines */}
          <div className="relative flex flex-row items-end justify-center gap-3 md:gap-6 lg:gap-8 h-64 md:h-80 lg:h-96">
            {/* Chart Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              {[0, 25, 50, 75, 100].map((line, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-white"
                  style={{
                    bottom: `${line}%`,
                  }}
                />
              ))}
            </div>
            
            {segments.map((segment, index) => {
              const maxHeight = 100;
              const minHeight = 8; // Minimum height for small bars to be visible
              const calculatedHeight = (segment.percentage / 100) * maxHeight;
              const barHeight = Math.max(calculatedHeight, minHeight);

              return (
                <motion.div
                  key={segment.label}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scaleY: 1, opacity: 1 }
                      : { scaleY: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1], // Custom easing for smooth animation
                  }}
                  onHoverStart={() => setHoveredSegment(index)}
                  onHoverEnd={() => setHoveredSegment(null)}
                  className="flex flex-col items-center justify-end flex-1 h-full max-w-[120px] cursor-pointer group relative z-10"
                  style={{ originY: 1 }}
                >
                  {/* Bar Container */}
                  <motion.div
                    className={`relative w-full rounded-t-lg ${getColorClass(segment.color)} shadow-lg overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-white/30`}
                    style={{ height: `${barHeight}%` }}
                    whileHover={{
                      scale: 1.1,
                      y: -8,
                      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                    }}
                  >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getBarGradient(segment.color)} opacity-90`} />
                  
                  {/* Animated Fill Effect */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={
                      isInView
                        ? { scaleY: 1 }
                        : { scaleY: 0 }
                    }
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`absolute inset-0 ${getColorClass(segment.color)}`}
                    style={{ originY: 1 }}
                  />

                  {/* Shimmer Effect on Hover */}
                  {hoveredSegment === index && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 h-full"
                    />
                  )}

                  {/* Percentage Label inside bar */}
                  <div className={`absolute inset-0 flex items-center justify-center ${getTextColorClass(segment.textColor)} font-bold text-sm md:text-base lg:text-lg`}>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                      }}
                    >
                      {segment.percentage}%
                    </motion.span>
                  </div>
                </motion.div>

                {/* Tooltip on Hover */}
                {hoveredSegment === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute -top-12 bg-white text-dbw-blue px-3 py-2 rounded-lg shadow-xl font-bold text-sm whitespace-nowrap z-20"
                    style={{ originY: 1 }}
                  >
                    {segment.label}: {segment.percentage}%
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </motion.div>
                )}
                </motion.div>
              );
            })}
          </div>
          
          {/* Labels below bars */}
          <div className="flex flex-row items-start justify-center gap-3 md:gap-6 lg:gap-8 mt-3">
            {segments.map((segment, index) => (
              <motion.div
                key={`label-${segment.label}`}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{
                  duration: 0.6,
                  delay: 1.0 + index * 0.1,
                }}
                className="flex-1 max-w-[120px] text-white text-xs md:text-sm lg:text-base font-bold uppercase tracking-wide text-center"
              >
                {segment.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Text and Image Section */}
      <div className="mt-8 space-y-6">
        {/* Description Text */}
        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-dbw-gray-light text-base md:text-lg leading-relaxed"
          >
            {description}
          </motion.div>
        )}

        {/* Image Space */}
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative w-full h-64 md:h-80 lg:h-96 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
          >
            <Image
              src={imageUrl}
              alt="Asistentes"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

