import domInteraction from './dom-interaction';

const initializeGMap = () => {
  const dom = domInteraction();
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyA-hcf9d4DxGYURL6G5dwJC1kLcJ-HeD8c&libraries=places&result_type=administrative_area_level_2&callback=initAutocomplete';
  script.defer = true;
  script.async = true;
  window.initAutocomplete = function() {
    // Create the search box and link it to the UI element.
    var autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        types: ['(regions)']
      });

    autocomplete.addListener('place_changed', onPlaceChanged)
    function onPlaceChanged() {
      var place = autocomplete.getPlace();
      if (place.geometry) {
        const formatted_data = place.formatted_address.split(', ');
        if(formatted_data.length > 2){
          dom.selectedUbicationCity(formatted_data[0], formatted_data[1]);
        }else{
          const lat = place.geometry.location.lat();
          const lon = place.geometry.location.lng();
          dom.selectedUbicationCoor(lat, lon);
        }
      } else {
        document.getElementById('pac-input').placeholder = 'Enter a city';
      }
    }
  };
  document.head.appendChild(script);
}

export default initializeGMap;
