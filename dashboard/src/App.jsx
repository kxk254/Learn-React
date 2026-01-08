import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import StockDetails from "./pages/StockDetails";
import './App.css'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<StockDetails />} />
      </Routes>
    </>
  )
}

export default App
