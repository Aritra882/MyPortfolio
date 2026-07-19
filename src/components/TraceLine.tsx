import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TraceLineProps {
  type?: 'hero' | 'timeline';
}

export default function TraceLine({ type = 'hero' }: TraceLineProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (type === 'hero') {
    // A clean horizontal EEG-like pulse path
    const points = [
      'M 0,50',
      'H 150',
      'L 170,30 L 190,70 L 210,10 L 230,90 L 250,40 L 270,60 L 290,50', // Spike 1 (EEG/Signal heartbeat)
      'H 450',
      'L 470,25 L 485,75 L 500,12 L 515,88 L 530,35 L 545,65 L 560,50', // Spike 2 (Dynamic Pulse)
      'H 720',
      'L 740,40 L 755,60 L 770,30 L 785,70 L 800,50', // Spike 3 (Path finding trace)
      'H 1000'
    ].join(' ');

    return (
      <div className="relative w-full h-24 overflow-visible flex items-center justify-center select-none pointer-events-none">
        <svg
          viewBox="0 0 1000 100"
          className="w-full h-full text-accent-trace"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Ambient Glow Path */}
          <motion.path
            d={points}
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="blur-[3px] opacity-30"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={reducedMotion ? {} : {
              pathLength: 1,
              strokeDasharray: ['15, 30', '30, 15', '15, 30'],
              strokeDashoffset: [0, -100]
            }}
            transition={reducedMotion ? {} : {
              pathLength: { duration: 2.2, ease: 'easeOut' },
              strokeDasharray: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              strokeDashoffset: { duration: 15, repeat: Infinity, ease: 'linear' }
            }}
          />
          {/* Main Sharp Path */}
          <motion.path
            d={points}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={reducedMotion ? {} : {
              pathLength: 1
            }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
          />
        </svg>
      </div>
    );
  }

  // Vertical Spine for Experience & Achievements section (Pathfinding + Connector)
  const verticalPath = [
    'M 20,0',
    'C 30,50 10,100 20,150',
    'C 30,200 10,250 20,300',
    'C 30,350 10,400 20,450',
    'C 30,500 10,550 20,600',
    'C 30,650 10,700 20,750',
    'C 30,800 10,850 20,900',
    'C 30,950 10,1000 20,1050',
    'L 20,1200'
  ].join(' ');

  return (
    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-10 z-0 overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 40 1200"
        className="w-full h-full text-accent-trace opacity-40"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Glow */}
        <motion.path
          d={verticalPath}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="blur-[2px] opacity-25"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={reducedMotion ? {} : { pathLength: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        {/* Crisp Line */}
        <motion.path
          d={verticalPath}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 4"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={reducedMotion ? {} : { pathLength: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
