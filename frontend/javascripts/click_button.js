const h1 = document.getElementById("sexy");

h1.style.cursor = "pointer";
h1.style.fontSize = "100px";

function handleTitleClick() {
    const clickedClass = "active";
    const font = "sexy-font";
    h1.classList.toggle(clickedClass);
    if (h1.classList.contains(clickedClass)) {
        h1.innerText = "hello";
    } else {
        h1.innerText = "안녕";
    }
}

h1.addEventListener("click", handleTitleClick);