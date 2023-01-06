import "./App.css";
import React, { useState } from "react";

function App() {
  const [coord, setCoord] = useState({ top: null, left: null });

  const randomHeight = () => {
    return Math.floor(Math.random() * window.innerHeight);
  };

  const randomWidth = () => {
    return Math.floor(Math.random() * window.innerWidth);
  };

  const moveButton = () => {
    let height = randomHeight();
    let width = randomWidth();

    if (width > 800) {
      width = width - 250;
    }

    if (height > 920) height = height - 400;

    setCoord({ ...coord, top: height, left: width });
    console.log(randomHeight(), randomWidth());
  };

  return (
    <div className="App">
      <button
        style={{ top: coord.top, left: coord.left }}
        onMouseEnter={() => moveButton()}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
