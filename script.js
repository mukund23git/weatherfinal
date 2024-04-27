let apiKey = "6ba69f1e155c101f09824bec8bb87a52";
let baseUrl = " https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=6ba69f1e155c101f09824bec8bb87a52";
let img = document.querySelector(".weather");
console.log(img);

async function checkWeather(city) {
    const response = await fetch(baseUrl + `&q=${city}`);
    var data = await response.json(); 
    console.log(data);
    let city1 = document.querySelector("#city");
    city1.innerHTML = data.name; 
    let temp = document.querySelector("#temp");
    temp.innerHTML = data.main.temp + "°C";
    let humidity = document.querySelector("#huminfo");
    humidity.innerHTML = data.main.humidity + "% Humidity";
    let speed = document.querySelector("#windinfo");
    speed.innerHTML =  data.wind.speed + " km/hr Wind Speed";
    console.log(data.weather[0].main);
    let feel = document.querySelector("#feel");
    feel.innerHTML = "Feels like " +  data.main.feels_like + "°C";
    if(data.weather[0].main == "Clouds"){
        console.log("fd");
        img.src = "/light.gif"
    }
    else if(data.weather[0].main == "Clear"){
        console.log("fd");
        img.src = "/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        console.log("fd");
        img.src = "/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        console.log("fd");
        img.src = "/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        console.log("fd");
        img.src = "/mist.png"
    }
    else if(data.weather[0].main == "Smoke"){
        console.log("fd");
        img.src ="/smoke.gif"
    }
    else if(data.weather[0].main == "Haze"){
        console.log("fd");
        img.src = "/sunny.gif"
    }
}



let searchInput = document.querySelector(".header input");
let searchBtn = document.querySelector(".header button");

searchBtn.addEventListener("click" , () => {
    checkWeather(searchInput.value);
})