const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");


function handleSubmitLogInButton (event) {
    event.preventDefault();
    logInInput.classList.toggle("hide");
    console.log(logInInput.value);
}

logInForm.addEventListener("submit", handleSubmitLogInButton);