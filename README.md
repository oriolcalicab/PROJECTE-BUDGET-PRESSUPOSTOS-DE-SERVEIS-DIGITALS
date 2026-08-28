# Digital Service Quote Generator

Web appication for generating automatic quote for digital marketing and customs web development service.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Vitest + testing Library

## Features

- Dynamic, itemized quote calculation basede on selected service (SEO, Advertising. Web), including    customs configuration for the Web service(number of pages and languages).
- Client data form to generate a complete quote in a single view.
- Quote history with search and filtering.
- Shareable quote via a unique URL.

## Project structure

src/
├── components/ Reusable UI components
├── pages/ Route-level pages
├── data/ Configurable JSON data (services and prices)
├── types/ TypeScript interfaces
├── utils/ Pure calculation and validation functions
├── services/ Data persistence (localStorage)
└── router/ Application routes


## Getting started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Running tests

```bash
npm run test
```

## Git workflow

This project follows Git Flow: `main` (production), `develop`
(integration), and `feature/*` branches for individual pieces of work.

## Author

Oriol Calí
