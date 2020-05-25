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
import imgN11d from '../assets/images/weather_icons/11d.svg';
import imgN11n from '../assets/images/weather_icons/11n.svg';
import imgN13d from '../assets/images/weather_icons/13d.svg';
import imgN13n from '../assets/images/weather_icons/13n.svg';
import imgN50d from '../assets/images/weather_icons/50d.svg';
import imgN50n from '../assets/images/weather_icons/50n.svg';

const helpers = (() => {
  const convertDegreeType = (temp, type) => {
    if (type === '°C') {
      const value = +(temp - 273.15).toFixed(2);
      return `${value} °C`;
    }
    const value = +((temp - 273.15) * (9 / 5) + 32).toFixed(2);
    return `${value} °F`;
  };

  const convertVelocityType = (velocity, type) => {
    if (type === 'km') {
      const value = (velocity * 3.6).toFixed(2);
      return `${value} km/hr`;
    }
    const value = (velocity * 2.237).toFixed(2);
    return `${value} mi/hr`;
  };

  const getWeatherIcon = (iconId) => {
    let img = '';
    switch (iconId) {
      case '01d':
        img = imgN01d;
        break;
      case '01n':
        img = imgN01n;
        break;
      case '02d':
        img = imgN02d;
        break;
      case '02n':
        img = imgN02n;
        break;
      case '03d':
        img = imgN03d;
        break;
      case '03n':
        img = imgN03n;
        break;
      case '04d':
        img = imgN04d;
        break;
      case '04n':
        img = imgN04n;
        break;
      case '09d':
        img = imgN09d;
        break;
      case '09n':
        img = imgN09n;
        break;
      case '10d':
        img = imgN10d;
        break;
      case '10n':
        img = imgN10n;
        break;
      case '11d':
        img = imgN11d;
        break;
      case '11n':
        img = imgN11n;
        break;
      case '13d':
        img = imgN13d;
        break;
      case '13n':
        img = imgN13n;
        break;
      case '50d':
        img = imgN50d;
        break;
      case '50n':
        img = imgN50n;
        break;
      default:
        img = 'error';
        break;
    }
    return img;
  };

  return {
    convertDegreeType,
    convertVelocityType,
    getWeatherIcon,
  };
})();

export default helpers;