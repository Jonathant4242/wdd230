// select HTML elements in the document
const currentDateElement = document.querySelector('#current-date');
const currentTempElement = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDescElement = document.querySelector('#caption-desc');
const windSpeedElement = document.querySelector('#wind-speed');
const windChillElement = document.querySelector('#wind-chill');
const humidityElement = document.querySelector('#humidity');
const nextDayDateElement = document.querySelector('#next-day-date');
const nextDayTempHighElement = document.querySelector('#next-day-temp-high');
const nextDayTempLowElement = document.querySelector('#next-day-temp-low');



// link the API key to the URL
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.2308&lon=-71.4162&units=metric&appid=e23f88d1939249b7c5119619a96d891d";

// fetch the data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// display the results
// the weatherData parameter is the data returned from the API
// the data is in JSON format
function displayResults(weatherData) {
  const weatherIcon = document.querySelector('#weather-icon'); // Add this line
  const tempInCelsius = weatherData.main.temp;
  const tempInFahrenheit = (tempInCelsius * 1.8) + 32;
  currentTempElement.innerHTML = `${tempInFahrenheit.toFixed(0)}`;

  // set the icon and alt attributes
  // the iconsrc variable is the path to the icon image
  const iconsrc = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  weatherIcon.src = iconsrc;
  weatherIcon.alt = weatherData.weather[0].description;
  captionDescElement.innerHTML = weatherData.weather[0].description;

  // display wind speed
  const windSpeed = weatherData.wind.speed;
  windSpeedElement.innerHTML = `${windSpeed} m/s`;

  // display wind chill
  const windChill = weatherData.main.feels_like;
  const windInFahrenheit = (windChill * 1.8) + 32;
  windChillElement.innerHTML = `${windInFahrenheit.toFixed(0)} &deg;F`;

  // display humidity
  const humidity = weatherData.main.humidity;
  humidityElement.innerHTML = `${humidity}%`;
  
  // display next day's date, high temperature, and low temperature
  const nextDayWeather = weatherData.daily[1];
  const nextDayDate = new Date(nextDayWeather.dt * 1000);
  const formattedDate = formatDate(nextDayDate);
  nextDayDateElement.innerHTML = formattedDate;
  const nextDayTempHigh = nextDayWeather.temp.max;
  const nextDayTempLow = nextDayWeather.temp.min;
  nextDayTempHighElement.innerHTML = `${nextDayTempHigh.toFixed(0)} &deg;F`;
  nextDayTempLowElement.innerHTML = `${nextDayTempLow.toFixed(0)} &deg;F`;
  // display next day's weather icon
  const nextDayWeatherDiv = document.querySelector('#next-day-weather');
  nextDayWeatherDiv.innerHTML = `
    <h2>${formattedDate}</h2>
    <img src="${iconsrc}" alt="${weatherData.weather[0].description}">
    <p>High: ${nextDayWeather.temp.max.toFixed(0)} &deg;C</p>
    <p>Low: ${nextDayWeather.temp.min.toFixed(0)} &deg;C</p>
  `;
}

  // function to format a date in "Month Day, Year" format
function formatDate(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}





  

