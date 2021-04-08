import React, { useState } from 'react' 
import FunctionContextComponent from './FunctionContextComponent.jsx'
import ClassContextComponent from './ClassContextComponent.jsx'

export const ThemeContext = React.createContext()

function Context() {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeContext.Provider>
        </>
    )
}

export default Context