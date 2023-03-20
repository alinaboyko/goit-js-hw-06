"use strict";

const ulEl = document.querySelector("#ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;

  return liEl;
});

console.log(items);
ulEl.append(...items);


// for (const ingridient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingridient;
//   liEl.classList.add("item");
//   ulEl.append(liEl);
// };
// console.log(ulEl);