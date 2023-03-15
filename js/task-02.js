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

for (const ingridient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingridient;
  liEl.classList.add("item");
  ulEl.append(liEl);
};
console.log(ulEl);
