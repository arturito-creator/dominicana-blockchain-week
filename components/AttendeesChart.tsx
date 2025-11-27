'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

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

  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col md:flex-row items-stretch min-h-[180px] md:min-h-[250px] rounded-lg overflow-hidden shadow-2xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dbw-blue px-4 md:px-8 py-6 md:py-12 flex items-center justify-center md:justify-start min-w-[180px] md:min-w-[250px]"
        >
          <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-wide leading-tight text-center md:text-left">
            ASISTENTES
            <br />
            POR PAISES
          </h3>
        </motion.div>

        {/* Chart Section */}
        <div className="flex-1 flex flex-row items-stretch overflow-hidden">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.label}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                isInView
                  ? { scaleX: 1, opacity: 1 }
                  : { scaleX: 0, opacity: 0 }
              }
              transition={{
                duration: 1.2,
                delay: 0.4 + index * 0.15,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              whileHover={{ 
                scale: 1.08, 
                zIndex: 10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onHoverStart={() => setHoveredSegment(index)}
              onHoverEnd={() => setHoveredSegment(null)}
              className={`${getColorClass(segment.color)} relative flex items-center justify-center px-1 md:px-3 lg:px-4 transition-all duration-300 cursor-pointer group origin-left`}
              style={{ width: `${segment.percentage}%` }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.15,
                }}
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
                className={`${getTextColorClass(segment.textColor)} text-xs md:text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wide text-center leading-tight px-1`}
              >
                <span className="block whitespace-nowrap">{segment.percentage}%</span>
                <span className="block whitespace-nowrap">{segment.label}</span>
              </motion.div>

              {/* Animated hover effect overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  opacity: 0.15,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="absolute inset-0 bg-black pointer-events-none rounded-sm"
              />

              {/* Pulse effect on hover */}
              {hoveredSegment === index && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.3 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 border-2 border-white/50 rounded-sm pointer-events-none"
                />
              )}
            </motion.div>
          ))}
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

