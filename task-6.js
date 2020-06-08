const inputRef = document.querySelector('#validation-input');

const handleInputSymbol = event => {
  const inputSymbols = event.target;
  if (inputSymbols.value.length === Number(inputRef.dataset.length)) {
    inputSymbols.classList.add('valid');
    inputSymbols.classList.remove('invalid');
  } else {
    inputSymbols.classList.add('invalid');
    inputSymbols.classList.remove('valid');
  }
};

inputRef.addEventListener('change', handleInputSymbol);
