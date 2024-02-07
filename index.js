const apikey='df5fc34d65f512fb42de677f77d1d1c5'
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchinput=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl + city +`&appid=${apikey}`);
    let data= await response.json();
    
    document.querySelector(".city").textContent=data.name;
    document.querySelector(".temp").textContent= Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").textContent=data.main.humidity+"%";
    document.querySelector(".air").textContent=data.wind.speed+"km/h";

    if(data.weather[0].main=="Sunny"){
        weatherIcon.src="./sunny.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./clearsky.png";
    }else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./brokencloud.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./rain.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="./snow.png";
    
    }else if(data.weather[0].main=="Haze"){
        weatherIcon.src="./haze-128.webp";
    }
    document.querySelector(".weather").style.display="block"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchinput.value);
})


