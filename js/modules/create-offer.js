import {
  findRandomNumber,
  findRandomFloatNumber,
  getRandomArrayElement,
  getRandomArray,
} from './util.js';

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = () => {
  const latitude = findRandomFloatNumber(35.65, 35.7, 5);
  const longitude = findRandomFloatNumber(139.7, 139.8, 5);

  return {
    author: {
      avatar: `img/avatars/user0${findRandomNumber(1, 8)}.png`,
    },
    offer: {
      title: 'Супер предложение',
      address: `${latitude}, ${longitude}`,
      price: findRandomNumber(100, 10000),
      type: getRandomArrayElement(TYPE),
      rooms: findRandomNumber(1, 5),
      guests: findRandomNumber(1, 5),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: 'Прекраная строка описания помещения',
      photos: getRandomArray(PHOTOS),
      location: {
        lat: latitude,
        lng: longitude,
      },
    },
  };
};

export { createOffer };
