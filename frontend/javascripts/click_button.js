const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");
const link = document.querySelector("a");


function handleSubmitLogInButton (event) {
    event.preventDefault()
    console.log(logInInput.value);
}

function handleClickLink (event) {
    event.preventDefault();
    console.log(event);
}

logInForm.addEventListener("submit", handleSubmitLogInButton);
link.addEventListener("click", handleClickLink);