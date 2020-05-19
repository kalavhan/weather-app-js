const getWeather = () => {
  async function getWeatherCoor(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff6c534fa692d1c761f8ca2f57394e60`
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'omit'
    });
    return response.json();
  }

  async function getWeatherCity(city, state) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=ff6c534fa692d1c761f8ca2f57394e60`
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'omit'
    });
    return response.json();
  }
  return {
    getWeatherCoor,
    getWeatherCity
  }
}

export default getWeather;