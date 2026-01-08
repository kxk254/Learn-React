function Todos() {
    const todos = ["Learn React", "Build Project", "Practice Hooks"];

    return (
        <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
    );
}

export default Todos;