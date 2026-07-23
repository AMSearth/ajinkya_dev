# PROJECT CONTEXT & DEVELOPER MEMORY 🧠

> **Project Name**: Ajinkya — Senior Web Developer Portfolio Website  
> **Theme**: Tokyo Night (Dark Navy `#1a1b26`, Night `#16161e`, Card `#24283b`, Accents: Cyan `#7dcfff`, Blue `#7aa2f7`, Purple `#bb9af7`, Green `#73daca`)  
> **Typography**: `Fira Code` (Primary Monospace) + `Inter`  
> **Tech Requirements**: Pure HTML5, CSS3, & Vanilla JavaScript (No heavy frameworks or external UI dependencies)  
> **Created Date**: July 2026  

---

## 📁 Codebase Architecture & File Mapping

- [`index.html`](file:///home/ajinkya/workspace/ajinkya_tech/index.html) — Core semantic document layout, SEO meta tags, sections (Hero, Skills, Projects, Terminal CLI, Services, Contact Form), and floating contact dock.
- [`assets/css/variables.css`](file:///home/ajinkya/workspace/ajinkya_tech/assets/css/variables.css) — Tokyo Night design tokens, color variables, typography setup (`Fira Code`, `Inter`).
- [`assets/css/style.css`](file:///home/ajinkya/workspace/ajinkya_tech/assets/css/style.css) — Layout styling, glassmorphic header, hero grid, skill cards, project cards, terminal box, contact form, modal overlay, and floating quick contact dock.
- [`assets/css/animations.css`](file:///home/ajinkya/workspace/ajinkya_tech/assets/css/animations.css) — Custom keyframe animations (`blinkCursor`, `pulseGlow`, `floatSlow`, `gradientShift`, `ripple`).
- [`assets/js/canvas-bg.js`](file:///home/ajinkya/workspace/ajinkya_tech/assets/js/canvas-bg.js) — Interactive background canvas rendering connected particles with mouse gravity physics.
- [`assets/js/terminal.js`](file:///home/ajinkya/workspace/ajinkya_tech/assets/js/terminal.js) — Interactive CLI terminal emulator for clients supporting `help`, `skills`, `projects`, `contact`, `hire`, `about`, `whoami`, `date`, `clear`, `sudo`.
- [`assets/js/main.js`](file:///home/ajinkya/workspace/ajinkya_tech/assets/js/main.js) — Typewriter hero code snippet, skills category filter, project detail modal trigger, contact form handler, stats count-up observer, and copy-to-clipboard actions.
- `assets/images/` — Generated high-res preview mockups:
  - `saas_dashboard.jpg`
  - `ecommerce_store.jpg`
  - `ai_code_editor.jpg`

---

## ⚡ Core Features Implemented

1. **Tokyo Night Aesthetic & Fira Code Font**:
   - Dark mode palette, glowing borders, custom scrollbar, selection highlights, and monospace code typography.

2. **Hero Section with Typewriter Code**:
   - Interactive terminal window displaying real-time typing JavaScript code object with metric counters (5+ Yrs Exp, 50+ Projects, 100% Client Satisfaction).

3. **Interactive Skills Explorer**:
   - Filterable skills (All, Frontend, Backend, Tools & DevOps) with animated progress bars on scroll.

4. **Featured Client Projects Showcase**:
   - Interactive cards with preview images, tech badges, and full detail pop-up modal breakdown.

5. **Client CLI Terminal Emulator**:
   - Working terminal prompt (`visitor@tokyo-night:~$`) responding dynamically to client commands.

6. **Floating Quick Action Contact Dock**:
   - Fixed bottom-right floating quick contact buttons:
     - **WhatsApp**: Neon green glowing button with pulse ring, linking to pre-filled `wa.me/918177890371` chat.
     - **Gmail**: Neon cyan glowing button linking to `mailto:ajinkya.manoj.shinde@gmail.com`.
     - Tooltips with Fira Code styling popping up on hover.

7. **Client Contact Form & Direct Info**:
   - Validated message form with instant success toast.
   - Direct WhatsApp contact (`+91 8177890371`) and quick one-click copy button for email (`ajinkya.manoj.shinde@gmail.com`).

---

## 🌐 Local Development Environment

- Server command: `python3 -m http.server 3000` (Running in workspace background)
- Access URL: `http://localhost:3000`

---

## 📝 Guidelines for Future Development Sessions

- Always maintain the **Tokyo Night color palette** and **Fira Code font** consistency when adding new sections or components.
- Keep the codebase pure (HTML, CSS, JS) without adding unneeded heavy frameworks.
- Preserve responsive layout breaks at 992px and 768px.
