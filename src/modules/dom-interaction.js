import getWeather from './weather-api';

const domInteraction = () => {
  const gw = getWeather();
  const cityName = document.getElementById('weatherCityName');
  const countryName = document.getElementById('weatherCountryName');
  const feelsLike = document.getElementById('weatherFeelsLike');
  function initialize(){
    const initialWeather = gw.getWeatherCoor(31.7202396, -106.4608383);
    initialWeather.then(data => {
      console.log(data);
      cityName.innerHTML = `${data.name},`;
      countryName.innerHTML = data.sys.country;
      feelsLike.innerHTML = data.main.feels_like;
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

  function selectedUbicationCity(lat, lon) {
    const newWeather = gw.getWeatherCity(lat, lon);
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