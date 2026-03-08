# Next.js News Website

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![SQLite](https://img.shields.io/badge/SQLite-3-003B57?logo=sqlite)

A demo news website built with **Next.js 14 App Router** to explore advanced routing and rendering patterns. The project covers parallel routes, intercepting routes, catch-all segments, loading/error boundaries, and server-side data fetching with SQLite.

---

## Features

- **News feed** — browse articles with image previews
- **Article detail pages** — individual pages per article with title, date, content, and image
- **Image modal** — clicking an image opens it in an overlay (intercepting route) instead of navigating to a new page; direct URL access still shows the full-page view
- **Archive with filtering** — filter articles by year and month via URL segments; the page simultaneously shows the filtered results and the latest 3 articles side-by-side using parallel routes
- **Granular loading states** — each section has its own `loading.tsx` skeleton so UI parts load independently
- **Error boundaries** — `error.tsx` and `not-found.tsx` at multiple levels

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| UI | React 18 |
| Database | SQLite via `better-sqlite3` |
| Backend (standalone) | Express 4, CORS |

---

## Next.js Concepts Demonstrated

| Concept | Where |
|---|---|
| Route groups | `app/(marketing)/`, `app/(content)/` |
| Dynamic routes | `app/(content)/news/[slug]/` |
| Catch-all routes | `app/(content)/archive/@archive/[[...filter]]/` |
| Parallel routes | `app/(content)/archive/` — `@archive` + `@latest` slots |
| Intercepting routes | `app/(content)/news/[slug]/@modal/(.)image/` |
| `loading.tsx` | News list, archive slots, article detail |
| `error.tsx` / `not-found.tsx` | Archive filter, article detail |
| Server Components | All data-fetching pages (async functions, no `"use client"`) |
| Client Components | `ModalBackdrop`, `NavLink` |
| Middleware | `middleware.ts` — matches `/news` routes |

---

## Project Structure

```
nextjs-routing-rendering/
├── app/
│   ├── (marketing)/              # Route group — home/landing page
│   ├── (content)/
│   │   ├── news/
│   │   │   ├── page.tsx          # /news — article list
│   │   │   └── [slug]/
│   │   │       ├── page.tsx      # /news/<slug> — article detail
│   │   │       ├── layout.tsx    # wraps detail + modal slot
│   │   │       ├── image/        # /news/<slug>/image — full-page image
│   │   │       └── @modal/(.)image/  # intercepting modal
│   │   └── archive/
│   │       ├── layout.tsx        # parallel routes host
│   │       ├── @archive/[[...filter]]/  # /archive or /archive/year/month
│   │       └── @latest/          # latest news sidebar slot
│   ├── api/route.ts              # sample API route
│   └── globals.css
├── backend/                      # Standalone Express server (optional)
│   ├── app.js
│   └── package.json
├── components/                   # Shared React components
│   ├── main-header.tsx
│   ├── nav-link.tsx
│   ├── modal-backdrop.tsx
│   └── news-list.tsx
├── lib/
│   └── news.ts                   # SQLite query helpers
├── public/images/news/           # Article images
├── data.db                       # SQLite database (auto-created)
├── middleware.ts
└── next.config.mjs
```

---

## Routes

| URL | Description |
|---|---|
| `/` | Home / landing page |
| `/news` | All news articles |
| `/news/[slug]` | Single article detail |
| `/news/[slug]/image` | Full-page image view |
| `/archive` | Archive with latest sidebar |
| `/archive/[year]/[month]` | Archive filtered by year & month |

---

## Getting Started

**Prerequisites:** Node.js 18+, npm

### Frontend

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Backend (optional)

The Express server is a standalone reference implementation. The frontend reads `data.db` directly via `better-sqlite3` and does **not** depend on the backend being running.

```bash
cd backend
npm install
npm start
# → http://localhost:8080/news
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Architecture Note

The frontend queries SQLite directly through `lib/news.ts` using `better-sqlite3`. This is intentional for the demo — it keeps data access simple and lets server components fetch synchronously without an HTTP hop.

The `backend/` directory contains a standalone Express API (`GET /news`) that seeds and serves the same data. It was built as a prior iteration of the data layer and is kept for reference. It is not wired to the Next.js frontend.
