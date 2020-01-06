import React from 'react';
import './ButtonGrid.css';

const GridButton = ({show, char, index, onClick}) => {
    const vis = { 'visibility': show ? 'visible' : 'hidden' }
    return (
      <button
        onClick={onClick} 
        style={{ 'grid-row': index / 5, 'grid-column': index % 5, ...vis}}>
        {char}
      </button>
    );
}

const ButtonGrid = ({handleInput}) => {
    handleInput = handleInput ? handleInput : x => {};
    const smReset = [6,7,8,11,12,13,16,17,18];
    const sm = []; 
    sm[6] = [6,5,1,7,11];;
    sm[7] = sm[6].map(i => i + 1); 
    sm[8] = sm[6].map(i => i + 2); 
    sm[11] = sm[6].map(i => i + 5); 
    sm[12] = sm[6].map(i => i + 6); 
    sm[13] = sm[6].map(i => i + 7); 
    sm[16] = sm[6].map(i => i + 10); 
    sm[17] = [6,7,8,11,12,13,16,17,18,21,22] 
    sm[18] = sm[6].map(i => i + 12); 
    
    let initData = ['a','ka','sa','ta','na','ha','ma','X','ra'];
    const characters = [];
    characters[6] = ['a','i','u','e','o', 'pa', 'pi', 'pu', 'pe', 'po'];
    characters[7] = ['ka','ki','ku','ke','ko', 'ga', 'gi', 'gu', 'ge', 'go'];
    characters[8] = ['sa','si','su','se','so', 'za', 'zi', 'zu', 'ze', 'zo'];
    characters[11] = ['ta','ti','tu','te','to', 'da', 'di', 'du', 'de', 'do'];
    characters[12] = ['na','ni','nu','ne','no'];
    characters[13] = ['ha','hi','hu','he','ho', 'ba', 'bi', 'bu', 'be', 'bo'];
    characters[16] = ['ma','mi','mu','me','mo'];
    characters[17] = ['pa', 'ga', 'za', 'da', 'yu', 'ba', 'wa', 'ya', "'n", "ltu", 'yo'];
    characters[18] = ['ra','ri','ru','re','ro'];

    const hideAll = s => {
      return s.map(x => ({...x, show: false}));
    }
    
    const reset = s => {
      let stateCpy = hideAll(s);
      for (var i = 0; i < smReset.length; ++i) {
          stateCpy[smReset[i]].show = true;
          stateCpy[smReset[i]].char = initData[i];
      }
      return stateCpy;
    }
    
    let initState = [];
    for (let i = 0; i < 25; ++i) initState.push({index: i, show: false, data: characters[i], char: ''});
    const [state, setState] = React.useState(reset(initState));
    const [gridState, setGridState] = React.useState(0);

    const onBtnClick = index => () => {
        let stateCpy = hideAll(state);
        if (gridState === 0) {
          for (let i = 0; i < sm[index].length; ++i) {
            stateCpy[sm[index][i]].show = true;
            stateCpy[sm[index][i]].char = stateCpy[index].data[i];
          }
          if (index === 17) {
            setGridState(1);
          } else {
            setGridState(2);
          }
        } else if (gridState === 1) {
          if ([12,16,17,18,21,22].includes(index)) {
            handleInput(state[index].char);
            stateCpy = reset(stateCpy); 
            setGridState(0);
          } else {
            for (let i = 0; i < sm[index].length; ++i) {
              stateCpy[sm[index][i]].show = true;
              stateCpy[sm[index][i]].char = stateCpy[index].data[i + 5];
            }
            setGridState(2);
          }
        } else if (gridState === 2) {
          handleInput(state[index].char);
          stateCpy = reset(state);
          setGridState(0);
        }
        setState(stateCpy);
    }
    return (
      <div className="button-grid">
        {
          state
            .map((state, i) => {
              return (
                <GridButton 
                  show={state.show}
                  index={i}
                  char={state.char} 
                  onClick={onBtnClick(i)} />
              );
            })
        }
      </div>
    )
  }
  
export default ButtonGrid; 
