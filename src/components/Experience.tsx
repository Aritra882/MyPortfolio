import { motion } from 'motion/react';
import { Trophy, Briefcase, Award, Calendar, ExternalLink } from 'lucide-react';
import TraceLine from './TraceLine';

export default function Experience() {
  const timelineData = [
    {
      date: 'Mar 2026',
      title: 'CarrierNest IT Solutions',
      role: 'Internship',
      type: 'internship',
      details: 'Gaining industry-focused exposure in application flows, hardware interfacing, and systems development.',
    },
    {
      date: 'Apr 2026',
      title: 'Hack-O-NiT 2026 (AI Utkarsh)',
      role: '🏆 1st Position — Narula Institute of Technology',
      type: 'win',
      details: 'Engineered high-quality AI-driven models linked with edge-hardware triggers in an intense competitive environment.',
    },
    {
      date: '2026',
      title: 'INNOVATEX 1.0',
      role: '🏆 Winner',
      type: 'win',
      details: 'Showcased neural-sensor integration projects, securing first prize for system implementation.',
    },
    {
      date: '2026',
      title: 'IdeaStorm 2026, Kritanj\'26',
      role: '🥈 1st Runner-up — Project Exhibition',
      type: 'win',
      details: 'Demonstrated real-time pathfinding capabilities and adaptive guidance modules under strict evaluation rubrics.',
    },
    {
      date: 'Jan–Apr 2026',
      title: 'NPTEL: Principles of Management',
      role: 'Elite Certificate (Top 5% — 88%) — IIT Roorkee',
      type: 'cert',
      details: 'Completed advanced certification on agile administration, project workflows, and systems coordination.',
    },
    {
      date: 'Mar 2026',
      title: 'Prompt Engineering Certification',
      role: 'Institute for Advanced Learning & Skill Development',
      type: 'cert',
      details: 'Certified in semantic optimization, LLM parameter configurations, and complex prompt layout patterns.',
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'win':
        return <Trophy size={16} className="text-accent-signal" />;
      case 'internship':
        return <Briefcase size={16} className="text-accent-trace" />;
      default:
        return <Award size={16} className="text-text-muted" />;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'win':
        return 'border-accent-signal/30 hover:border-accent-signal';
      case 'internship':
        return 'border-accent-trace/30 hover:border-accent-trace';
      default:
        return 'border-bg-surface hover:border-text-muted/30';
    }
  };

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-bg-base relative overflow-hidden px-6 md:px-12"
    >
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] rounded-full bg-accent-signal/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            04 — History
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tight">
            Experience & Achievements
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Vertical Wavy Trace Line Spine */}
          <TraceLine type="timeline" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-10 md:gap-14 relative z-10">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title + index}
                  className={`flex flex-col md:flex-row items-stretch w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Spacing card columns for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Marker Node Center point on desktop, left-point on mobile */}
                  <div className="relative flex items-center justify-start md:justify-center w-8 md:w-0 z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-bg-surface border-2 flex items-center justify-center shadow-lg ${
                        item.type === 'win'
                          ? 'border-accent-signal text-accent-signal shadow-accent-signal/15'
                          : item.type === 'internship'
                          ? 'border-accent-trace text-accent-trace shadow-accent-trace/15'
                          : 'border-text-muted text-text-muted'
                      }`}
                    >
                      {getIcon(item.type)}
                    </motion.div>
                  </div>

                  {/* Actual Card Node */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`p-6 md:p-8 rounded-2xl bg-bg-surface border transition-all duration-300 ${getBorderColor(
                        item.type
                      )}`}
                    >
                      {/* Date details and tags */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-accent-signal">
                          <Calendar size={12} />
                          <span className="font-mono text-xs uppercase tracking-widest font-bold">
                            {item.date}
                          </span>
                        </div>
                        
                        <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted bg-bg-base/50 px-2 py-0.5 rounded-md border border-bg-base">
                          {item.type}
                        </span>
                      </div>

                      {/* Heading of node */}
                      <div className="flex flex-col gap-1 mb-3">
                        <h3 className="font-display text-lg md:text-xl font-bold text-text-primary tracking-tight">
                          {item.title}
                        </h3>
                        <p className={`font-sans text-xs md:text-sm font-medium ${
                          item.type === 'win' ? 'text-accent-signal' : 'text-accent-trace'
                        }`}>
                          {item.role}
                        </p>
                      </div>

                      <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                        {item.details}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
