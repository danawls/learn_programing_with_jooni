const h1 = document.getElementById("sexy");

h1.style.cursor = "pointer";
h1.style.fontSize = "100px";

function handleTitleClick() {
    if (h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleTitleClick);