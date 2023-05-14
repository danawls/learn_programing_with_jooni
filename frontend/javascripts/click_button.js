const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");

function handleSubmitLogInButton (dororo) {
    dororo.preventDefault();
    console.log(dororo);
}

logInForm.addEventListener("submit", handleSubmitLogInButton);