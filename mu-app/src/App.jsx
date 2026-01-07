// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App
