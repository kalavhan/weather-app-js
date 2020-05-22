const helpers = (() => {
  const convertDegreeType = (temp, type) => {
    if(type === '°C'){
      return ((temp - 32) * (5/9));
    } else if(type == '°F') {
      return ((temp * (9/5)) + 32);
    }
  };

})();