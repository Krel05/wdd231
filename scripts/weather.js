const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=f4cd6d9f0ca15ca775ffb53c01f62f55";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(await response.text());
        } else {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", "Weather Icon");
    captionDesc.innerHTML = `${desc}`

}

apiFetch()