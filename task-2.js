const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// 1 - method;
ingredients.forEach(element => {
  const items = document.createElement('li');
  items.textContent = element;
  const listRef = document.querySelector('#ingredients');
  listRef.appendChild(items);
});

// 2 - method;
// for (let i = 0; i < ingredients.length; i += 1) {
//   const element = ingredients[i];
//   // console.log(element);
//   const items = document.createElement('li');
//   items.textContent = element;
//   // console.log(items);
//   const listRef = document.querySelector('#ingredients');
//   listRef.appendChild(items);
// }
