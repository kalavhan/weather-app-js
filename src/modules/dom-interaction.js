import getWeather from './weather-api';
import img_01d from '../assets/images/weather_icons/01d.svg';
import img_01n from '../assets/images/weather_icons/01n.svg';
import img_02d from '../assets/images/weather_icons/02d.svg';
import img_02n from '../assets/images/weather_icons/02n.svg';
import img_03d from '../assets/images/weather_icons/03d.svg';
import img_03n from '../assets/images/weather_icons/03n.svg';
import img_04d from '../assets/images/weather_icons/04d.svg';
import img_04n from '../assets/images/weather_icons/04n.svg';
import img_09d from '../assets/images/weather_icons/09d.svg';
import img_09n from '../assets/images/weather_icons/09n.svg';
import img_10d from '../assets/images/weather_icons/10d.svg';
import img_10n from '../assets/images/weather_icons/10n.svg';

const domInteraction = () => {
  const gw = getWeather();
  const cityName = document.getElementById('weatherCityName');
  const countryName = document.getElementById('weatherCountryName');
  const feelsLike = document.getElementById('weatherFeelsLike');
  const feelsLikeSym = document.getElementById('weatherFeelsLikeSym');
  const weatherIcon = document.getElementById('weatherIcon');
  const weatherWind = document.getElementById('weatherWind');
  const weatherWindIcon = document.getElementById('weatherWindIcon');
  const weatherTemp = document.getElementById('weatherTemp');
  const weatherTempSym = document.getElementById('weatherTempSym');
  const weatherTempMin = document.getElementById('weatherTempMin');
  const weatherTempMinSym = document.getElementById('weatherTempMinSym');
  const weatherTempMinIcon = document.getElementById('weatherTempMinIcon');
  const weatherTempMax = document.getElementById('weatherTempMax');
  const weatherTempMaxSym = document.getElementById('weatherTempMaxSym');
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
      const weatherDegreeType = weatherSwitch.checked == true ? '°F' : '°C'
      weatherTempSym.innerHTML = weatherDegreeType;
      weatherTempMaxSym.innerHTML = weatherDegreeType;
      weatherTempMinSym.innerHTML = weatherDegreeType;
      console.log(weatherDegreeType);
      cityName.innerHTML = `${data.name},`;
      countryName.innerHTML = data.sys.country;
      feelsLike.innerHTML = data.main.feels_like;
      weatherDescription.innerHTML = data.weather[0].description;
      weatherWind.innerHTML = data.wind.speed;
      weatherTemp.innerHTML = data.main.temp;
      weatherTempMin.innerHTML = data.main.temp_min;
      weatherTempMax.innerHTML = data.main.temp_max;
      weatherHum.innerHTML = data.main.humidity;
      weatherPres.innerHTML = data.main.pressure;
      weatherIcon.innerHTML = img_01d;
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