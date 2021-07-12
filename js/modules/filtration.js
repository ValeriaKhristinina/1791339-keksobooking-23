const mapFilter = document.querySelector('.map__filters');
const housingType = mapFilter.querySelector('#housing-type');
const housingPrice = mapFilter.querySelector('#housing-price');
const housingRooms = mapFilter.querySelector('#housing-rooms');
const housingGuests = mapFilter.querySelector('#housing-guests');
const housingFeatures = mapFilter.querySelector('#housing-features');


const setHousingType = (cb) => {
  housingType.addEventListener('change', () => {
    cb();
  });
};

const setHousingPrice = (cb) => {
  housingPrice.addEventListener('change', () => {
    cb();
  });
};

const setHousingRooms = (cb) => {
  housingRooms.addEventListener('change', () => {
    cb();
  });
};

const setHousingGuests = (cb) => {
  housingGuests.addEventListener('change', () =>{
    cb();
  });
};

const setHousingFeatures = (cb) => {
  housingFeatures.addEventListener('change', () => {
    cb();
  });
};

export {housingType, housingPrice, housingRooms, housingGuests, housingFeatures, setHousingType, setHousingPrice, setHousingRooms, setHousingGuests, setHousingFeatures};

