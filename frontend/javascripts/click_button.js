const title = document.querySelector(".hello:first-child h1");

title.innerText = "This is spy";

function handleClick() {
    title.style.color = "blue";
}

function handleMouseEnter () {
    title.style.color = "red";
}

function handleMouseLeave () {
    title.style.color = "brown";
}

function handleWindowResize () {
    document.body.style.backgroundColor= "azure";
}

title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);

console.dir(title.style.color);