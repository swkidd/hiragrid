import React from 'react';
import './ColorGrid.css';

const Item = ({color}) => (<div class="item" style={{ backgroundColor: color }}></div>) ;

const ColorGrid = ({colors, chars}) => {
  colors = colors ? colors : [];
  let colorKeys = Object.keys(colors);
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
