const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
console.log(inputRef.textContent);

const handleInputName = event => {
  if (event.target.value === '') {
    spanRef.textContent = 'незнакомец';
  } else {
    spanRef.textContent = event.target.value;
  }
};

inputRef.addEventListener('input', handleInputName);
