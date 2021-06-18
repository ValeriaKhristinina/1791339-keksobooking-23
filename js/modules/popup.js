import {createOffers, renameType} from './create-offer.js';
import { createListFeatures, createListPhotos } from '../utils/generate-elements.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const similarOffers = createOffers();

similarOffers.forEach((offer) => {
  const listFeatures = createListFeatures(offer.offer.features);
  const listPhotos = createListPhotos(offer.offer.photos);
  const offerElement = popupTemplate.cloneNode(true);
  offer.offer.title ? offerElement.querySelector('.popup__title').textContent = offer.offer.title : offerElement.querySelector('.popup__title').style.display = 'none';
  offer.offer.address ? offerElement.querySelector('.popup__text--address').textContent = offer.offer.address : offerElement.querySelector('.popup__text--address').style.display = 'none';
  offer.offer.price ? offerElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь` : offerElement.querySelector('.popup__text--price').style.display = 'none';
  offer.offer.type ? offerElement.querySelector('.popup__type').textContent = renameType(offer.offer.type) : offerElement.querySelector('.popup__type').style.display = 'none';
  (offer.offer.rooms && offer.offer.guests ) ? offerElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей` : offerElement.querySelector('.popup__text--capacity').style.display = 'none';
  (offer.offer.checkin && offer.offer.checkout) ? offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}` : offerElement.querySelector('.popup__text--time').style.display = 'none';
  offerElement.querySelector('.popup__features').innerHTML = '';
  offer.offer.features ? offerElement.querySelector('.popup__features').appendChild(listFeatures) : offerElement.querySelector('.popup__features').style.display = 'none';
  offer.offer.description ? offerElement.querySelector('.popup__description').textContent = offer.offer.description : offerElement.querySelector('.popup__description').style.display = 'none';
  offerElement.querySelector('.popup__photos').innerHTML = '';
  offer.offer.photos ? offerElement.querySelector('.popup__photos').appendChild(listPhotos) : offerElement.querySelector('.popup__photos').style.display = 'none';
  offer.author.avatar ? offerElement.querySelector('.popup__avatar').src = offer.author.avatar : offerElement.querySelector('.popup__avatar').style.display = 'none';
  mapCanvas.appendChild(offerElement);
});
