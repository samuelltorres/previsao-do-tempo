const key = "eab9cb4d93f2013e41439ccff54ec9fb"

function changeStatus(data) {
    document.querySelector("#infoCity").innerHTML = data.name
    document.querySelector("#celsius").innerHTML = `${Math.floor(data.main.temp)} °C`
    document.querySelector("#icon-description").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector("#text-description").innerHTML = data.weather[0].description
    document.querySelector("#humidity").innerHTML = `Umidade: ${data.main.humidity}%`
    console.log(data)
}

async function nameCity (city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    changeStatus(data)
}

function buttonClicked () {
    const city = document.querySelector("#city").value
    nameCity(city)
}