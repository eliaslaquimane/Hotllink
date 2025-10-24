# HotlLink — Travel Platform (MVP)

A minimal, modern travel platform built with React, Vite and Tailwind CSS. This repository contains the HotlLink for exploring hotels, planners and travel-related services with internationalization support.

Homepage / demo: https://ohayatech.github.io/hotllink-tegist-mvp/

## Key features

- React + Vite development experience (fast HMR)
- TypeScript support
- Tailwind CSS for styling
- Client-side routing with React Router
- Ready-to-deploy via GitHub Pages (gh-pages)

## Tech stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- i18next / react-i18next
- React Router

## Quick start

Requirements
- Node.js (>=16 recommended)
- npm (or yarn / pnpm)

Clone the repo and install dependencies:

```bash
git clone https://github.com/ohayatech/hotllink-test-mvp.git
cd hotllink-test-mvp
npm install
```

Development (local)

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

Build (production)

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

Lint

```bash
npm run lint
```

Deploy to GitHub Pages

This project uses `gh-pages` and the `deploy` script in `package.json`:

```bash
npm run predeploy    # runs build
npm run deploy       # publishes `dist` to gh-pages branch
```

Note: Ensure the `homepage` field in `package.json` matches your GitHub Pages URL. The project currently sets:

```
"homepage": "https://ohayatech.github.io/hotllink-tegist-mvp/"
```

## Project structure (important files)

- `index.html` — Vite entry
- `src/main.tsx` — app bootstrap
- `src/App.tsx` — main app component and routes
- `src/index.css` — Tailwind input
- `src/layout/` — layout components (Navbar, Hero, Footer, Status, Features)
- `src/pages/` — route pages (Home, Hotels, TripPlanner, CityGuide, Contact, Dashboard, Services, Translators, CarRental)
- `src/components/` — shared UI components
- `src/hooks/` — custom hooks
- `vite.config.ts` — Vite configuration

### Directory structure

```
HOTLLINK/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── ...assets...
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── layout/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── Footer.tsx
    │   ├── Status.tsx
    │   └── Features.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Hotels.tsx
    │   ├── TripPlanner.tsx
    │   ├── CityGuide.tsx
    │   ├── Contact.tsx
    │   ├── Dashboard.tsx
    │   ├── Services.tsx
    │   ├── Translators.tsx
    │   └── CarRental.tsx
    ├── components/
    │   └── ...shared UI...
    └── hooks/
        └── ...custom hooks...
```

## Development notes & assumptions

- The project uses npm scripts from `package.json`: `dev`, `build`, `preview`, `lint`, `deploy` (with `predeploy`).
- Uses `gh-pages` for GitHub Pages deployment.
- If you prefer `yarn` or `pnpm`, replace `npm install` / `npm run` with the equivalent commands.

Edge cases & testing recommendations
- Test routing for client-side routes when deployed to GitHub Pages (use `HashRouter` or proper 404 handling if needed).
- Verify i18n resource loading in production.
- Add unit / integration tests (Jest / Vitest) as next step.

## Contributing

Contributions are welcome. Suggested flow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Install, run and add tests if appropriate
4. Open a pull request with a clear description of changes

Please add a `LICENSE` file if you want to make the repository explicitly open-source. If none exists, assume `All rights reserved`.

## Next steps / improvements

- Add automated tests (Vitest/Jest) and basic CI (GitHub Actions)
- Add a CONTRIBUTING.md and CODE_OF_CONDUCT
- Add an explicit `LICENSE` file (e.g., MIT)
- Add unit/e2e tests for routes, pages, and i18n

## Contact

If you have questions, contact the owner at the repo `ohayatech` or open an issue in this repository.

---

Generated README for HotlLink test MVP. Adjust homepage or deployment settings in `package.json` before publishing.
# Hotllink
# Hotllink
