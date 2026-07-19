import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import TraceLine from './TraceLine';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Aritra882', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/aritra-hazra-112b17326/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/hazra40192', label: 'X' },
  ];

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden bg-bg-base px-6 md:px-12"
    >
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-trace/5 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full bg-accent-signal/5 blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-10"
        >
          {/* Subheading Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-signal animate-pulse" />
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent-signal font-medium">
              AI/ML · IoT · Systems Engineering
            </span>
          </motion.div>

          {/* Asymmetric Poster-style Headline */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-text-primary uppercase leading-[0.85] select-none">
              <span className="block">Building signal</span>
              <span className="block text-accent-signal mt-2">into systems</span>
            </h1>
          </motion.div>

          {/* Continuous signature wave line runs right through the layout */}
          <motion.div
            variants={itemVariants}
            className="my-4 py-2 border-y border-bg-surface/50"
          >
            <TraceLine type="hero" />
          </motion.div>

          {/* Hero Content Body: Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Intro paragraph & Call to action */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
              <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
                I'm a 3rd-year B.Tech CSE (AI/ML) student at Narula Institute of Technology. I build at the intersection of intelligence and hardware — predictive navigation, wearable sensing, and the software that makes sense of both. Outside of that, I'm digging into cloud architecture and database systems.
              </p>

              <div className="flex flex-wrap gap-4 items-center mt-2">
                <button
                  onClick={handleExploreClick}
                  className="font-mono text-xs uppercase tracking-widest bg-accent-signal text-bg-base font-bold px-6 py-4 rounded-xl hover:bg-text-primary transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-accent-signal/10 cursor-pointer"
                >
                  Explore Work
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Social icons */}
                <div className="flex items-center gap-3 ml-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-3 rounded-xl bg-bg-surface hover:bg-accent-signal hover:text-bg-base transition-all duration-300 text-text-primary border border-bg-surface"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Fact blocks side panel */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6 w-full"
            >
              <div className="flex-1 p-6 rounded-2xl bg-bg-surface border border-bg-surface hover:border-accent-signal/20 transition-all duration-300">
                <div className="font-mono text-4xl md:text-5xl font-bold text-accent-signal mb-1">
                  9.14
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">
                  academic merit
                </div>
                <p className="font-sans text-xs text-text-primary">
                  CGPA over 3 years of rigorous study in B.Tech CSE (AI/ML).
                </p>
              </div>

              <div className="flex-1 p-6 rounded-2xl bg-bg-surface border border-bg-surface hover:border-accent-signal/20 transition-all duration-300">
                <div className="font-mono text-4xl md:text-5xl font-bold text-accent-signal mb-1">
                  3
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">
                  hackathon podiums
                </div>
                <p className="font-sans text-xs text-text-primary">
                  National-level hackathon finishes demonstrating agile hardware + software execution.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
