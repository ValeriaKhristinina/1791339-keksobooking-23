import {activePageState} from './page-state.js';
import {address} from './form.js';
import { createOffers } from './create-offer.js';
import { drawOffer } from './popup.js';

const offersObj = createOffers();

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

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const newCoordinates = evt.target.getLatLng();
  address.value = `${newCoordinates.lat.toFixed(5)  } ${  newCoordinates.lng.toFixed(5)}`;
});

offersObj.forEach((obj) => {
  const icon = L.icon({
    iconUrl: '../../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker({
    lat: obj.offer.location.lat,
    lng: obj.offer.location.lng,
  }, {
    icon,
  });

  marker
    .addTo(map)
    .bindPopup(drawOffer(obj));
});
