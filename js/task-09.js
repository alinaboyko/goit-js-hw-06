"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const body = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const spanText = document.querySelector(".color");

changeColorBtn.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  spanText.textContent = color;
});