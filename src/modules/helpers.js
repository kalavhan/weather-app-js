const helpers = (() => {
  const convertDegreeType = (temp, type) => {
    if (type === '°C') {
      const value = +(temp - 273.15).toFixed(2);
      return `${value} °C`;
    }
    const value = +((temp - 273.15) * (9 / 5) + 32).toFixed(2);
    return `${value} °F`;
  };
  return {
    convertDegreeType,
  };
})();

export default helpers;