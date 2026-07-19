import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <footer className="bg-bg-surface border-t border-bg-base py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Monogram and Copyright info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display text-2xl font-black tracking-tighter text-text-primary hover:text-accent-signal transition-colors cursor-pointer group"
          >
            A<span className="text-accent-signal group-hover:text-text-primary transition-colors">H</span>
          </button>
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
            © 2026 Aritra Hazra. All rights reserved.
          </span>
        </div>

        {/* Center: Nav links repeat */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-signal transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3.5 rounded-xl bg-bg-base border border-bg-base text-text-muted hover:text-accent-signal hover:border-accent-signal/20 transition-all duration-300 group cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
