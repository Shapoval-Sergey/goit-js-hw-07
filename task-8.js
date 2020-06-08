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

const createBoxes = function(amount) {
  amount = counterCreateValue;
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    // let arr;
    // arr.push(box);
    console.log(box);
    const divWidth = 30;
    const divHeight = 30;
    const getRandomNum = () => Math.round(Math.random() * 255);
    box.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
    box.style.width = `${divWidth}px`;
    box.style.height = `${divHeight}px`;
    boxesRef.appendChild(box);
  }
  //   boxesRef.children.length = amount;

  console.log(boxesRef);
};

const destroyBoxes = function() {};

inputRef.addEventListener('input', valueInput);
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
