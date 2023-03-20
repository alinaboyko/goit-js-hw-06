"use strict"

const input = document.querySelector("#validation-input");

input.addEventListener('blur', (event) => {
  const symbolsLength = Number(input.dataset["length"]);
  if (input.value.length === symbolsLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
