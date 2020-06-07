const inputRef = document.querySelector('#controls input');
let inputValue = Number(inputRef.value);
console.log(inputValue);
const btnRenderRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const btnDestroyRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);

const boxesRef = document.querySelector('#boxes');
console.dir(boxesRef);

const createBoxes = function(amount) {
  const box = document.createElement('div');
  inputValue = amount;
  //   boxesRef.children.length = amount;
  const randomCorol = Math.round(Math.random() * 255);
  const firstDivWidth = 30;
  const firstDivHeight = 30;
  box.style.backgroundColor = `rgb(${randomCorol}, ${randomCorol}, ${randomCorol})`;
  box.style.width = `${firstDivWidth}px`;
  box.style.height = `${firstDivHeight}px`;
  boxesRef.appendChild(box);
  console.log(boxesRef);
};

const destroyBoxes = function() {};

// inputRef.addEventListener('input', createBoxes);
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
