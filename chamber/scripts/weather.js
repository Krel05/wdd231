const url = "https://api.openweathermap.org/data/2.5/weather?lat=19.51&lon=-99.11&units=metric&appid=f4cd6d9f0ca15ca775ffb53c01f62f55"

const section = document.querySelector("#weather");

async function getData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw new Error(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

function displayData(data) {
    const h2 = document.createElement("h2");
    const fig = document.createElement("figure");
    const weatherIcon = document.createElement("img");
    const weatherDescription = document.createElement("figcaption");
    const currentTemp = document.createElement("p");

    h2.textContent = "GAM Forecast";
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    weatherIcon.setAttribute("alt", "Weather Icon");
    weatherDescription.textContent = `${data.weather[0].description}`.toUpperCase();
    fig.appendChild(weatherIcon);
    fig.appendChild(weatherDescription);
    currentTemp.innerHTML = `Temperature: ${data.main.temp}&deg;C`;

    section.appendChild(h2);
    section.appendChild(fig)
    section.appendChild(currentTemp)
}

getData();
