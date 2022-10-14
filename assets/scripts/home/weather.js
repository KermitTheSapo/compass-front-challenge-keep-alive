const localization = document.querySelector(".weather__localization")
const img = document.querySelector(".weather__img")
const temperatureValue = document.querySelector(".weather__temperature")
const div = document.querySelector(".weather__div")

const api = {
    key: "58fe4a5ee25b4aa4b28102127221210",
    base: "http://api.weatherapi.com/v1",
}

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('navegador não suporta');
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
    fetch(`${api.base}/current.json?key=${api.key}&q=${lat},${long}`)
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
    localization.innerHTML = `${weather.location.name} - ${weather.location.region}`;
    let iconName = weather.current.condition.icon.replace("//cdn.weatherapi.com", "")
    img.setAttribute("src", `./assets/imgs/home/header${iconName}`)
    temperatureValue.innerText = weather.current.temp_c + "°";
}