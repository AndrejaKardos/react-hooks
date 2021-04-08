import React from 'react'
import './App.css';
import Example from './Example.jsx'
import Buttons from './Buttons.jsx'
import useLocalStorage from './useLocalStorage.jsx'
import useUpdateLogger from './useUpdateLogger.jsx'
import Context from './Context.jsx'

function App() {
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)

  return (
    <div className="App">
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Example />
      <Context />
      {/* <Buttons />  */}
    </div>
  );
}

export default App;
