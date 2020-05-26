import './assets/css/reset.css';
import './assets/css/switch.css';
import './assets/css/main.css';
import initializeGMap from './modules/google-map';
import domInteraction from './modules/dom-interaction';

const dom = domInteraction();
initializeGMap();
dom.initialize();