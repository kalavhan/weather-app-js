import getWeather from './weather-api';
import helpers from './helpers';
import wind from '../assets/images/weather_icons/wind.svg';
import tempMin from '../assets/images/weather_icons/tempMin.svg';
import tempMax from '../assets/images/weather_icons/tempMax.svg';
import hum from '../assets/images/weather_icons/hum.svg';
import pressure from '../assets/images/weather_icons/pressure.svg';
import loadingGif from '../assets/gifs/loading.gif';

const domInteraction = () => {
  const gw = getWeather();
  const loadingContainer = document.getElementById('loadingContainer');
  document.getElementById('loadingGif').src = loadingGif;
  const cityName = document.getElementById('weatherCityName');
  const feelsLike = document.getElementById('weatherFeelsLike');
  const weatherIcon = document.getElementById('weatherIcon');
  const weatherWind = document.getElementById('weatherWind');
  document.getElementById('weatherWindIcon').innerHTML = wind;
  const weatherTemp = document.getElementById('weatherTemp');
  const weatherTempMin = document.getElementById('weatherTempMin');
  document.getElementById('weatherTempMinIcon').innerHTML = tempMin;
  const weatherTempMax = document.getElementById('weatherTempMax');
  document.getElementById('weatherTempMaxIcon').innerHTML = tempMax;
  const weatherHum = document.getElementById('weatherHum');
  document.getElementById('weatherHumIcon').innerHTML = hum;
  const weatherPres = document.getElementById('weatherPres');
  document.getElementById('weatherPresIcon').innerHTML = pressure;
  const weatherDescription = document.getElementById('weatherDescription');
  const weatherSwitch = document.getElementById('weatherSwitch');

  function initialize() {
    loadingContainer.classList.remove('display-none');
    const initialWeather = gw.getWeatherCoor(51.509865, -0.118092);
    initialWeather.then(data => {
      let weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
      let windSpeedType = weatherSwitch.checked === true ? 'mi' : 'km';
      cityName.innerHTML = `${data.name}, ${data.sys.country}`;
      weatherDescription.innerHTML = data.weather[0].description;
      feelsLike.innerHTML = helpers.convertDegreeType(data.main.feels_like, weatherDegreeType);
      weatherTemp.innerHTML = helpers.convertDegreeType(data.main.temp, weatherDegreeType);
      weatherTempMin.innerHTML = helpers.convertDegreeType(data.main.temp_min, weatherDegreeType);
      weatherTempMax.innerHTML = helpers.convertDegreeType(data.main.temp_max, weatherDegreeType);
      weatherWind.innerHTML = helpers.convertVelocityType(data.wind.speed, windSpeedType);
      weatherHum.innerHTML = `${data.main.humidity}%`;
      weatherPres.innerHTML = `${data.main.pressure} hPa`;
      weatherIcon.innerHTML = helpers.getWeatherIcon(data.weather[0].icon);
      weatherSwitch.addEventListener('change', () => {
        weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
        windSpeedType = weatherSwitch.checked === true ? 'mi' : 'km';
        feelsLike.innerHTML = helpers.convertDegreeType(data.main.feels_like, weatherDegreeType);
        weatherTemp.innerHTML = helpers.convertDegreeType(data.main.temp, weatherDegreeType);
        weatherTempMin.innerHTML = helpers.convertDegreeType(data.main.temp_min, weatherDegreeType);
        weatherTempMax.innerHTML = helpers.convertDegreeType(data.main.temp_max, weatherDegreeType);
        weatherWind.innerHTML = helpers.convertVelocityType(data.wind.speed, windSpeedType);
      });
      setTimeout(() => {
        loadingContainer.classList.add('display-none');
      }, 1000);
    });
  }

  function selectedUbicationCity(city, state, country) {
    loadingContainer.classList.remove('display-none');
    const newWeather = gw.getWeatherCity(city, state, country);
    newWeather.then(data => {
      let weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
      let windSpeedType = weatherSwitch.checked === true ? 'mi' : 'km';
      cityName.innerHTML = `${data.name}, ${data.sys.country}`;
      weatherDescription.innerHTML = data.weather[0].description;
      feelsLike.innerHTML = helpers.convertDegreeType(data.main.feels_like, weatherDegreeType);
      weatherTemp.innerHTML = helpers.convertDegreeType(data.main.temp, weatherDegreeType);
      weatherTempMin.innerHTML = helpers.convertDegreeType(data.main.temp_min, weatherDegreeType);
      weatherTempMax.innerHTML = helpers.convertDegreeType(data.main.temp_max, weatherDegreeType);
      weatherWind.innerHTML = helpers.convertVelocityType(data.wind.speed, windSpeedType);
      weatherHum.innerHTML = `${data.main.humidity}%`;
      weatherPres.innerHTML = `${data.main.pressure} hPa`;
      weatherIcon.innerHTML = helpers.getWeatherIcon(data.weather[0].icon);
      weatherSwitch.addEventListener('change', () => {
        weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
        windSpeedType = weatherSwitch.checked === true ? 'mi' : 'km';
        feelsLike.innerHTML = helpers.convertDegreeType(data.main.feels_like, weatherDegreeType);
        weatherTemp.innerHTML = helpers.convertDegreeType(data.main.temp, weatherDegreeType);
        weatherTempMin.innerHTML = helpers.convertDegreeType(data.main.temp_min, weatherDegreeType);
        weatherTempMax.innerHTML = helpers.convertDegreeType(data.main.temp_max, weatherDegreeType);
        weatherWind.innerHTML = helpers.convertVelocityType(data.wind.speed, windSpeedType);
      });
      setTimeout(() => {
        loadingContainer.classList.add('display-none');
      }, 1000);
    });
  }

  return {
    initialize,
    selectedUbicationCity,
  };
};

export default domInteraction;