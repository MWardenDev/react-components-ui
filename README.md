# React Components UI

A small, focused React + TypeScript component library used across my personal portfolio projects.  
Built with Vite and Tailwind CSS, this repo showcases how I structure reusable UI building blocks for dashboards and similar apps.

---

## Live Usage

These components are intended to be used in:

- **React Metrics Dashboard** – metric cards and layout patterns
- **React Kanban Board** – future shared styling and common UI pieces

This library is a central place to grow and refine reusable components over time.

---

## Tech Stack

- **React** (function components + hooks)
- **TypeScript**s
- **Vite**
- **Tailwind CSS v4**

---

## Current Components

### `MetricCard`

A reusable card for showing a labeled numeric/stat value, with optional description and footer.

**Props:**

- `label: string` – metric label
- `value: string | number` – main value
- `description?: string` – optional supporting text
- `footer?: ReactNode` – optional footer area

Example:

```tsx
<MetricCard
  label="GitHub Stars"
  value={42}
  description="Aggregate stars for key repos."
  footer="Planned usage in React Metrics Dashboard."
/>
```

---

### `SectionHeader`

Simple header used to label groups of components or sections.

**Props:**

- `title: string`
- `subtitle?: string`

Example:

```tsx
<SectionHeader
  title="MetricCard"
  subtitle="Reusable metric display card for dashboards."
/>
```

---

## Gallery

The root application (`App.tsx`) renders a small gallery showing all components with different props. This acts as both a dev preview and a public demo when deployed.

---

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/react-components-ui.git
cd react-components-ui

npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Create production build
- `npm run preview` – Preview bundled build

---

## Roadmap

- `Badge` / `Tag` components
- Sectioned layout wrappers
- Skeleton loading components
- Chart container wrappers
- Full documentation pages

This library will continue to grow as reusable patterns emerge from other portfolio projects.
