const apiKey = "9a825e8d80f3f100c4c2ccc8749fdbfe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather() {
  const weatherIcon = document.querySelector(".weather-icon");
  const search = document.getElementById("city-name").value;
  const response = await fetch(apiUrl + `&q=${search}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      data.main.humidity + " " + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizz") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }
}
