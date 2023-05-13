const h1 = document.getElementById("sexy");

h1.style.cursor = "pointer";
h1.style.fontSize = "100px";

function handleTitleClick() {
    if (h1.style.color === "blue") {
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue";

    }
}

h1.addEventListener("click", handleTitleClick);