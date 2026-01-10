# Learn React

## create app
npm create vite@latest my-app -- --template react
cd my-app

- goto directory where package.json exists

npm install react@18 react-dom@18

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