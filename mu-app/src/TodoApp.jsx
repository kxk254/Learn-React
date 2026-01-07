import { useState } from "react";

function todoApp() {
  // Initial todos
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a Todo App",
    "Master JavaScript",
  ]);
  // Input state
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={input}
        placeholder="Add to do"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Item</button>

      {/* Display todos and remove buttons */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default todoApp;
