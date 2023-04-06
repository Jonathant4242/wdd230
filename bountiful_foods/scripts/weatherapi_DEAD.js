// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeedElement = document.querySelector('#wind-speed');
const windChillElement = document.querySelector('#wind-chill');
const humidityElement = document.querySelector('#humidity');
const nextDayElement = document.querySelector('#next-day'); // get the next-day element
const followingDayElement = document.querySelector('#following-day'); // get the following-day element

// link the API key to the URL
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.2308&lon=-71.4162&units=metric&appid=e23f88d1939249b7c5119619a96d891d";

// Fetch the data from the API
async function apiFetch() {
try {
const response = await fetch(url);
if (response.ok) {
const data = await response.json();
console.log(data); // This is for testing the call
displayResults(data); // Replace with the appropriate function to handle the fetched data
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
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const windSpeedElement = document.querySelector('#wind-speed');
  const windChillElement = document.querySelector('#wind-chill');
  const humidityElement = document.querySelector('#humidity');
  const nextDayElement = document.querySelector('#next-day'); // get the next-day element
  const followingDayElement = document.querySelector('#following-day'); // get the following-day element

  const currentWeather = weatherData.list[0];
  const tempInCelsius = currentWeather.main.temp;
  const tempInFahrenheit = (tempInCelsius * 1.8) + 32;
  currentTemp.innerHTML = `${tempInFahrenheit.toFixed(0)}`;

  const iconsrc = "https://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
  weatherIcon.src = iconsrc;
  weatherIcon.alt = currentWeather.weather[0].description;
  captionDesc.innerHTML = currentWeather.weather[0].description;

  const windSpeed = currentWeather.wind.speed;
  windSpeedElement.innerHTML = `${windSpeed} m/s`;

  const windChill = currentWeather.main.feels_like;
  const windInFahrenheit = (windChill * 1.8) + 32;
  windChillElement.innerHTML = `${windInFahrenheit.toFixed(0)} &deg;F`;

  const humidity = currentWeather.main.humidity;
  humidityElement.innerHTML = `${humidity}%`;

  const nextDayWeather = weatherData.list[1]; // get the weather data for the next day
  const nextDayDate = new Date(nextDayWeather.dt * 1000); //

  // display next day's date
  const nextDayDateElement = document.querySelector('#next-day-date');
  nextDayDateElement.innerHTML = formatDate(nextDayDate);

  // display next day's weather data
  const nextDayTempInCelsius = nextDayWeather.main.temp;
  const nextDayTempInFahrenheit = (nextDayTempInCelsius * 1.8) + 32;
  const nextDayIconSrc = "https://openweathermap.org/img/w/" + nextDayWeather.weather[0].icon + ".png";
  const nextDayWeatherDesc = nextDayWeather.weather[0].description;
  displayNextDayWeather(nextDayTempInFahrenheit.toFixed(0), nextDayIconSrc, nextDayWeatherDesc);

  const followingDayWeather = weatherData.list[2]; // get the weather data for the following day
  const followingDayDate = new Date(followingDayWeather.dt * 1000);

  // display following day's date
  const followingDayDateElement = document.querySelector('#following-day-date');
  followingDayDateElement.innerHTML = formatDate(followingDayDate);

  // display following day's weather data
  const followingDayTempInCelsius = followingDayWeather.main.temp;
  const followingDayTempInFahrenheit = (followingDayTempInCelsius * 1.8) + 32;
  const followingDayIconSrc = "https://openweathermap.org/img/w/" + followingDayWeather.weather[0].icon + ".png";
  const followingDayWeatherDesc = followingDayWeather.weather[0].description;
  displayFollowingDayWeather(followingDayTempInFahrenheit.toFixed(0), followingDayIconSrc, followingDayWeatherDesc);

}

// function to display next day's weather data in the HTML
function displayNextDayWeather(temp, iconSrc, desc) {
  const nextDayTempElement = document.querySelector('#next-day-temp');
  const nextDayIconElement = document.querySelector('#next-day-icon');
  const nextDayDescElement = document.querySelector('#next-day-desc');

  nextDayTempElement.innerHTML = `${temp}`;
  nextDayIconElement.src = iconSrc;
  nextDayDescElement.innerHTML = desc;
}

// function to display following day's weather data in the HTML
function displayFollowingDayWeather(temp, iconSrc, desc) {
  const followingDayTempElement = document.querySelector('#following-day-temp');
  const followingDayIconElement = document.querySelector('#following-day-icon');
  const followingDayDescElement = document.querySelector('#following-day-desc');

  followingDayTempElement.innerHTML = `${temp}`;
  followingDayIconElement.src = iconSrc;
  followingDayDescElement.innerHTML = desc;
}

// function to format date in the format 'dd/mm/yyyy'
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// display next day's date
const nextDayDateElement = document.querySelector('#next-day-date');
nextDayDateElement.addEventListener('click', () => {
  const inputDateElement = document.querySelector('#input-date');
  const inputDateValue = inputDateElement.value;
  if (inputDateValue) {
    const inputDate = new Date(inputDateValue);
    if (!isNaN(inputDate)) {
      const nextDayDate = new Date(inputDate);
      nextDayDate.setDate(inputDate.getDate() + 1);
      nextDayDateElement.textContent = `Next Day's Date: ${formatDate(nextDayDate)}`;
    } else {
      nextDayDateElement.textContent = 'Invalid Date';
    }
  } else {
    nextDayDateElement.textContent = 'Please enter a date';
  }
})

// display following day's date
const followingDayDateElement = document.querySelector('#following-day-date');
followingDayDateElement.addEventListener('click', () => {
  const inputDateElement = document.querySelector('#input-date');
  const inputDateValue = inputDateElement.value;
  if (inputDateValue) {
    const inputDate = new Date(inputDateValue);
    if (!isNaN(inputDate)) {
      const followingDayDate = new Date(inputDate);
      followingDayDate.setDate(inputDate.getDate() + 1);
      followingDayDateElement.textContent = `Following Day's Date: ${formatDate(followingDayDate)}`;
    } else {
      followingDayDateElement.textContent = 'Invalid Date';
    }
  } else {
    followingDayDateElement.textContent = 'Please enter a date';
  }
});




