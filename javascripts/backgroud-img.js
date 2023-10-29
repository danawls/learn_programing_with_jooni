const desktopImages = ["0.jpeg", "1.jpeg", "2.jpeg"];
const phoneImages = ["3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"];

const desktopChosenImages =
  desktopImages[Math.floor(Math.random() * desktopImages.length)];
const phoneChosenImages =
  phoneImages[Math.floor(Math.random() * phoneImages.length)];

const BGImage = document.createElement("img");

window.onload = function (event) {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  innerHeight >= innerWidth
    ? ((BGImage.src = `images/${phoneChosenImages}`),
      BGImage.classList.toggle("phone-size desktop-size"))
    : ((BGImage.src = `images/${desktopChosenImages}`),
      BGImage.classList.toggle("phone-size desktop-size"));
};

window.onresize = function (event) {
  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;
  innerHeight >= innerWidth
    ? ((BGImage.src = `images/${phoneChosenImages}`),
      BGImage.classList.toggle("phone-size desktop-size"))
    : ((BGImage.src = `images/${desktopChosenImages}`),
      BGImage.classList.toggle("phone-size desktop-size"));
};

document.body.appendChild(BGImage);
