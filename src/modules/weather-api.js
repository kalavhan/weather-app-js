async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff6c534fa692d1c761f8ca2f57394e60`
  const response = await fetch(url, {
    mode: 'cors',
    credentials: 'omit'
  });
  return response.json();
}

export default getWeather;