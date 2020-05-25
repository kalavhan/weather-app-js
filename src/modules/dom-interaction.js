import getWeather from './weather-api';
import helpers from './helpers';
import wind from '../assets/images/weather_icons/wind.svg';
import tempMin from '../assets/images/weather_icons/tempMin.svg';
import tempMax from '../assets/images/weather_icons/tempMax.svg';
import hum from '../assets/images/weather_icons/hum.svg';
import pressure from '../assets/images/weather_icons/pressure.svg';

const domInteraction = () => {
  const gw = getWeather();
  const cityName = document.getElementById('weatherCityName');
  const countryName = document.getElementById('weatherCountryName');
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
    const initialWeather = gw.getWeatherCoor(31.7202396, -106.4608383);
    initialWeather.then(data => {
      console.log(data);
      const weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
      const windSpeedType = weatherSwitch.checked === true ? 'mi' : 'km';
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
    });
  }

  function selectedUbicationCoor(lat, lon) {
    const newWeather = gw.getWeatherCoor(lat, lon);
    newWeather.then(data => {
      console.log(data);
      cityName.innerHTML = `${data.name},`;
      countryName.innerHTML = data.sys.country;
      feelsLike.innerHTML = data.main.feels_like;
    });
  }

  function selectedUbicationCity(city, state, country) {
    const newWeather = gw.getWeatherCity(city, state, country);
    newWeather.then(data => {
      console.log(data);
      const weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
      const windSpeedType = weatherSwitch.checked === true ? 'mi' : 'km';
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
    }); 
  }

  return {
    initialize,
    selectedUbicationCoor,
    selectedUbicationCity
  }
};

export default domInteraction;