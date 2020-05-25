/* eslint-disable prefer-destructuring */
import domInteraction from './dom-interaction';

const initializeGMap = () => {
  const dom = domInteraction();
  const script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyA-hcf9d4DxGYURL6G5dwJC1kLcJ-HeD8c&libraries=places&result_type=administrative_area_level_2&callback=initAutocomplete';
  script.defer = true;
  script.async = true;
  window.initAutocomplete = () => {
    // Create the search box and link it to the UI element.
    // eslint-disable-next-line no-undef
    const autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        types: ['(cities)'],
      },
    );

    function onPlaceChanged() {
      const place = autocomplete.getPlace();
      let country = '';
      let state = '';
      let city = '';
      if (place.geometry) {
        const formattedData = place.address_components;
        for (let i = 0; i < formattedData.length; i += 1) {
          const obj = formattedData[i];
          if (obj.types[0] === 'country') {
            country = obj.short_name;
          } else if (obj.types[0] === 'administrative_area_level_1' || obj.types[0] === 'administrative_area_level_2') {
            state = obj.long_name;
          } else if (obj.types[0] === 'locality' || obj.types[1] === 'locality') {
            city = obj.long_name;
            const temp = city.split(' ');
            if (temp.length === 2 && temp[1] === 'City') {
              city = temp[0];
            }
          }
        }
        dom.selectedUbicationCity(city,
          state,
          country);
      } else {
        document.getElementById('pac-input').placeholder = 'Enter a city';
      }
    }
    autocomplete.addListener('place_changed', onPlaceChanged);
  };
  document.head.appendChild(script);
};

export default initializeGMap;
