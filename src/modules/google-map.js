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
        console.log(place);
        const formatted_data = place.address_components;
        if(formatted_data.length == 3){
          dom.selectedUbicationCity(formatted_data[0].long_name, formatted_data[1].long_name, formatted_data[2].short_name);
        }else if(formatted_data.length == 4) {
          console.log(formatted_data[1].long_name);
          console.log(formatted_data[2].long_name);
          dom.selectedUbicationCity(formatted_data[1].long_name, formatted_data[2].long_name, formatted_data[3].short_name);
        }
      } else {
        document.getElementById('pac-input').placeholder = 'Enter a city';
      }
    }
  };
  document.head.appendChild(script);
}

export default initializeGMap;
