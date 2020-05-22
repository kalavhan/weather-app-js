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
        types: ['(regions)'],
      },
    );

    function onPlaceChanged() {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const formattedData = place.address_components;
        if (formattedData.length === 3) {
          dom.selectedUbicationCity(formattedData[0].long_name,
            formattedData[1].long_name,
            formattedData[2].short_name);
        } else if (formattedData.length === 4) {
          dom.selectedUbicationCity(formattedData[1].long_name,
            formattedData[2].long_name,
            formattedData[3].short_name);
        }
      } else {
        document.getElementById('pac-input').placeholder = 'Enter a city';
      }
    }
    autocomplete.addListener('place_changed', onPlaceChanged);
  };
  document.head.appendChild(script);
};

export default initializeGMap;
