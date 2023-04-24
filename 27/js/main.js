const MY_KEY = "2ba21e5222497d5385c5de085848487e";
const coordinates = {
  zaporija: { lat: 47.82, lon: 35.19 },
};

const weatherRef = document.querySelector(".weather");

async function getWeather() {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.zaporija.lat}&lon=${coordinates.zaporija.lon}&appid=${MY_KEY}&units=metric`
    );
    const data = await res.json();
    const temp = Number(Math.round(data.main.temp));
    const city = data.name;
    if (localStorage.length === 0) {
      saveLocalSorage(temp);
    }
    if (Date.now() - JSON.parse(localStorage.data).time >= 7200000) {
      saveLocalSorage(temp);
      weatherRef.innerHTML = createMarkup(city, temp);
    } else {
      weatherRef.innerHTML = createMarkup(
        city,
        JSON.parse(localStorage.data).temp
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function createMarkup(city, temp) {
  return `
    <h1 class="weather__title">Weather in ${city}</h1>
    <div class="weather__value">${temp}&#176;</div>`;
}

function saveLocalSorage(temp) {
  localStorage.setItem("data", JSON.stringify({ time: Date.now(), temp }));
}

getWeather();
