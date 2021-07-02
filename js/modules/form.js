import { TYPES } from './popup.js';
import { URL_API } from './api.js';
import { showAlert } from './../utils/show-alert.js';
import { setDefaultPosition } from './map.js';

const form = document.querySelector('.ad-form');
const titleInput = form.querySelector('#title');
const priceInput = form.querySelector('#price');
const roomsNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const address = form.querySelector('#address');
const type = form.querySelector('#type');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

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

const formSubmit = (onSucsses) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    address.disabled = false;
    const formData = new FormData(form);
    address.disabled = true;

    fetch(URL_API,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSucsses();
        } else {
          showAlert('Не удалось отправить форму');
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму');
      }) ;
  });

};

const clearForm = () => {
  form.reset();
  setDefaultPosition();
  setTimeout(() => {
    address.value = defaultCoordinates;
  }, 0);
};

form.addEventListener('reset', clearForm);

export {addValidationForRooms, addValidationForMinPrice, address, formSubmit, clearForm};
