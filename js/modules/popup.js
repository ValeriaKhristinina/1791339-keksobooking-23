import {createOffers, renameType} from './create-offer.js';
import { createListFeatures, createListPhotos } from '../utils/generate-elements.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const similarOffers = createOffers();

similarOffers.forEach((offer) => {
  const listFeatures = createListFeatures(offer.offer.features);
  const listPhotos = createListPhotos(offer.offer.photos);
  const offerElement = popupTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = renameType(offer.offer.type);
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  offerElement.querySelector('.popup__features').innerHTML = '';
  offerElement.querySelector('.popup__features').appendChild(listFeatures);
  offerElement.querySelector('.popup__description').textContent = offer.offer.description;
  offerElement.querySelector('.popup__photos').innerHTML = '';
  offerElement.querySelector('.popup__photos').appendChild(listPhotos);
  offerElement.querySelector('.popup__avatar').src = offer.author.avatar;
  mapCanvas.appendChild(offerElement);
});
