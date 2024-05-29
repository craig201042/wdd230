const currentTemp = document.querySelector("#current-temp");
const currentWeatherIcon = document.querySelector("#current-weather-icon");
const captionCurrent = document.querySelector("#currentCaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=24.56&lon=120.81&units=metric&appid=d373b3b88e697ebd320716b0e82c312a";
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=24.56&lon=120.81&units=metric&appid=d373b3b88e697ebd320716b0e82c312a";

async function currentApiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrentResults(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

const displayCurrentResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    currentWeatherIcon.setAttribute("src", iconsrc);
    currentWeatherIcon.setAttribute("alt", "weather");
    captionCurrent.textContent = desc;
}
currentApiFetch();

async function apiFetch() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

const displayResults = (data) => {
    for (i = 0; i < 4; i++) {
        document.getElementById("day" + (i + 1) + "Temp").innerHTML = `${data.list[i].main.temp}&deg;C`;
        let iconForestSrc = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
        document.getElementById("day" + (i + 1) + "WeatherIcon").setAttribute("src", iconForestSrc);
        document.getElementById("day" + (i + 1) + "WeatherIcon").setAttribute("alt", "day" + (i + 1));
        document.getElementById("day" + (i + 1) + "Caption").textContent = data.list[i].weather[0].description;
    }
}
apiFetch();