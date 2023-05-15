const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");


function handleSubmitLogInButton (event) {
    event.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add("hide");
    console.log(username);
}

logInForm.addEventListener("submit", handleSubmitLogInButton);