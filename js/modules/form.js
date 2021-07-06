import { TYPES } from './popup.js';
import { setDefaultPosition } from './map.js';
import { sendData } from './api.js';

const form = document.querySelector('.ad-form');
const titleInput = form.querySelector('#title');
const priceInput = form.querySelector('#price');
const roomsNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const address = form.querySelector('#address');
const type = form.querySelector('#type');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const mapFilters = document.querySelector('.map__filters');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

let minPriceValue = 1000;
const MAX_PRICE_VALUE = 1000000;

const ROOMS_CAPACITY = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const defaultCoordinates = address.value;

titleInput.addEventListener('input', () => {
  const titleInputLength = titleInput.value.length;
  if (titleInputLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - titleInputLength} симв.`);
  } else if (titleInputLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние  ${titleInputLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

const addValidationForMinPrice = () => {
  minPriceValue = TYPES[type.value].minPrice;
  priceInput.placeholder = minPriceValue;
  priceInput.min = minPriceValue;
};

type.addEventListener('change', addValidationForMinPrice);

priceInput.addEventListener('input', () => {
  if (priceInput.value > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Цена не может превышать ${MAX_PRICE_VALUE} руб.`);
  } else if (priceInput.value < 0) {
    priceInput.setCustomValidity('Цена не может быть меньше 0 руб.');
  } else if (priceInput.value < minPriceValue) {
    priceInput.setCustomValidity(`Цена не может быть меньше ${minPriceValue} руб.`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});


const addValidationForRooms = () => {
  const capacityItems = capacity.querySelectorAll('option');
  const roomValue = roomsNumber.value;
  const availableCapacity = ROOMS_CAPACITY[roomValue];
  capacityItems.forEach((capacityItem) => {
    capacityItem.disabled = !availableCapacity.includes(capacityItem.value);
  });
};

roomsNumber.addEventListener('change', () => {
  addValidationForRooms();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const clearForm = () => {
  form.reset();
  mapFilters.reset();
  setDefaultPosition();
  setTimeout(() => {
    address.value = defaultCoordinates;
    addValidationForMinPrice();
  }, 0);

};

const formSubmit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    address.disabled = false;
    const formData = new FormData(form);
    address.disabled = true;
    sendData(formData);
  });

};


form.addEventListener('reset', clearForm);

export {addValidationForRooms, addValidationForMinPrice, address, formSubmit, clearForm};
