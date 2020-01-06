import React from 'react';
import './ColorGrid.css';

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
const colorKeys = Object.keys(colors);
const Item = ({color}) => (<div class="item" style={{ backgroundColor: color }}></div>) ;

const ColorGrid = ({chars}) => {
  chars = chars ? chars : [];
  let show = [];
  let showColors = [];
  let grid = [1,2,3,4,5,6,7,8,9].map(n => <Item />);
  for (let i = 0; i < chars.length; ++i) {
    for(let j = 0; j < colorKeys.length; ++j) {
      let arr = colors[colorKeys[j]];
      if (arr.includes(chars[i])) {
        show.push(arr.indexOf(chars[i]));
        showColors.push(colorKeys[j]);
      }
    }
  }
  for (let i = 0; i < show.length; ++ i) {
    grid[show[i]] = <Item color={showColors[i]} />
  }
  return (
      <div class="color-grid">
        {grid}
      </div>
  );
}

export default ColorGrid;
