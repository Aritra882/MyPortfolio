import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, CheckSquare, MapPin } from 'lucide-react';

export default function Education() {
  const courses = [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Internet of Things (IoT)',
    'Database Management Systems',
    'Data Structures & Algorithms',
    'Cloud Computing'
  ];

  return (
    <section
      id="education"
      className="py-24 md:py-32 bg-bg-surface relative overflow-hidden px-6 md:px-12 border-y border-bg-base"
    >
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] rounded-full bg-accent-trace/5 blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            05 — Academia
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main University Info Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="h-full p-8 md:p-12 rounded-3xl bg-bg-base border border-bg-base hover:border-accent-signal/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-bg-surface border border-bg-surface text-accent-signal">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      Affiliated with MAKAUT
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-text-primary tracking-tight">
                      Narula Institute of Technology
                    </h3>
                  </div>
                </div>

                {/* Major Description */}
                <div className="flex flex-col gap-3 mb-8">
                  <h4 className="font-sans text-lg md:text-xl font-bold text-accent-signal">
                    B.Tech, Computer Science & Engineering (AI/ML)
                  </h4>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    Undergoing a rigorous, hardware-focused and algorithm-centric degree path specializing in artificial neural architectures, real-time edge predictions, and embedded systems integration.
                  </p>
                </div>

                {/* Info row metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-bg-surface">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted font-mono text-[10px] uppercase tracking-widest">
                      <Calendar size={11} className="text-accent-trace" />
                      <span>Timeline</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-text-primary">
                      Expected 2028
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted font-mono text-[10px] uppercase tracking-widest">
                      <Award size={11} className="text-accent-signal" />
                      <span>Standing</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-text-primary">
                      CGPA: 9.14
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-text-muted font-mono text-[10px] uppercase tracking-widest">
                      <MapPin size={11} className="text-accent-trace" />
                      <span>Location</span>
                    </div>
                    <span className="font-sans text-sm font-bold text-text-primary">
                      Kolkata, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Coursework Side Panel */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="h-full p-8 rounded-3xl bg-bg-base/40 border border-bg-base/60 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-text-primary font-bold mb-6 border-b border-bg-base pb-4">
                  // Core Coursework
                </h4>

                <div className="flex flex-col gap-3">
                  {courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-3 py-1.5 px-2 hover:bg-bg-base/80 rounded-xl transition-colors"
                    >
                      <CheckSquare size={14} className="text-accent-trace/70" />
                      <span className="font-sans text-xs md:text-sm text-text-muted">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-bg-base/60">
                <p className="font-mono text-[10px] text-text-muted">
                  // Merging computational models with actual physiological & spatial trackers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
