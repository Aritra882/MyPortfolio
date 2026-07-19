import { Mail, Github, Linkedin, Twitter, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    {
      label: 'Email',
      value: 'aritrahazra701@gmail.com',
      url: 'mailto:aritrahazra701@gmail.com',
      icon: <Mail className="text-accent-signal" size={20} />,
    },
    {
      label: 'GitHub',
      value: 'github.com/Aritra882',
      url: 'https://github.com/Aritra882',
      icon: <Github className="text-accent-signal" size={20} />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/aritra-hazra-112b17326',
      url: 'https://www.linkedin.com/in/aritra-hazra-112b17326/',
      icon: <Linkedin className="text-accent-signal" size={20} />,
    },
    {
      label: 'X (Twitter)',
      value: 'x.com/hazra40192',
      url: 'https://x.com/hazra40192',
      icon: <Twitter className="text-accent-signal" size={20} />,
    }
  ];

  const systemsBuilt = [
    {
      title: 'Navi-Sense Navigation Core',
      desc: 'Predictive guidance models compiled into custom IoT sensor rigs to compute safe routing paths in real time.',
      status: 'Firmware Complete'
    },
    {
      title: 'NeuroSync Neural Streamer',
      desc: 'Wireless brain-wave measurement nodes feeding multi-frequency stream metrics into real-time visual dashboards.',
      status: 'Active Pipeline'
    },
    {
      title: 'Cloud & System Infrastructure',
      desc: 'Data normalization algorithms, relational schemas, and server routing to ingest telemetry from IoT nodes safely.',
      status: 'Production Ready'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-bg-base relative overflow-hidden px-6 md:px-12"
    >
      {/* Visual background trace element glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-trace/5 blur-[140px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            06 — Action
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-text-primary uppercase tracking-tight">
            Let's build something
          </h2>
        </div>

        {/* Two-Column split layout for high detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Systems engineered details */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-bg-surface rounded-lg w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-trace animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent-trace font-bold">
                  Open for Collaborations & Internships
                </span>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-text-primary uppercase tracking-wide">
                Engineered Capabilities
              </h3>
              
              <p className="font-sans text-base text-text-muted leading-relaxed max-w-xl">
                I translate theoretical machine learning into physical, working devices. If you need clean custom firmware, responsive stream visualizations, or relational database systems that handle live IoT telemetry, I am ready to deploy.
              </p>
            </div>

            {/* List of concrete built system modules */}
            <div className="flex flex-col gap-5">
              {systemsBuilt.map((sys) => (
                <div 
                  key={sys.title}
                  className="p-5 rounded-2xl bg-bg-surface/50 border border-bg-surface hover:border-accent-trace/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5">
                      <Terminal size={14} className="text-accent-trace group-hover:scale-110 transition-transform" />
                      <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-text-primary">
                        {sys.title}
                      </h4>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-bg-base bg-accent-trace px-2 py-0.5 rounded-md font-bold">
                      {sys.status}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-text-muted leading-relaxed pl-6">
                    {sys.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Connection channels */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-bg-surface border border-bg-surface/60 flex flex-col gap-4 mb-2">
              <div className="p-3 rounded-2xl bg-bg-base border border-bg-base text-accent-signal w-fit">
                <Cpu size={24} />
              </div>
              <h4 className="font-display text-lg font-bold text-text-primary uppercase tracking-wide">
                Direct Contact
              </h4>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                Connect via email for professional inquiries, technical consulting, or project exhibitions. View direct repositories and credentials across major developer registries below.
              </p>
            </div>

            {/* Link Stack */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl bg-bg-surface border border-bg-surface hover:border-accent-signal/30 hover:shadow-2xl hover:shadow-accent-signal/5 transition-all duration-300 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-bg-base border border-bg-base group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted font-bold">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-text-primary group-hover:text-accent-signal transition-colors break-all">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <div className="text-text-muted group-hover:text-accent-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

