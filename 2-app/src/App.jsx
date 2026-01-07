import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
