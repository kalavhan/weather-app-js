import getWeather from './weather-api';

const domInteraction = () => {
  const cityName = document.getElementById('weatherCityName');
  const countryName = document.getElementById('weatherCountryName');
  const feelsLike = document.getElementById('weatherFeelsLike');
  function initialize(){
    const initialWeather = getWeather('London');
    initialWeather.then(data => {
      console.log(data);
      cityName.innerHTML = `${data.name},`;
      countryName.innerHTML = data.sys.country;
      feelsLike.innerHTML = data.main.feels_like;
    }); 
  }

  return {
    initialize
  }
};

export default domInteraction;