import {activePageState} from './page-state.js';
import { drawOffer } from './popup.js';
import { filterMap } from './filtration.js';
import {debounce} from '../utils/debounce.js';

import {getData} from './api.js';
import {showAlert} from '../utils/show-alert.js';
import {setMapFiltres} from './filtration.js';

const address = document.querySelector('#address');
const TOKIO_COORDINATES = {
  lat: 35.65283,
  lng: 139.83947,
};
const RERENDER_DELAY = 500;

let renderPopups = null;
const map = L.map('map-canvas')
  .on('load', () => {
    getData()
      .then((data) => {
        renderPopups(data);
        activePageState();
        setMapFiltres(() => renderPopups(data));
      })
      .catch(() => {
        showAlert('Произошла ошибка при загрузке данных');
      });

    address.value = `${TOKIO_COORDINATES.lat } ${ TOKIO_COORDINATES.lng}`;
  })
  .setView({
    lat: TOKIO_COORDINATES.lat,
    lng: TOKIO_COORDINATES.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
const icon = L.icon({
  iconUrl: '../../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const newCoordinates = evt.target.getLatLng();
  address.value = `${newCoordinates.lat.toFixed(5)  } ${  newCoordinates.lng.toFixed(5)}`;
});


let arrayMarkers = [];

renderPopups = debounce((data) => {
  arrayMarkers.forEach((marker) => {
    marker.remove();
  });
  arrayMarkers = [];
  data
    .slice()
    .filter(filterMap)
    .slice(0,10)
    .forEach((obj) => {
      const marker = L.marker({
        lat: obj.location.lat,
        lng: obj.location.lng,
      }, {
        icon,
      });

      arrayMarkers.push(marker);
      marker
        .addTo(map)
        .bindPopup(drawOffer(obj));
    });
}, RERENDER_DELAY);

const setDefaultPosition = () => {
  mainPinMarker.setLatLng({
    lat: TOKIO_COORDINATES.lat,
    lng: TOKIO_COORDINATES.lng,
  });
};

export {renderPopups, mainPinIcon, mainPinMarker, setDefaultPosition};
