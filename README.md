# Internet Society (Ghana Chapter) - Speed Test Frontend

Welcome to the frontend repository for the Speed Test application. This project uses **React**, **Tailwind CSS**, and **Lucide React** icons. To maintain the professional, high-tech aesthetic, please follow the guidelines below when building new pages (History, Settings, etc.).

## Getting Started

1. **Shared Components**: Do not recreate the Header, ServerBar, or Footer. They are located in `src/components/` and are designed to be consistent across all pages.
2. **Mobile-First**: Always check your designs on mobile. The Server Bar must remain side-by-side (`grid-cols-2`) even on small screens.
3. **The "Ghana Chapter" Theme**: Use the color palette of `#020617` (Deep Navy) and `emerald-500` (Status Online) / `blue-500` (Progress).

---

## Shared Components Reference

### 1. Header (`<Header progress={number} />`)

The header includes a unique progress bar at the bottom.

- **Usage**: Call this at the top of every page.
- **Props**: Pass the `progress` state (0-100) to animate the top bar during data loading or testing.

### 2. Server Bar (`<ServerBar />`)

Displays the Provider (Telecel Ghana) and Server (Accra Mail).

- **Mobile Note**: It is forced into a 2-column grid to stay side-by-side.
- **Constraint**: Icons are scaled down (`size={14}`) for mobile and text uses `truncate` to prevent layout breaking.

### 3. Footer (`<Footer status={string} />`)

Sticky footer containing the ID and Server Location.

- **Props**: `status` defaults to "READY". Change this to "TESTING..." or "LOADED" as needed.

---

## Design Standards

### Typography & Sizes

We have reduced the default sizes to make the UI look more professional and less "bulky":

- **Labels**: Use `text-[9px]` or `text-[10px]` with `font-bold` and `uppercase tracking-widest`.
- **Values**: Use `text-xs` or `text-sm` for secondary info; `text-2xl` only for main speed results.

### Hover Animations

All interactive cards (like the SpeedCards) should use the following transition effects:

- **Lift**: `hover:-translate-y-1`
- **Glow**: `hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)]`
- **Duration**: Use `duration-500` for smooth, premium-feeling transitions.

---

## File Structure

```text
src/
 ├── components/       # Shared UI (Header, Footer, ServerBar, SpeedCard)
 ├── pages/            # Individual Views (Home, History, Settings)
 ├── App.tsx           # Routing and Global Providers
 └── index.css         # Tailwind directives and global font resets

```

---

## Rules for New Pages

1. **Consistency**: Use the `<main>` tag with `flex-1` and `flex-col` to ensure the layout fills the screen between the Header and Footer.
2. **Spacing**: Use `mt-24` to separate result grids from main action buttons to provide a clean visual hierarchy.
3. **Icons**: Only use the **Lucide React** library for icons to keep the stroke weights uniform.

---
