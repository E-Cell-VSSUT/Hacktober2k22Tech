let loc = document.getElementById("location");
let country = document.getElementById("country");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let sunset = document.getElementById("sunset");
let pressure = document.getElementById("pressure");
let WindSpeed = document.getElementById("wind-speed");
let humidity = document.getElementById("humidity");
let time = document.getElementById("time");
let date = document.getElementById("date");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  weather(searchInput.value);
  searchInput.value = "";
});
const weather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4fbc4d95b3003819a0db75cbfef6c60f`
  );
  const weatherData = await res.json();
  getWeather(weatherData);
};
const getWeather = async (weatherData) => {
  try {
    const { name } = weatherData;
    const { temp } = weatherData.main;
    const { main } = weatherData.weather[0];

    country.textContent = weatherData.sys.country;
    pressure.textContent = weatherData.main.pressure;
    humidity.textContent = weatherData.main.humidity;
    WindSpeed.textContent = weatherData.wind.speed;

    loc.textContent = name;
    climate.textContent = main;
    tempValue.textContent = temp.toFixed(0);

    let sec = weatherData.sys.sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    sunset.textContent = timeStr;

    if (weatherData.weather[0].main) {
      switch (weatherData.weather[0].main) {
        case "Clouds":
          tempIcon.classList.add("wi-day-cloudy");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-sunny",
            "wi-dust",
            "wi-day-thunderstorm"
          );
          break;
        case "Haze":
          tempIcon.classList.add("wi-fog");
          tempIcon.classList.remove(
            "wi-day-cloudy",
            "wi-day-sunny",
            "wi-dust",
            "wi-day-thunderstorm"
          );
          break;
        case "Clear":
          tempIcon.classList.add("wi-day-sunny");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-cloudy",
            "wi-dust",
            "wi-day-thunderstorm"
          );
          break;
        case "Mist":
          tempIcon.classList.add("wi-dust");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-cloudy",
            "wi-day-sunny",
            "wi-day-thunderstorm"
          );
          break;
        case "Dust":
          tempIcon.classList.add("wi-dust");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-cloudy",
            "wi-day-sunny",
            "wi-day-thunderstorm"
          );
          break;
        case "Thunderstorm":
          tempIcon.classList.add("wi-day-thunderstorm");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-cloudy",
            "wi-day-sunny",
            "wi-dust"
          );
          break;
        case "Rain":
          tempIcon.classList.add("wi-day-thunderstorm");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-cloudy",
            "wi-day-sunny",
            "wi-dust"
          );
          break;
        default:
        case "Clear":
          tempIcon.classList.add("wi-day-sunny");
          tempIcon.classList.remove(
            "wi-fog",
            "wi-day-cloudy",
            "wi-day-thunderstorm",
            "wi-dust"
          );
          break;
      }
    }
  } catch (error) {
    alert("city not found");
    console.log(error);
  }
};

window.addEventListener("load", () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let am = "AM";

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  let monthName = month[d.getMonth()];

  let day = new Date().getDate();
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const week = new Date();
  let weekDay = weekday[week.getDay()];

  const updateTime = () => {
    am = "AM";
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    am = hour > 12 ? ((hour = hour - 12), (am = "PM")) : am;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;

    time.textContent = `${hour}:${minute} ${am}`;
    date.textContent = `${monthName} ${day} ${weekDay}`;
  };
  setInterval(updateTime, 1000);

  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      long = pos.coords.longitude;
      lat = pos.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=4fbc4d95b3003819a0db75cbfef6c60f`;
      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          getWeather(data);
        });
    });
  }
});
