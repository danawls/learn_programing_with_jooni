const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");
const greet = document.querySelector("#greet");

const HIDE_CLASSNAME = "hide";
const USERNAME_KEY = "username";

function handleSubmitLogInButton (event) {
    event.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add(HIDE_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
        greet.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}!`;
    greet.classList.remove(HIDE_CLASSNAME);
}

function handleGreetClicked () {
    navigator.clipboard.writeText(logInInput.value);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // Show the form
    logInForm.classList.remove(HIDE_CLASSNAME);
    logInForm.addEventListener("submit", handleSubmitLogInButton);
} else {
    // Show the greet
    greet.classList.remove(HIDE_CLASSNAME);
        greet.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}!`;
    greet.classList.remove(HIDE_CLASSNAME);
    greet.addEventListener("click", handleGreetClicked);
}