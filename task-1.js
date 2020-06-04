// 1 - method;
const itemsRef = document.querySelectorAll('.item');
const arrItems = Array.from(itemsRef);
console.log(`В списке ${arrItems.length} категории.`);
arrItems.forEach(element => {
  console.log(
    `Категория: ${
      element.querySelector('h2').textContent
    }, Количество элементов: ${element.querySelector('ul').children.length} !`,
  );
});

// 2 - method;
// const itemsRef = document.querySelectorAll('.item');
// for (let i = 0; i < itemsRef.length; i += 1) {
//   const element = itemsRef[i];
//   console.log(
//     `Категория: ${
//       element.querySelector('h2').textContent
//     }, Количество элементов: ${element.querySelector('ul').children.length} !`,
//   );
// }
