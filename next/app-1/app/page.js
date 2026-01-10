
import { useState } from 'react';

function Header({ title }) {
return <h1>{title}</h1>;
}

function HomePage() {
const names = ['Alice', 'Bob', 'Charlie'];

const [likes, setLikes] = React.useState(0);

function handleClick() {
    console.log("Incremental log count");
    setLikes(likes + 1)
}



        return (
            <div>
                <Header title="React" />
                <ul>
                    {names.map((name) => 
                        <li key={name}>{name}</li>)}
                </ul>
                <button onClick={handleClick}>Like  {likes}</button>
                
            </div>
        );
    }

const lang = ReactDOM.createRoot(app);
lang.render(<HomePage />);

