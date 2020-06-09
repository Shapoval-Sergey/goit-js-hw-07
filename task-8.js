const inputRef = document.querySelector('#controls input');
let counterCreateValue;
const btnRenderRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const btnDestroyRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);

const boxesRef = document.querySelector('#boxes');

const valueInput = event => {
  counterCreateValue = Number(event.target.value);
};

let box;
let arrBox = [];
const createBoxes = function(amount) {
  amount = counterCreateValue;
  for (let index = 0; index < amount; index += 1) {
    box = document.createElement('div');
    console.log(box);
    const divWidth = 30;
    const divHeight = 30;
    const getRandomNum = () => Math.round(Math.random() * 255);
    box.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
    box.style.width = `${divWidth}px`;
    box.style.height = `${divHeight}px`;
    arrBox.push(box);
  }
  arrBox.map(item => boxesRef.append(item));
};

const destroyBoxes = function() {
  arrBox.map(item => boxesRef.removeChild(item));
  arrBox = [];
  inputRef.value = '';
  console.log(arrBox);
};

inputRef.addEventListener('input', valueInput);
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
