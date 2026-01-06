import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos([
                ...todos, 
                {text:input.trim(), completed:false}
            ]);
            setInput('');
        }
    };

    const handleTodo = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? {...todo, completed: !todo.completed} : todo
        );  
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div>
            <h2>Todo List</h2>

            <input
                type="text"
                value={input}
                placeholder='Enter a todo'
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>

            {/* Display todos */}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ display:"flex", alignItems:"center" }}>
                        {/* Checkbox to mark done */}
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => handleTodo(index)} 
                        />
                        {/* Strike through completed todos */}
                        <span style={{ 
                            marginLeft: "8px",
                            textDecoration: todo.completed ? 'line-through' : 'none' 
                            }}>
                            {todo.text}
                        </span>
                       
                        {/* Remove button */}
                        <button 
                        style={{ marginLeft:"auto" }}
                        onClick={() => removeTodo(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}   

export default TodoList;