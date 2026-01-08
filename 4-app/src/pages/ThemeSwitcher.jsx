import { useEffect, useState } from 'react';


function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };  

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (

            <div>
                <h1>Current Theme: {theme}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>

    );
}

export default ThemeSwitcher;