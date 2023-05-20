const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");
const greet = document.querySelector("#greet");

const HIDE_CLASSNAME = "hide";

function handleSubmitLogInButton (event) {
    event.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add(HIDE_CLASSNAME);
    greet.innerText = `Hello ${username}!`;
    greet.classList.remove(HIDE_CLASSNAME);
}

logInForm.addEventListener("submit", handleSubmitLogInButton);