# Docoment App - Enterprise SaaS Dashboard

A modern, high-performance SaaS dashboard built with React, Tailwind CSS, and Zustand. This application features a clean architecture, accessible UI, and optimized performance.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗 Architecture

### Tech Stack
-   **Framework**: React 19 (Vite)
-   **Styling**: Tailwind CSS v4
-   **State Management**: Zustand
-   **Routing**: React Router v7
-   **Icons**: Lucide React

### Key Decisions
-   **State Management**: Split into `uiStore` (visual state), `userStore` (session), and `taskStore` (data) for separation of concerns.
-   **Performance**:
    -   Route-based lazy loading via `React.lazy` and `Suspense`.
    -   Memoized heavy components like `DataTable` and `TableRow`.
-   **Accessibility**:
    -   Strict adherence to ARIA standards.
    -   Keyboard-navigable tables and menus.
    -   Semantic HTML structure (`nav`, `main`, `aside`).

## 📂 Folder Structure

```
src/
├── components/
│   ├── dashboard/   # Dashboard-specific widgets (Charts, KPIs)
│   ├── layout/      # App shell (Sidebar, Navbar, Layouts)
│   ├── table/       # Reusable Data Table components
│   └── ui/          # Atomic design system components (Buttons, etc.)
├── config/          # Static configuration (Navigation structure)
├── data/            # Mock data (temporary)
├── pages/           # Route views (Home, Docs, settings)
├── routes/          # Router configuration and lazy loading
├── store/           # Zustand stores (ui, user, task)
└── utils/           # Helper functions (cn, formatters)
```

## 🛠 Scripts

-   `npm run dev`: Start dev server.
-   `npm run build`: Build for production.
-   `npm run lint`: Run ESLint.
-   `npm run preview`: Preview production build locally.

## ✅ Production Readiness
-   [x] Optimized Bundle Size (Code-Split Marketing & App)
-   [x] WCAG 2.1 AA Accessibility
-   [x] Cinematic Universe Background (Canvas + GPU Optimized)
-   [x] Error Boundaries (Route-level)

## 🌌 Cosmic Design System
-   **Universe Background**: A custom canvas implementation featuring parallax stars, nebula glows, and constellation networks.
-   **Performance**: Uses `requestAnimationFrame`, debounced resizing, and passive listeners to maintain 60FPS.
-   **Lighting**: Cinematic spotlighting in Hero sections using `mix-blend-overlay` techniques.
-   **Transitions**: Scroll-linked "Cinematic" reveal effects powered by Framer Motion.
