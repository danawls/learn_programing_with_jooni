const API_KEY = "574e29d87a72d7aa9b7ec0aed143951c";

function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`you live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      paintWeather(data);
    });
}

function GeoError() {}

function paintWeather(data) {
  const weather = document.querySelector("#weather span:last-child");
  weather.classList.add("font");
  const city = document.querySelector("#weather span:first-child");
  city.classList.add("font");
  city.innerText = `${data.name}/`;
  weather.innerText = `${data.weather[0].main}/${data.main.temp}˚C`;
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
