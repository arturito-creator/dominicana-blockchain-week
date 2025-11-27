"use client";

import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Component for animated count-up number
const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 200,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} style={{ display: 'inline' }}>
      {displayValue}
    </span>
  );
};

interface TimelineEntry {
  number: number;
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
  description?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const currentActiveIndex = useRef<number | null>(null);
  const hasEnteredSection = useRef(false);
  const lastSnapTime = useRef(0);
  const sectionEntryTime = useRef<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Auto-advance to next/previous item on scroll - one at a time
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    // Check if we're in the timeline section
    const isInTimelineSection = () => {
      if (!containerRef.current) return false;
      const rect = containerRef.current.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScroll = () => {
      // Check if initial positioning is happening
      if (containerRef.current?.getAttribute('data-initial-positioning') === 'true') {
        lastScrollY.current = window.scrollY;
        currentActiveIndex.current = 0; // Set to first item
        return;
      }

      // Only work if we're in the timeline section
      const inSection = isInTimelineSection();
      if (!inSection) {
        hasEnteredSection.current = false;
        sectionEntryTime.current = null;
        currentActiveIndex.current = null;
        return;
      }

      // Mark that we've entered the section and set entry time
      if (!hasEnteredSection.current) {
        hasEnteredSection.current = true;
        sectionEntryTime.current = Date.now();
        lastScrollY.current = window.scrollY;
        currentActiveIndex.current = 0; // Set to first item when entering
        return;
      }

      // Don't allow snapping for 2 seconds after entering the section
      if (sectionEntryTime.current && (Date.now() - sectionEntryTime.current) < 2000) {
        lastScrollY.current = window.scrollY;
        return;
      }
      
      if (isScrolling) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const currentTime = Date.now();
      
      // Ignore if scroll is too small (less than 3px) or if we just snapped recently
      if (Math.abs(scrollDelta) < 3 || (currentTime - lastSnapTime.current) < 500) {
        lastScrollY.current = currentScrollY;
        return;
      }

      lastScrollY.current = currentScrollY;

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Immediate check with very short delay
      scrollTimeout.current = setTimeout(() => {
        if (isScrolling) return;

        const viewportCenter = window.innerHeight / 2;
        let closestIndex = -1;
        let closestDistance = Infinity;

        // Find the item closest to viewport center
        itemRefs.current.forEach((itemRef, index) => {
          if (!itemRef) return;
          const rect = itemRef.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex === -1) return;

        // Determine target based on scroll direction - always move one step
        let targetIndex = closestIndex;
        const scrollDirection = scrollDelta > 0 ? 1 : -1;

        if (scrollDirection > 0 && closestIndex < data.length - 1) {
          // Scrolling down - go to next (only one step)
          targetIndex = closestIndex + 1;
        } else if (scrollDirection < 0 && closestIndex > 0) {
          // Scrolling up - go to previous (only one step)
          targetIndex = closestIndex - 1;
        }

        // Check if current item is well centered
        const currentItemRect = itemRefs.current[closestIndex]?.getBoundingClientRect();
        const currentItemCenter = currentItemRect ? currentItemRect.top + currentItemRect.height / 2 : viewportCenter;
        const currentOffset = Math.abs(currentItemCenter - viewportCenter);
        const isWellCentered = currentOffset < 150; // Item is well centered if within 150px of center
        const isIntentionallyScrolling = Math.abs(scrollDelta) > 10; // Need significant scroll (increased threshold)

        // Only advance if current item is well centered AND there's intentional scrolling
        // Don't auto-center - just don't advance if not centered
        if (!isWellCentered) {
          return; // Don't do anything if not well centered
        }

        if (targetIndex !== closestIndex && 
            targetIndex !== currentActiveIndex.current && 
            itemRefs.current[targetIndex] &&
            isIntentionallyScrolling) {
          
          setIsScrolling(true);
          currentActiveIndex.current = targetIndex;
          lastSnapTime.current = Date.now();
          
          const targetRect = itemRefs.current[targetIndex]!.getBoundingClientRect();
          const targetCenter = targetRect.top + targetRect.height / 2;
          const offset = targetCenter - viewportCenter;

          window.scrollTo({
            top: window.scrollY + offset,
            behavior: 'smooth',
          });

          setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }
      }, 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrolling, data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
      data-timeline-container="true"
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-timeline-item={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="flex justify-start pt-[8vh] md:pt-[8vh] md:gap-10 min-h-[80vh]"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-dbw-blue-dark flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-dbw-red border-2 border-dbw-red p-2" />
              </div>
              <div className="hidden md:flex md:pl-20 items-baseline gap-0">
                <span className="text-[4vh] md:text-[6vh] lg:text-[7vh] font-bold text-white leading-none">+</span>
                <span className="text-[4vh] md:text-[6vh] lg:text-[10vh] font-bold text-white leading-none">
                  <AnimatedNumber value={item.number} />
                </span>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full flex items-center">
              <div className="w-full">
                <div className="md:hidden flex items-baseline gap-0 mb-4">
                  <span className="text-[3.5vh] font-bold text-white leading-none">+</span>
                  <span className="text-[5vh] font-bold text-white leading-none">
                    <AnimatedNumber value={item.number} />
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    {item.content}
                  </div>
                  {item.imageUrl && (
                    <div className="relative w-full h-64 md:h-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden mb-4">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  {item.description && (
                    <div className="text-lg md:text-xl text-dbw-gray-light leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-dbw-red via-dbw-red/80 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

