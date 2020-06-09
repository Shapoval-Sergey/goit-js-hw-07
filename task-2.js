const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arr = ingredients.map(element => {
  const items = document.createElement('li');
  items.textContent = element;
  return items;
});

const listRef = document.querySelector('#ingredients');

listRef.append(...arr);
