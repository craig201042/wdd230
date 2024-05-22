const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.64&units=imperial&appid=d373b3b88e697ebd320716b0e82c312a";

async function apiFetch() {
    try {
        const response = await fetch(url);
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather");
    captionDesc.textContent = desc;
}
apiFetch();
