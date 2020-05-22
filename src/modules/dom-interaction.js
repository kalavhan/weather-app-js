import getWeather from './weather-api';
import helpers from './helpers';
import imgN01d from '../assets/images/weather_icons/01d.svg';
import imgN01n from '../assets/images/weather_icons/01n.svg';
import imgN02d from '../assets/images/weather_icons/02d.svg';
import imgN02n from '../assets/images/weather_icons/02n.svg';
import imgN03d from '../assets/images/weather_icons/03d.svg';
import imgN03n from '../assets/images/weather_icons/03n.svg';
import imgN04d from '../assets/images/weather_icons/04d.svg';
import imgN04n from '../assets/images/weather_icons/04n.svg';
import imgN09d from '../assets/images/weather_icons/09d.svg';
import imgN09n from '../assets/images/weather_icons/09n.svg';
import imgN10d from '../assets/images/weather_icons/10d.svg';
import imgN10n from '../assets/images/weather_icons/10n.svg';

const domInteraction = () => {
  const gw = getWeather();
  const cityName = document.getElementById('weatherCityName');
  const countryName = document.getElementById('weatherCountryName');
  const feelsLike = document.getElementById('weatherFeelsLike');
  const weatherIcon = document.getElementById('weatherIcon');
  const weatherWind = document.getElementById('weatherWind');
  const weatherWindIcon = document.getElementById('weatherWindIcon');
  const weatherTemp = document.getElementById('weatherTemp');
  const weatherTempMin = document.getElementById('weatherTempMin');
  const weatherTempMinIcon = document.getElementById('weatherTempMinIcon');
  const weatherTempMax = document.getElementById('weatherTempMax');
  const weatherTempMaxIcon = document.getElementById('weatherTempMaxIcon');
  const weatherHum = document.getElementById('weatherHum');
  const weatherHumIcon = document.getElementById('weatherHumIcon');
  const weatherPres = document.getElementById('weatherPres');
  const weatherPresIcon = document.getElementById('weatherPresIcon');
  const weatherDescription = document.getElementById('weatherDescription');
  const weatherSwitch = document.getElementById('weatherSwitch');

  function initialize() {
    const initialWeather = gw.getWeatherCoor(31.7202396, -106.4608383);
    initialWeather.then(data => {
      console.log(data);
      const weatherDegreeType = weatherSwitch.checked === true ? '°F' : '°C';
      cityName.innerHTML = `${data.name},`;
      countryName.innerHTML = data.sys.country;
      feelsLike.innerHTML = helpers.convertDegreeType(data.main.feels_like, weatherDegreeType);
      weatherDescription.innerHTML = data.weather[0].description;
      weatherWind.innerHTML = data.wind.speed;
      weatherTemp.innerHTML = helpers.convertDegreeType(data.main.temp, weatherDegreeType);
      weatherTempMin.innerHTML = helpers.convertDegreeType(data.main.temp_min, weatherDegreeType);
      weatherTempMax.innerHTML = helpers.convertDegreeType(data.main.temp_max, weatherDegreeType);
      weatherHum.innerHTML = data.main.humidity;
      weatherPres.innerHTML = data.main.pressure;
      weatherIcon.innerHTML = imgN01d;
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
      cityName.innerHTML = `${data.name},`;
      countryName.innerHTML = data.sys.country;
      
      feelsLike.innerHTML = data.main.feels_like;
    }); 
  }

  return {
    initialize,
    selectedUbicationCoor,
    selectedUbicationCity
  }
};

export default domInteraction;