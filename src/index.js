import './assets/css/reset.css';
import './assets/css/switch.css';
import './assets/css/main.css';
import domInteraction from './modules/dom-interaction';
const dom = domInteraction();

dom.initialize();
function initAutocomplete() {
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      // Create a marker for each place.
      console.log(place)
    });
  });
}