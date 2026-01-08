import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// import Hello from './pages/Hello.jsx';
// import Counter from './pages/Counter.jsx';
// import Todos from './pages/Todos.jsx';
import Fetch from './pages/Fetch.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="about">About</Link> 
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
        </BrowserRouter>




      <div className="layout">
        <div className="block">
          <Fetch />
        </div>


      </div>
    </>
  );
}

export default App
