const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("#login-input");
const logInButton = logInForm.querySelector("#login-button");
const greet = document.querySelector("#greet");

function handleSubmitLogInButton (event) {
    event.preventDefault();
    const username = logInInput.value;
    logInForm.classList.add("hide");
    greet.innerText = "hello " + username + "!";
    greet.classList.remove("hide");
}

window.addEventListener("resize", handleSubmitLogInButton);