import { motion } from 'motion/react';
import { Code2, BrainCircuit, Wrench, Layers, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={18} className="text-accent-signal" />,
      skills: ['Java', 'C++', 'Python']
    },
    {
      title: 'ML/AI & Data',
      icon: <BrainCircuit size={18} className="text-accent-trace" />,
      skills: ['NumPy', 'Pandas', 'Scikit-Learn', 'Anaconda']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={18} className="text-accent-signal" />,
      skills: ['Git', 'GitHub', 'Docker', 'AWS']
    },
    {
      title: 'Foundations',
      icon: <Layers size={18} className="text-accent-trace" />,
      skills: ['Data Structures & Algorithms', 'Web Development', 'App Development']
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-bg-base relative overflow-hidden px-6 md:px-12"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-trace/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            02 — Capabilities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tight">
            Skills
          </h2>
        </div>

        {/* Asymmetric Grid of Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-bg-surface border border-bg-surface hover:border-accent-signal/15 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of Column */}
                <div className="flex items-center gap-3 border-b border-bg-base pb-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-bg-base border border-bg-base">
                    {category.icon}
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary font-bold">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 py-2 px-3 rounded-xl bg-bg-base/40 hover:bg-bg-base transition-colors duration-200 group border border-transparent hover:border-bg-base"
                    >
                      <CheckCircle2 size={13} className="text-accent-signal/60 group-hover:text-accent-signal transition-colors flex-shrink-0" />
                      <span className="font-sans text-xs text-text-muted group-hover:text-text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimalist Column Indicator Decorator */}
              <div className="mt-8 flex justify-end">
                <span className="font-mono text-[9px] text-bg-base bg-text-muted/10 px-2 py-1 rounded">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
