import './App.css';
import React, { useState } from 'react';

function App() {
  const [coord, setCoord] = useState({top:300,left:550})

  const randomHeight = () => {
    return Math.floor(Math.random() * 500)
  }

  const randomWidth = () => {
    return Math.floor(Math.random() * 1000)
  }
  
  const moveButton = () => {
      setCoord({...coord, top:randomHeight(), left:randomWidth() })
  }

  return (
    <div className="App">
      <button
      style={{top: coord.top, left: coord.left}}
      onMouseEnter={() => moveButton()}
      >Click Me 
      </button>
    </div>
  );
}

export default App;
