# AMMMH Portfolio (React + Three.js)

A personal 3D portfolio built with Vite, React, and React Three Fiber. It features a 3D hero scene, animated sections, project galleries, certifications, and a modern dark theme.

## Tech Stack

- React 18
- Vite
- Three.js / @react-three/fiber / @react-three/drei
- Tailwind CSS
- Framer Motion

## Quick Start (Windows / macOS)

### 1) Install Node.js
- Install **Node.js LTS** from https://nodejs.org

### 2) Install dependencies
```bash
npm install
```

### 3) Run the dev server
```bash
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

### 4) Build for production
```bash
npm run build
```

### 5) Preview the production build
```bash
npm run preview
```

## Project Structure

```
react-threejs-portfolio/
├─ public/                 # Static assets (models, images, certificates)
├─ src/
│  ├─ components/          # Page sections + 3D canvases
│  ├─ constants/           # Data for sections (education, projects, etc.)
│  ├─ assets/              # Local images/icons
│  ├─ styles.js            # Tailwind class tokens
│  └─ main.jsx             # App entry
├─ index.html
└─ vite.config.js
```

## Notes

- The project uses local assets from `public/` for models, certificates, and project galleries.
- All content is customized for **Abdelrahman Mohamed Hassanein**.

## License

See `LICENSE`.
