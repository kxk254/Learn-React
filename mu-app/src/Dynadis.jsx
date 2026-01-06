function Dynadis() {
    const todos = ["Learn React", "Build a Todo App", "Master JavaScript"];
    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dynadis;