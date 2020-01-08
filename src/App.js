import React, { useState, useEffect } from 'react';
import ButtonGrid from './components/ButtonGrid';
import ColorGrid from './components/ColorGrid';
import './App.css';

const colors = {
  "red": ['a','ka','sa','ta','na','ha','ma','ya','ra'],
  "white": ['i','ki','si','ti','ni','hi','mi','wa','ri'],
  "blue": ['u','ku','su','tu','nu','hu','mu','yu','ru'],
  "yellow": ['e','ke','se','te','ne','he','me',"'n",'re'],
  "green": ['o','ko','so','to','no','ho','mo','yo','ro'],
  "pink" : ['pa', 'ga', 'za', 'da', 'ymid2', 'ba'],
  "#ccc" : ['pi', 'gi', 'zi', 'di', 'empty', 'bi'],
  "darkblue" : ['pu', 'gu', 'zu', 'du', 'empty', 'bu'],
  "orange" : ['pe', 'ge', 'ze', 'de', 'empty', 'be'],
  "darkgreen" : ['po', 'go', 'zo', 'do', 'empty', 'bo', 'empty', 'ybot2'],
  "black" : ['empty', 'empty', 'empty', 'empty', 'ltu'],
}
const hiragana = [
  'a','i','u','e','o',
  'ka','ki','ku','ke','ko',
  'ga','gi','gu','ge','go',
  'sa','si','su','se','so',
  'za','zi','zu','ze','zo',
  'ta','ti','tu','te','to',
  'da','di','du','de','do',
  'na','ni','nu','ne','no',
  'ha','hi','hu','he','ho',
  'ba','bi','bu','be','bo',
  'pa','pi','pu','pe','po',
  'ma','mi','mu','me','mo',
  'ya','wa','yu', "'n",'yo',
  'ra','ri','ru','re','ro',
]

const c = (x,y) => ({kanji: x, yomi: y});
const kanji = [
  c('家',['i','e']),
  c('所',['si','yo']),
  c('場',['ba']),
  c('生',['se','i']),
  c('活',['ka','tu']),
] 


/* phonetic emoji instead of colors? */
function App() {
  //use reducer for rand target
  const [target, setTarget] = useState([]);
  const [targetKanji, setTargetKanji] = useState('');

  const newTarget = () => {
    if (kanji.length === 1) return;
    let rand = Math.trunc(Math.random() * kanji.length);
    while (kanji[rand].kanji === targetKanji) {
      rand = Math.trunc(Math.random() * kanji.length);
    }
    setTargetKanji(kanji[rand].kanji);
    setTarget(kanji[rand].yomi);
  }

  const [input, setInput] = useState([]);
  
  // idiomatic way to compare arrays
  const checkEqual = () => {
    if (target.length !== input.length) return;
    for (let i = 0; i < target.length; ++i) {
      if (target[i] !== input[i]) return;
    }
    setInput([]);
    newTarget();
  }
  
  useEffect(checkEqual)

  let handleInput = char => {
    setInput([...input, char]);
  }

  const deleteLast = () => {
    let tmp = [...input];
    tmp.splice(-1);
    setInput(tmp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{targetKanji}</h1>
        <div class="color-grid-grid">
          {target.map(c => <ColorGrid colors={colors} chars={[c]} />)}
        </div>
        <div class="color-grid-grid">
          {input.map(c => <ColorGrid colors={colors} chars={[c]} />)}
        </div>
        <ButtonGrid colors={Object.keys(colors)} handleInput={handleInput} />
        <button class="del-button" onClick={deleteLast}>del</button>
      </header>
    </div>
  );
}

export default App;