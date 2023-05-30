const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const greet = document.querySelector("#greet");
const toHide = document.querySelector("#main");

const HIDE_CLASSNAME = "hide";
const USERNAME_KEY = "username";

function handleSubmitLogInButton(event) {
  const username = logInInput.value;
  event.preventDefault();
  logInForm.classList.add(HIDE_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreet(username);
}

function paintGreet(username) {
  greet.innerText = `Hello ${username}!`;
  greet.classList.remove(HIDE_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // Show the form
  logInForm.classList.remove(HIDE_CLASSNAME);
  logInForm.addEventListener("submit", handleSubmitLogInButton);
} else {
  // Show the greet
  paintGreet(savedUsername);
  greet.addEventListener("click", copyName);
}
