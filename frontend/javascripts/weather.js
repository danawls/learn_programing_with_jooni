const API_KEY = "574e29d87a72d7aa9b7ec0aed143951c";

function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`you live in ${lat}, ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector("#weather");
      const name = data.name;
      const weather = data.weather[0].main;
    });
}

function GeoError() {}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
