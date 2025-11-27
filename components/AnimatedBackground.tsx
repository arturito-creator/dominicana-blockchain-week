'use client';

import { useEffect, useRef } from 'react';

/**
 * Animated background component adapted from portfolio project.
 * Creates organic wave lines that react to mouse movement with a magnetic field effect.
 * Uses gradient colors: #001d66 → #00377c
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let lines: Array<{ baseY: number; color: string }> = [];
    const gap = 35; // Vertical spacing between lines
    let time = 0;
    
    // Mouse position (target and smooth interpolated)
    const mouse = { x: -1000, y: -1000 };
    const smoothMouse = { x: 0, y: 0 };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      
      // Set display size (CSS pixels)
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Set actual size in memory (scaled for device pixel ratio)
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Reset transform and scale the drawing context to match device pixel ratio
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      
      // Update width/height for drawing calculations (in CSS pixels)
      width = window.innerWidth;
      height = window.innerHeight;
      
      initLines();
    };

    const initLines = () => {
      lines = [];
      // Create lines covering full height
      for (let y = -50; y < height + 50; y += gap) {
        // Use white tones with higher opacity for better visibility
        const opacity = Math.random() * 0.2 + 0.7; // More visible: 0.3 to 0.5
        lines.push({
          baseY: y,
          // Using pure white for maximum visibility on dark blue background
          color: `rgba(255, 255, 255, ${opacity})`, // Pure white with good visibility
        });
      }
    };

    // Linear interpolation for smooth movement (Lerp)
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const draw = () => {
      if (!ctx) return;
      
      // Clear canvas (using CSS pixel dimensions since context is scaled)
      ctx.clearRect(0, 0, width, height);
      
      // Increase time for automatic wave movement
      time += 0.008;
      
      // Smooth mouse position (inertia)
      smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.1);
      smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.1);

      ctx.lineWidth = 0.3; // Thinner lines for more subtle effect

      lines.forEach((line, i) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;

        // Draw line point by point from left to right
        for (let x = 0; x <= width; x += 15) {
          // 1. Automatic movement (constant waves)
          // Combine two sine waves for non-repetitive pattern
          const noise =
            Math.sin(x * 0.0025 + time + i * 0.1) * 15 +
            Math.cos(x * 0.008 - time * 0.5) * 8;

          // 2. Mouse reaction (magnetic field effect)
          const dx = x - smoothMouse.x;
          const dy = line.baseY - smoothMouse.y;

          // Distance between current line point and mouse
          const dist = Math.sqrt(dx * dx + dy * dy);
          const interactionRadius = 350; // Effect radius
          let interaction = 0;

          if (dist < interactionRadius) {
            // Calculate force (stronger when closer)
            const force = (interactionRadius - dist) / interactionRadius;

            // Smooth curve function (simple Gaussian bell curve)
            // Mouse "pushes" lines down (or up if you change the sign)
            interaction = Math.sin(force * Math.PI) * 80;
          }

          // Final Y position = Base + Automatic Noise + Mouse Interaction
          const y = line.baseY + noise + interaction;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Event listeners
    const handleResize = () => {
      resize();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize
    resize();
    draw();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-100"
      aria-hidden="true"
    />
  );
}

