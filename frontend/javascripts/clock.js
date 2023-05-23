const clock = document.querySelector("h2#clock");

function getTime() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getTime();
setInterval(getTime, 1000);