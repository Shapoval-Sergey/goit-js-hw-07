const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arr = [];
ingredients.forEach(element => {
  const items = document.createElement('li');
  items.textContent = element;
  arr.push(items);
});

const listRef = document.querySelector('#ingredients');
arr.map(item => {
  listRef.append(item);
  return listRef;
});
