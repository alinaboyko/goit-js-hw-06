"use strict";

const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("change", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});