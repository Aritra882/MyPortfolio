# Aritra Hazra — Personal Portfolio Website

A bespoke, high-performance personal portfolio website engineered for **Aritra Hazra**, a 3rd-year B.Tech CSE (AI/ML) student specializing in the intersection of Artificial Intelligence, Machine Learning, and IoT hardware. 

This repository houses a fully responsive, visually striking Single Page Application (SPA) designed with a custom, high-contrast dark visual identity that avoids cookie-cutter developer templates, utilizing meticulous asymmetric grids and tailored typographic hierarchies.

## 🎨 Visual Identity & Token System

The design is engineered around a custom token system with deliberate typographic and color restraint:

*   **Colors:**
    *   `bg-base` (`#0B0D0E`): Warm-neutral near-black canvas.
    *   `bg-surface` (`#16181A`): Elevated card and panel surfaces.
    *   `accent-signal` (`#E8B04B`): Warm gold reserved exclusively for primary actions, active state markers, and highlights.
    *   `accent-trace` (`#5EEAD4`): Electric teal used strictly for live data, signal telemetry paths, and wave trace graphics.
    *   `text-primary` (`#F3EFE6`): High-contrast soft cream text.
    *   `text-muted` (`#8B8F94`): Low-intensity slate for secondary details.
*   **Typography:**
    *   *Display:* **Space Grotesk** (Geometric, bold, technical headings).
    *   *Body:* **Inter** (Highly readable sans-serif for descriptions).
    *   *Utility/Data:* **JetBrains Mono** (Technical, precise monospace for dates, tags, and statistics).

---

## ⚡ Signature Feature: The Continuous Trace Line

The site's visual anchor is a **single continuous animated trace line** (`<TraceLine />` component). 
*   **Hero Section:** It acts as a live, pulsing EEG neural waveform—referencing Aritra's brain-computer interface project (**NeuroSync**).
*   **Experience & Achievements Section:** It transitions into a vertical timeline spine—symbolizing pathfinding and navigation tracks—referencing Aritra's IoT guidance system (**Navi-Sense**).
*   *Reduced Motion Support:* The site fully respects `prefers-reduced-motion` systems, resolving to clean, static end-states for users who opt out of animations.

---

## 📂 Section breakdown

1.  **Navbar:** Sticky and compact header featuring a Space Grotesk monogram (`AH`) and high-contrast monospace navigational anchors that scroll smoothly across the SPA sections.
2.  **Hero:** Oversized poster-style headline pairing Aritra's focus on hardware signals with real academic metrics (`9.14 CGPA` and `3` national-level hackathon podium finishes).
3.  **About:** A conceptual focus area defining his development philosophy: bringing AI models out of cloud sandboxes and onto responsive physical devices.
4.  **Skills:** An asymmetric grid grouping Python, C++, Java, Scikit-Learn, Docker, AWS, and core DSA/web fundamentals into clear capability columns.
5.  **Projects:** High-impact editorial treatment for Aritra's flagship developments:
    *   **Navi-Sense:** Predictive navigation and pathfinding guidance system using IoT sensor rigs.
    *   **NeuroSync:** EEG-integrated wireless earbud streamer coupled to a live Web dashboard.
6.  **Experience & Achievements:** An interactive timeline containing professional milestones (CarrierNest IT Solutions internship, Hack-O-NiT 🏆 1st Position, INNOVATEX 1.0 winner, and NPTEL academic honors).
7.  **Education:** Detailed academic card summarizing coursework and GPA at Narula Institute of Technology.
8.  **Contact:** A detailed connection board featuring integrated status trackers for active systems, mailto links, and certified repository endpoints.

---

## 🛠️ Technology Stack

*   **Runtime/Framework:** React 19.0.1 & TypeScript (ESNext)
*   **Build Tool:** Vite 6.2.3
*   **Styling Engine:** Tailwind CSS v4.1.14 (fully integrated native theme variables)
*   **Motion Framework:** Motion (formerly Framer Motion) v12.23.24
*   **Iconography:** Lucide React

---

## 🚀 Local Setup & Installation

To run this project locally, ensure you have Node.js or Bun installed, then follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Aritra882/MyPortfolio.git
    cd MyPortfolio
    ```

2.  **Install Dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Bun:
    ```bash
    bun install
    ```

3.  **Launch the Development Server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using Bun:
    ```bash
    bun run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal outputs) to view the site.

4.  **Production Compile:**
    To compile optimized production static bundles (placed in `dist/`):
    ```bash
    npm run build
    ```

---

## 💼 Creator Details

Developed with precision and care for **Aritra Hazra**.
*   **Email:** [aritrahazra701@gmail.com](mailto:aritrahazra701@gmail.com)
*   **GitHub:** [@Aritra882](https://github.com/Aritra882)
*   **LinkedIn:** [Aritra Hazra](https://www.linkedin.com/in/aritra-hazra-112b17326/)
*   **Twitter/X:** [@hazra40192](https://x.com/hazra40192)
