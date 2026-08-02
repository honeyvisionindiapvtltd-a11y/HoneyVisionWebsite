# HoneyVision Website

This repository contains the HoneyVision website built with React and Vite. It is designed to showcase AI-based surveillance and smart infrastructure solutions, services, technologies, and products.

## Key Features

- React application using Vite for fast development and production builds
- `react-router-dom` for page routing and nested detail pages
- Dedicated pages for:
  - Solutions
  - Technology detail pages
  - Services and service detail pages
  - Products and product detail pages
  - Industry verticals
- Responsive navigation menu with route-based links
- Styled UI using Tailwind-style utility classes

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 10+ or yarn

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the website.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` — application router and main page layout
- `src/components/` — shared UI components like `Navbar`, `Footer`, `Login`, `Register`, and more
- `src/pages/technology/` — technology overview and detail page components
- `src/pages/service/` — service overview and dedicated service pages
- `src/pages/products/` — product listing and product detail pages
- `src/pages/solutions/` — solution category pages
- `src/pages/Industry.jsx` — industry-specific content

## Main Routes

- `/` — home page
- `/solutions` — solutions overview
- `/technology` — technology overview
- `/technology/:topic` — individual technology detail
- `/service` — services overview
- `/service/:slug` — individual service pages
- `/product` — product listing
- `/product/:slug` — individual product pages
- `/industries` — industries overview

## Notes

- If you add new detail pages or routes, update `src/App.jsx` and the `Navbar` links accordingly.
- Product and technology detail pages currently use route slugs to resolve content dynamically.
- Keep component file names consistent with route slugs for easier navigation and maintenance.

## License

This project is currently created for HoneyVision and is available for modification by the project owner.
