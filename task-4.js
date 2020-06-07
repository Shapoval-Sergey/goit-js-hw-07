const valueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector(
  '#counter button[data-action = "decrement"]',
);

const incrementBtnRef = document.querySelector(
  '#counter button[data-action = "increment"]',
);

let counterValue = Number(valueRef.textContent);

const decrement = event => {
  decrementBtnRef.value = 1;
  counterValue -= Number(event.target.value);
  valueRef.textContent = counterValue;
};

const increment = event => {
  incrementBtnRef.value = 1;
  counterValue += Number(event.target.value);
  valueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener('click', decrement);

incrementBtnRef.addEventListener('click', increment);
