const localization = document.querySelector(".weather__localization")
const img = document.querySelector(".weather__img")
const temperatureValue = document.querySelector(".weather__temperature")
const div = document.querySelector(".weather__div")

const api = {
    key: "09394a43f3a54b3175866664157a8fb1",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('navegador não suporta aaaa');
    }
    function setPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }
    function showError(error) {
        alert(`erro: ${error.message}`);
    }
})

function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}
function displayResults(weather) {
    localization.innerHTML = `${weather.name} - ${weather.sys.country}`;
    let iconName = weather.weather[0].icon;
    img.setAttribute("src", `./assets/imgs/home/header/icons/${iconName}.png`)

    let temperature = `${Math.round(weather.main.temp)}`
    temperatureValue.innerText = temperature + "°";
}