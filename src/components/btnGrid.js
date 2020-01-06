const btns = document.getElementsByClassName("btn");
const smReset = [6,7,8,11,12,13,16,17,18];
const sm = [];
sm[6] = [5,1,6,7,11];
sm[7] = sm[6].map(i => i + 1); 
sm[8] = sm[6].map(i => i + 2); 
sm[11] = sm[6].map(i => i + 5); 
sm[12] = sm[6].map(i => i + 6); 
sm[13] = sm[6].map(i => i + 7); 
sm[16] = sm[6].map(i => i + 10); 
sm[17] = [6,7,8,11,12,13,16,17,18,22] 
sm[18] = sm[6].map(i => i + 12); 
var state = 0;

const hideAll = btns => {
  for (var i = 0; i < Object.keys(btns).length; ++i) {
    btns[i].style.visibility = "hidden";
  }
}

const reset = btns => {
  hideAll(btns);
  for (x in smReset) {
      btns[smReset[x]].style.visibility = "visible";
  }
}

const onBtnClick = index => () => {
    hideAll(btns);
    if (state === 0) {
      for (x in sm[index]) {
        btns[sm[index][x]].style.visibility = "visible";
      }
      if (index === 17) {
        state = 1;
      } else {
        state = 2;
      }
    } else if (state === 1) {
      if ([12,16,17,18,22].includes(index)) {
        reset(btns); 
      } else {
        for (x in sm[index]) {
          btns[sm[index][x]].style.visibility = "visible";
        }
      }
      state = 2;
    } else if (state === 2) {
      reset(btns);
      state = 0;
    }
}

for (let i = 0; i < Object.keys(btns).length; ++i) {
  btns[i].addEventListener('click', onBtnClick(i));
}
reset(btns);