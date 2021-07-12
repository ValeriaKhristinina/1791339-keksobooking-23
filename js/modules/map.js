import {activePageState} from './page-state.js';
import { drawOffer } from './popup.js';
import {housingType, housingPrice, housingRooms, housingGuests} from './filtration.js';

const address = document.querySelector('#address');
const inputWifi = document.querySelector('#filter-wifi');
const inputDishwasher = document.querySelector('#filter-dishwasher');
const inputParking = document.querySelector('#filter-parking');
const inputWasher = document.querySelector('#filter-washer');
const inputElevator = document.querySelector('#filter-elevator');
const inputConditioner = document.querySelector('#filter-conditioner');
const TOKIO_COORDINATES = {
  lat: 35.65283,
  lng: 139.83947,
};


const map = L.map('map-canvas')
  .on('load', () => {
    activePageState();
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
const renderPopups = (data) => {
  arrayMarkers.forEach((marker) => {
    marker.remove();
  });
  arrayMarkers = [];
  data
    .slice()
    .filter((item) => item.offer.type === housingType.value || housingType.value === 'any')
    .filter((item) => {
      if (housingPrice.value === 'middle' && item.offer.price >= 10000 && item.offer.price <= 50000) {
        return true;
      }
      if (housingPrice.value === 'low' && item.offer.price < 10000) {
        return true;
      }
      if (housingPrice.value === 'high' && item.offer.price > 50000) {
        return true;
      }
      if (housingPrice.value === 'any') {
        return true;
      }
      return false;
    })
    .filter((item) => item.offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any')
    .filter((item) =>  {
      if (item.offer.guests === Number(housingGuests.value) || housingGuests.value === 'any') {
        return true;
      }
      if (typeof item.offer.guests !== 'number') {
        return false;
      }
      return false;
    })
    .filter((item) => {
      if (inputWifi.checked) {
        return item.offer.features && item.offer.features.includes(inputWifi.value);
      } else {
        return true;
      }
    })
    .filter((item) => {
      if (inputDishwasher.checked) {
        return item.offer.features && item.offer.features.includes(inputDishwasher.value);
      } else {
        return true;
      }
    })
    .filter((item) => {
      if (inputParking.checked) {
        return item.offer.features && item.offer.features.includes(inputParking.value);
      } else {
        return true;
      }
    })
    .filter((item) => {
      if (inputWasher.checked) {
        return item.offer.features && item.offer.features.includes(inputWasher.value);
      } else {
        return true;
      }
    })
    .filter((item) => {
      if (inputElevator.checked) {
        return item.offer.features && item.offer.features.includes(inputElevator.value);
      } else {
        return true;
      }
    })
    .filter((item) => {
      if (inputConditioner.checked) {
        return item.offer.features && item.offer.features.includes(inputConditioner.value);
      } else {
        return true;
      }
    })
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
};

const setDefaultPosition = () => {
  mainPinMarker.setLatLng({
    lat: TOKIO_COORDINATES.lat,
    lng: TOKIO_COORDINATES.lng,
  });
};

export {renderPopups, mainPinIcon, mainPinMarker, setDefaultPosition};
