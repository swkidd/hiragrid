import React, { useState } from 'react';
import ButtonGrid from './components/ButtonGrid';
import ColorGrid from './components/ColorGrid';
import './App.css';

function App() {
  const input = ['te', 'ki', 'su', 'to'];
  let colorGrids = [];
  for (let i = 0; i < input.length; ++i) {
    colorGrids.push(<ColorGrid chars={[input[i]]} />)
  }

  let [inputColorGrids, setInputColorGrids] = useState([]);
  let handleInput = char => {
    setInputColorGrids([...inputColorGrids, <ColorGrid chars={[char]} />]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="color-grid-grid">
          <ColorGrid chars={['ti', 'ku', 'he', 'yo', 'na']} />
          <ColorGrid chars={['di', 'gu', 'be', 'ybot2', 'ymid2']} />
        </div>
        <div class="color-grid-grid">
          {colorGrids}
        </div>
        <div class="color-grid-grid">
          {inputColorGrids}
        </div>
        <ButtonGrid handleInput={handleInput} />
      </header>
    </div>
  );
}

export default App;
