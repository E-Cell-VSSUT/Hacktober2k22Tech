// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}
const weatherwidget={
    key:'bab281d79e5f1e9755a68d754cc313e7',
    baseurl:'https://api.openweathermap.org/data/2.5/forecast'
}

const searchInputBox = document.getElementById('input-box');
// Event Listener Function on keypress
const disp=document.querySelectorAll('nav');
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        disp.forEach(element=>{
            element.classList.remove('disp');
        })
        getForecast(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

function getForecast(city){
    fetch(`${weatherwidget.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(forecast=>{
        return forecast.json();
    }).then(showweatherwidget);

}

function showweatherwidget(weather){
    console.log(weather.list);
    var date=weather.list[2].dt_txt;
    console.log(date.slice(11,16));

    const widget=document.querySelector('.W-days');
    widget.innerHTML=`<li>
    <div class="temp">${Math.round(weather.list[0].main.temp)}&deg;C</div>
    <div class="time">${weather.list[0].dt_txt.slice(11,)}</div>
</li >
<li>
    <div class="temp">${Math.round(weather.list[1].main.temp)}&deg;C</div>
    <div class="time">${weather.list[1].dt_txt.slice(11,)}</div>
</li >
<li >
    <div class="temp">${Math.round(weather.list[2].main.temp)}&deg;C</div>
    <div class="time">${weather.list[2].dt_txt.slice(11,)}</div>
</li >
<li >
    <div class="temp">${Math.round(weather.list[3].main.temp)}&deg;C</div>
    <div class="time">${weather.list[3].dt_txt.slice(11,)}</div>
</li>
<li >
    <div class="temp">${Math.round(weather.list[4].main.temp)}&deg;C</div>
    <div class="time">${weather.list[4].dt_txt.slice(11,)}</div>
</li>
<li >
    <div class="temp">${Math.round(weather.list[5].main.temp)}&deg;C</div>
    <div class="time">${weather.list[5].dt_txt.slice(11,)}</div>
</li>
<li >
    <div class="temp">${Math.round(weather.list[6].main.temp)}&deg;C</div>
    <div class="time">${weather.list[6].dt_txt.slice(11,)}</div>
</li>
<li >
    <div class="temp">${Math.round(weather.list[7].main.temp)}&deg;C</div>
    <div class="time">${weather.list[7].dt_txt.slice(11,)}</div>
</li>`

}
// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// // Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp1');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    let time =document.querySelector(".time1");
    if(String(todayDate.getMinutes()).length===1)
        time.innerText=todayDate.getHours()+":"+"0"+todayDate.getMinutes() ;
    else
        time.innerText=todayDate.getHours()+":"+todayDate.getMinutes() ;

    const animation=document.querySelector(".animation");

    const wind=document.querySelector('.wind-speed p');
    var result = Number(weather.wind.speed);
    wind.innerText=`${Math.round(result * 3.6)} Km/h`;

    const humidity=document.querySelector('.humidity p');
    humidity.innerText=`${weather.main.humidity}%`;

    const pressure=document.querySelector('.air-pressure p');
    pressure.innerText=`${weather.main.pressure} hPa`;

    

    if(weatherType.textContent == 'Clear') {
        document.querySelector('.upper-container').style.backgroundImage='url(clearSky1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='black';
        animation.innerHTML=`<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_jqfghjiz.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
        
    } else if(weatherType.textContent == 'Clouds') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(Cloudy1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='black';
        animation.innerHTML=`<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_zsfbtp0v.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Haze') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(Haze1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='aliceblue';
        document.querySelector('.upper-container').style.backgroundImage=
        animation.innerHTML=`<lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_dmgebz1e.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(Rain1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='aliceblue';
        animation.innerHTML=`<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_orqfuyox.json" background="transparent"
        speed="0.5" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(Snow1.jpg)';
        
        document.querySelector('.upper-container .date-time').style.color='black';
        animation.innerHTML=`<lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_0tyvusxj.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Thunderstorm') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(Thunder.jpg)';
        document.querySelector('.upper-container .date-time').style.color='aliceblue';
        
        animation.innerHTML=`<lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_LPtaP2.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } 
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}


