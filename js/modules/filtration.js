const mapFilter = document.querySelector('.map__filters');
const housingType = mapFilter.querySelector('#housing-type');
const housingPrice = mapFilter.querySelector('#housing-price');
const housingRooms = mapFilter.querySelector('#housing-rooms');
const housingGuests = mapFilter.querySelector('#housing-guests');

const inputWifi = document.querySelector('#filter-wifi');
const inputDishwasher = document.querySelector('#filter-dishwasher');
const inputParking = document.querySelector('#filter-parking');
const inputWasher = document.querySelector('#filter-washer');
const inputElevator = document.querySelector('#filter-elevator');
const inputConditioner = document.querySelector('#filter-conditioner');

const setMapFiltres = (cb) => {
  mapFilter.addEventListener('change', (evt) => {
    evt.preventDefault();
    cb();
  });
};

const filterHousingType = (item) => item.offer.type === housingType.value || housingType.value === 'any';
const filterHousingPrice = (item) => {
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
};
const filterHousingRooms = (item) => item.offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any';
const filterHousingGuests = (item) =>  {
  if (item.offer.guests === Number(housingGuests.value) || housingGuests.value === 'any') {
    return true;
  }
  if (typeof item.offer.guests !== 'number') {
    return false;
  }
  return false;
};

const filterInputWifi = (item) => {
  if (inputWifi.checked) {
    return item.offer.features && item.offer.features.includes(inputWifi.value);
  } else {
    return true;
  }
};
const filterInputDishwasher = (item) => {
  if (inputDishwasher.checked) {
    return item.offer.features && item.offer.features.includes(inputDishwasher.value);
  } else {
    return true;
  }
};

const filterInputParking = (item) => {
  if (inputParking.checked) {
    return item.offer.features && item.offer.features.includes(inputParking.value);
  } else {
    return true;
  }
};

const filterInputWasher = (item) => {
  if (inputWasher.checked) {
    return item.offer.features && item.offer.features.includes(inputWasher.value);
  } else {
    return true;
  }
};

const filterInputElevator = (item) => {
  if (inputElevator.checked) {
    return item.offer.features && item.offer.features.includes(inputElevator.value);
  } else {
    return true;
  }
};

const filterInputConditioner = (item) => {
  if (inputConditioner.checked) {
    return item.offer.features && item.offer.features.includes(inputConditioner.value);
  } else {
    return true;
  }
};

const filterMap = (item) => filterHousingType(item) && filterHousingPrice(item) && filterHousingRooms(item) && filterHousingGuests(item) && filterInputWifi(item) && filterInputDishwasher(item) && filterInputParking(item) && filterInputWasher(item) && filterInputElevator(item) && filterInputConditioner(item);

export {setMapFiltres, filterMap};

