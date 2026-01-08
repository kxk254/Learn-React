import { useState } from 'react'
import './App.css'
import Hello from './pages/Hello.jsx';
import Counter from './pages/Counter.jsx';
import Todos from './pages/Todos.jsx';
import Fetch from './pages/Fetch.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="layout">
        <div className="block">
          <Hello name="World" />
        </div>

        <div className="block">
          <Counter />
        </div>
        <div className="block">
          <Todos />
        </div>
      </div>

      <div className="layout">
        <div className="block">
          <Fetch />
        </div>

        <div className="block">
          <Counter />
        </div>
        <div className="block">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App
