const inputRef = document.querySelector('#controls input');
const btnRenderRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const btnDestroyRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);

const boxesRef = document.querySelector('#boxes');

const createBoxes = function() {
  let box;
  const arrBox = [];
  const amount = document.querySelector('#controls input').value;
  for (let i = 0; i < amount; i += 1) {
    box = document.createElement('div');
    const getRandomNum = () => Math.round(Math.random() * 255);
    const divSize = 30 + 10 * i;
    box.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
    box.style.width = `${divSize}px`;
    box.style.height = `${divSize}px`;
    arrBox.push(box);
  }
  boxesRef.append(...arrBox));

  inputRef.value = 0;
};

const destroyBoxes = function() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
};

btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
