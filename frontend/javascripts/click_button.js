const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");
const greet = document.querySelector("#greet");

const HIDE_CLASSNAME = "hide";
const USERNAME_KEY = "username";

function handleSubmitLogInButton(event) {
    event.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add(HIDE_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreet();
    greet.addEventListener("click", handleGreetClicked);
}
function handleGreetClicked(copy) {
    copy = localStorage.getItem(USERNAME_KEY);
    navigator.clipboard.writeText(copy);
}

function paintGreet() {
    const username = localStorage.getItem(USERNAME_KEY);
    greet.innerText = `Hello ${username}!`;
    greet.classList.remove(HIDE_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // Show the form
    logInForm.classList.remove(HIDE_CLASSNAME);
    logInForm.addEventListener("submit", handleSubmitLogInButton);
} else {
    // Show the greet
    paintGreet();
    greet.addEventListener("click", handleGreetClicked);
}
