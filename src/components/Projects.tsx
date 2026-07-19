import { motion } from 'motion/react';
import { ExternalLink, Github, Route, Cpu, Activity, Brain } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'navi-sense',
      title: 'Navi-Sense',
      subtitle: 'Predictive Navigation & Guidance System using IoT and AI-based assistance.',
      tags: ['IoT', 'Predictive AI', 'Embedded Systems'],
      github: 'https://github.com/Aritra882/NaviSense',
      visualType: 'path',
      accentColor: '#E8B04B', // accent-signal
    },
    {
      id: 'neurosync',
      title: 'NeuroSync',
      subtitle: 'Wireless earbuds with integrated EEG sensors, streaming brain-activity data to a custom real-time dashboard.',
      tags: ['IoT', 'EEG / BCI', 'Data Visualization'],
      github: 'https://github.com/Aritra882/sentix',
      visualType: 'waveform',
      accentColor: '#5EEAD4', // accent-trace
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-bg-surface relative overflow-hidden px-6 md:px-12 border-y border-bg-base"
    >
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-accent-signal/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            03 — Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tight">
            Projects
          </h2>
        </div>

        {/* Vertical List of Editorial Project Cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual Representation Graphic Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                  <div className="group relative rounded-3xl bg-bg-base/60 border border-bg-base hover:border-text-muted/15 p-8 md:p-12 aspect-[16/10] overflow-hidden flex items-center justify-center transition-all duration-500 shadow-2xl">
                    {/* Visual Decor Background Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    {/* Conditional SVGs depending on Visual Type */}
                    {project.visualType === 'path' ? (
                      /* Navi-Sense Path Graphic */
                      <svg viewBox="0 0 400 240" className="w-full h-full max-w-sm" fill="none">
                        {/* Grid Nodes */}
                        <circle cx="80" cy="180" r="4" fill="#16181A" stroke="#5EEAD4" strokeWidth="1" className="opacity-40" />
                        <circle cx="160" cy="100" r="4" fill="#16181A" stroke="#5EEAD4" strokeWidth="1" className="opacity-40" />
                        <circle cx="240" cy="160" r="4" fill="#16181A" stroke="#5EEAD4" strokeWidth="1" className="opacity-40" />
                        <circle cx="320" cy="60" r="4" fill="#16181A" stroke="#5EEAD4" strokeWidth="1" className="opacity-40" />
                        
                        {/* Network connection line shadows */}
                        <path d="M80,180 L160,100 M160,100 L240,160 M240,160 L320,60" stroke="#16181A" strokeWidth="1.5" />
                        
                        {/* Path traces (Accent Signal & Trace) */}
                        <motion.path
                          d="M80,180 L160,100 L240,160 L320,60"
                          stroke="#E8B04B"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0.1 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: 'easeInOut' }}
                          className="drop-shadow-[0_0_8px_rgba(232,176,75,0.4)]"
                        />

                        {/* Secondary Trace Line */}
                        <motion.path
                          d="M80,180 C120,130 200,200 240,160 C280,120 300,80 320,60"
                          stroke="#5EEAD4"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
                        />

                        {/* Interactive Pulsing Node Marker */}
                        <motion.circle
                          cx="240"
                          cy="160"
                          r="6"
                          fill="#E8B04B"
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        />
                        
                        {/* Interactive Node Marker 2 */}
                        <motion.circle
                          cx="160"
                          cy="100"
                          r="4"
                          fill="#5EEAD4"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        />
                      </svg>
                    ) : (
                      /* NeuroSync Waveform Graphic */
                      <svg viewBox="0 0 400 240" className="w-full h-full max-w-sm" fill="none">
                        {/* Static brain-shape outline decor (super abstract) */}
                        <path d="M 120,120 C 120,80 150,60 200,60 C 250,60 280,80 280,120 C 280,160 250,180 200,180 C 150,180 120,160 120,120" stroke="#16181A" strokeWidth="1" className="opacity-50" />

                        {/* Signal waves (Multiple overlapped) */}
                        <motion.path
                          d="M 50,120 Q 100,60 150,140 T 250,110 T 350,120"
                          stroke="#5EEAD4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0.1 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.8, ease: 'easeInOut' }}
                          className="drop-shadow-[0_0_6px_rgba(94,234,212,0.3)]"
                        />

                        <motion.path
                          d="M 50,120 Q 90,160 160,100 T 260,130 T 350,120"
                          stroke="#E8B04B"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeDasharray="3 3"
                          initial={{ pathLength: 0.1 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.2 }}
                        />

                        {/* Frequency Bar Displays at the bottom */}
                        <rect x="150" y="160" width="4" height="20" rx="2" fill="#5EEAD4" className="opacity-80" />
                        <rect x="160" y="150" width="4" height="30" rx="2" fill="#5EEAD4" className="opacity-80" />
                        <rect x="170" y="140" width="4" height="40" rx="2" fill="#E8B04B" />
                        <rect x="180" y="155" width="4" height="25" rx="2" fill="#5EEAD4" className="opacity-80" />
                        <rect x="190" y="145" width="4" height="35" rx="2" fill="#5EEAD4" />
                        <rect x="200" y="130" width="4" height="50" rx="2" fill="#E8B04B" />
                        <rect x="210" y="140" width="4" height="40" rx="2" fill="#5EEAD4" />
                        <rect x="220" y="150" width="4" height="30" rx="2" fill="#5EEAD4" className="opacity-80" />
                        <rect x="230" y="162" width="4" height="18" rx="2" fill="#E8B04B" />
                      </svg>
                    )}

                    {/* Floating Tech Badges */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-bg-base/30">
                      {project.visualType === 'path' ? (
                        <>
                          <Route size={12} className="text-accent-signal" />
                          <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Predictive Path</span>
                        </>
                      ) : (
                        <>
                          <Brain size={12} className="text-accent-trace" />
                          <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">EEG Waveform</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Text Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col gap-6`}>
                  {/* Category */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-signal font-bold">
                      0{index + 1} // Project Focus
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-base text-text-muted leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-bg-base text-text-muted border border-bg-base rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-bg-base bg-text-primary hover:bg-accent-signal hover:shadow-lg hover:shadow-accent-signal/5 transition-all duration-300 font-bold px-5 py-3 rounded-xl flex items-center gap-2 group cursor-pointer"
                    >
                      <Github size={14} />
                      Source Code
                      <ExternalLink size={12} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-accent-signal transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>View repository</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
