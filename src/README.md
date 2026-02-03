# Project Structure & Architecture

This project follows a feature-based architecture designed for clarity and scalability.

## 📂 Directory Map

### `src/app/`
Contains the **Authenticated Application**.
- `pages/`: Dashboard, Settings, Profile, etc.
- `components/`: App-wide components (Sidebar, TopNavbar).
- `features/`: Module-specific logic and UI (Tasks, Profile, Tables).

### `src/marketing/`
Contains the **Public Website**.
- `pages/`: Home, Pricing, About, etc.
- `components/`: Marketing-specific UI (Hero, Footer, PricingCards).

### `src/auth/`
Contains **Authentication Logic**.
- Login/Signup Pages.
- `authStore.js` (Zustand store for session).
- `ProtectedRoute.jsx`.

### `src/shared/`
Contains **Reusable Primitives** used across both App and Marketing.
- `ui/`: Dumb UI components (Buttons, Inputs, Modals).
- `hooks/`: Custom React hooks.
- `utils/`: Helper functions.

### `src/layouts/`
Global layout wrappers.
- `MarketingLayout.jsx`: Navbar + Footer wrapper.
- `AppLayout.jsx`: Sidebar + Content wrapper.

## 🚀 Key Principles

1.  **Separation of Concerns**: Marketing site and App are distinct domains.
2.  **Shared Primitives**: Generic UI lives in `shared/ui`.
3.  **Feature Modules**: Complex app features (like Tasks) keep their components together in `app/features`.
4.  **Central Routing**: All routes defined in `src/routes/index.jsx`.

## 🛠 Adding New Features

- **New App Page**: Add to `src/app/pages/`, add route in `routes/` (under AppLayout).
- **New Marketing Page**: Add to `src/marketing/pages/`, add route in `routes/` (under MarketingLayout).
- **New UI Component**: If reusable, add to `src/shared/ui`. If specific, keep local to feature.
