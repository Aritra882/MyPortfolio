import { motion } from 'motion/react';
import { Cpu, Database, Network, Eye } from 'lucide-react';

export default function About() {
  const tags = ['AI/ML', 'IoT', 'Cloud', 'Systems Design'];

  const coreValues = [
    {
      icon: <Cpu className="text-accent-signal" size={24} />,
      title: 'Real Intelligence',
      desc: 'Deploying edge models on responsive hardware instead of running purely in theoretical clouds.'
    },
    {
      icon: <Network className="text-accent-trace" size={24} />,
      title: 'Signal Gathering',
      desc: 'Intercepting raw data feeds like bio-signals (EEG) and physical paths to translate them into real action.'
    },
    {
      icon: <Database className="text-accent-signal" size={24} />,
      title: 'Robust Core',
      desc: 'Building sound database layouts, algorithms, and cloud pathways to route information safely.'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-bg-surface relative overflow-hidden px-6 md:px-12 border-y border-bg-base"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Tag System */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                01 — About
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tight">
                About
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 bg-bg-base text-accent-signal rounded-lg border border-bg-base/50 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative layout design */}
            <div className="hidden lg:block mt-8 p-6 rounded-2xl bg-bg-base/40 border border-bg-base/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                <Eye size={120} className="text-accent-trace" />
              </div>
              <p className="font-mono text-xs text-text-muted leading-relaxed relative z-10">
                // System Status: Ready<br />
                // Track: B.Tech CSE (AI/ML)<br />
                // Year: 3rd Year student<br />
                // Focus: Edge Computing + EEG Sensing
              </p>
            </div>
          </div>

          {/* Right Column: Bio Content and Core Focus */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-lg md:text-xl text-text-primary leading-relaxed">
                I like building things that sense the world and respond to it — whether that's a navigation system reasoning about the safest path, or a wearable reading the signals your brain gives off.
              </p>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                My work sits between AI/ML and IoT: models are only useful once they're connected to something real. Right now I'm rounding that out with cloud architecture and database systems, so I can take a project from sensor to server to screen.
              </p>
            </div>

            {/* Subgrid cards of skill philosophies */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-4">
              {coreValues.map((val) => (
                <div
                  key={val.title}
                  className="p-5 rounded-2xl bg-bg-base border border-bg-base hover:border-accent-signal/10 transition-all duration-300"
                >
                  <div className="mb-4">{val.icon}</div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-text-primary mb-2">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
