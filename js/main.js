/* eslint-disable no-console */

// https://www.w3schools.com/js/js_random.asp
const findRandomNumber = (from, to) =>
  from >= to || from < 0 ? -1 : Math.floor(Math.random() * to) + from;

console.log(findRandomNumber(0, 5));

const findRandomFloatNumber = (from, to, round) => {
  if (from >= to || from < 0 || round < 0) {
    return -1;
  } else if (round === 0) {
    return Math.floor(Math.random() * to) + from;
  }

  return Number((Math.random() * (to - from) + from).toFixed(round));
};

console.log(findRandomFloatNumber(1, 3, 2));

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

const getRandomArrayElement = (elements) =>
  elements[findRandomNumber(0, elements.length - 1)];

const getRandomArray = (array) => {
  const newArray = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i <= array.length - 1; i++) {
    // find random number from 0 to 1
    const RANDOM_NUMBER = Math.floor(Math.random() * 2);
    if (RANDOM_NUMBER === 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

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
      price: 0,
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

const NEARBY_OFFERS_COUNT = 10;

const nearbyOffers = new Array(NEARBY_OFFERS_COUNT)
  .fill(null)
  .map(() => createOffer());

console.log(nearbyOffers);
