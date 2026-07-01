# JR Infrastructures — Portfolio Website

Single-page portfolio for an interior designer / architect offering a complete
civil & build package. Built with **Vite + React (JS) + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
public/images/     # project photos & static image assets
src/
  components/      # reusable UI (Navbar, Footer, Section)
  sections/        # page sections (Hero, Services, Portfolio, About, Contact)
  data/site.js     # site copy & config (nav links, services, contact)
  index.css        # Tailwind import + @theme (palette + fonts)
  App.jsx          # assembles the single-page layout
```

## Design system

- **Palette:** warm whites (`cream`, `sand`, `stone`), charcoal ink scale
  (`charcoal`, `graphite`, `ash`), single terracotta accent (`clay`).
- **Type:** Fraunces (serif headings) + Inter (sans body), via Google Fonts.
- **Layout:** mobile-first, single page, smooth anchor scrolling between
  sections, sticky responsive navbar with a mobile hamburger menu.

## Status

Scaffold only. Hero and navbar are built out; Services / Portfolio / About /
Contact are placeholders ready to be filled in. Portfolio (project photos) is
the priority section to build next.
