const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const BGImage = document.createElement("img");

BGImage.src = `images/${chosenImages}`;
BGImage.classList.add("size");

document.body.appendChild(BGImage);

BGImage.classList.add("b-g-img");
