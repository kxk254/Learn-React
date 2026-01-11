# Learn React

## create app
npm create vite@latest my-app -- --template react
cd my-app

- goto directory where package.json exists

npm install react@18 react-dom@18
npm install next@latest

-- router
npm install react-router-dom
npm install recharts
npm install

# Run the project

npm run dev -- --host

# build for production

npm run build

# Preview

npm run preview

# NEXT.js  ---------
npm install -g pnpm   ##package manager
npx create-next-app@latest my-app
cd my-app
npm run dev -- -H 10.66.66.4

npm install recharts
npm install axios
npm install @tanstack/react-query

# -----------
🧠 Mental model (important)
Thing	Who handles it
Routing	Next.js
React versions	Next.js
SSR / SSG	Next.js
Charts	Recharts
State	You

app/
│
├── layout.jsx          # Root layout (HTML, body, providers)
├── page.jsx            # Home route "/"
├── globals.css
│
├── dashboard/
│   └── page.jsx        # "/dashboard"
│
├── api/                # Route handlers (backend)
│   └── posts/route.js
│
├── components/         # Reusable UI components
│   ├── Header.jsx
│   ├── Chart.jsx
│
├── features/           # Feature-based grouping (recommended)
│   └── analytics/
│       ├── AnalyticsChart.jsx
│       ├── analyticsService.js
│
├── hooks/              # Custom hooks
│   └── useWindowSize.js
│
├── lib/                # Utilities, helpers
│   └── fetcher.js
│
└── providers/
    └── ReactQueryProvider.jsx

## install LTS Node
const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

## Dashboard example

https://nextjs.org/learn/dashboard-app/optimizing-fonts-images


npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

pnpm i   # install the project packages

pnpm exec next dev -H 10.66.66.4   # start development of server

#### prisma for database
npx prisma init --db

#### DRIZZLE
https://orm.drizzle.team/docs/get-started/postgresql-new