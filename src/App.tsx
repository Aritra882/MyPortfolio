/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-accent-signal selection:text-bg-base font-sans antialiased">
      {/* Sticky navigation panel */}
      <Navbar />

      {/* Main content grid flows */}
      <main>
        {/* Dynamic hero landing */}
        <Hero />

        {/* About section panels */}
        <About />

        {/* Skills inventory columns */}
        <Skills />

        {/* Featured dual portfolio project details */}
        <Projects />

        {/* Wavy trace-lined timeline of accolades and internships */}
        <Experience />

        {/* B.Tech & course specialization metrics */}
        <Education />

        {/* CTA mailto and social channel panels */}
        <Contact />
      </main>

      {/* Compact footer anchor */}
      <Footer />
    </div>
  );
}

