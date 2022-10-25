const API_KEY = "3d0847f566fc85c1d0868d45f56ecb5c";

const getWeather = async (city) => {
    document.querySelector(".result").innerText="Loading Data...";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    console.log(data);
  if(data.cod=="404"){
    document.querySelector(".result").innerText = `Please Enter a Valid Name`;
    return;
  }
    document.querySelector(".result").innerHTML = `
    <div class="degree">
    <b> Temperature: ${data.main.temp}&deg; C</b>
        </div>
        <div class="status">
  <b>Status: ${data.weather[0].main}</b>
        </div>
        <div class="speed">
        <b>Wind Speed:  ${data.wind.speed}km/h</b>
        </div>
        <div class="humidity">
        <b> Humidity:${data.main.humidity}g.m-3</b>
        </div>
        `
}




function show() {
    event.preventDefault();
    getWeather(text.value);
}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}