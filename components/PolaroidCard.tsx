'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

type PolaroidCardProps = {
  image: string;
  frontText?: string;
  backText: string;
  initialRotation: number;
  initialX: number;
  initialY: number;
  zIndex?: number;
  delay?: number;
};

export default function PolaroidCard({
  image,
  frontText,
  backText,
  initialRotation,
  initialX,
  initialY,
  zIndex = 1,
  delay = 0,
}: PolaroidCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  useEffect(() => {
    const updateHeight = () => {
      if (frontRef.current) {
        const height = frontRef.current.offsetHeight;
        setCardHeight(height);
      }
    };

    updateHeight();

    // Update height when image loads
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = updateHeight;
    }

    // Also update on window resize
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [image, frontText]);

  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing pointer-events-auto"
      style={{
        x,
        y,
        rotate: initialRotation,
        zIndex: isDragging ? 100 : zIndex,
      }}
      initial={{ opacity: 0, scale: 0.8, y: initialY }}
      animate={{ 
        opacity: 1, 
        scale: 1,
      }}
      transition={{ delay, duration: 0.5 }}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ left: -2000, right: 2000, top: -2000, bottom: 2000 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ 
        scale: 1.1,
        rotate: initialRotation + 5,
      }}
    >
      <div
        className="relative"
        style={{ perspective: '1000px', width: '280px' }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ 
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front side - Polaroid style */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <div 
              ref={frontRef}
              className="bg-white p-3 shadow-2xl rounded-sm transition-shadow duration-300" 
              style={{ width: '280px' }}
            >
              {/* Image area - adapts to image proportions */}
              <div className="mb-3 rounded-sm overflow-hidden w-full">
                {image ? (
                  <img
                    src={image}
                    alt={frontText || 'Polaroid'}
                    className="w-full h-auto block pointer-events-none"
                    style={{ display: 'block', maxWidth: '100%', userSelect: 'none' }}
                    draggable="false"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm pointer-events-none">
                    <span>📷</span>
                  </div>
                )}
              </div>
              {/* Text area below image */}
              {frontText && (
                <div className="px-2 pb-2 pointer-events-none">
                  <p className="text-black text-sm font-handwritten text-center select-none">
                    {frontText}
                  </p>
                </div>
              )}
              {/* Flip button in corner */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (!isDragging) {
                    setIsFlipped(!isFlipped);
                  }
                }}
                onMouseDown={(e) => e.stopPropagation()}
                className="absolute top-2 right-2 w-6 h-6 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-xs shadow-md transition-colors z-10 pointer-events-auto"
                aria-label="Flip card"
              >
                ↻
              </button>
            </div>
          </div>

          {/* Back side - Text */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div 
              className="bg-white p-6 shadow-2xl rounded-sm flex items-center justify-center" 
              style={{ 
                width: '280px', 
                height: cardHeight ? `${cardHeight}px` : 'auto',
                minHeight: cardHeight ? `${cardHeight}px` : 'auto'
              }}
            >
              <div className="text-center pointer-events-none w-full">
                <p className="text-black text-sm leading-relaxed font-handwritten select-none">
                  {backText}
                </p>
                {/* Flip button on back */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (!isDragging) {
                      setIsFlipped(!isFlipped);
                    }
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="absolute top-2 right-2 w-6 h-6 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-xs shadow-md transition-colors z-10 pointer-events-auto"
                  aria-label="Flip card"
                >
                  ↻
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

