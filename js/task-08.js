"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget;

    if (email === "" && password === "") {
        alert("You didn't fill your data :( please try again")
    };
    
    const userData = { email: email.value, password: password.value };
    console.log(userData);

    event.currentTarget.reset();
};
 