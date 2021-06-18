/* eslint-disable no-unused-vars */
const adForm = document.querySelector('.ad-form');
const fielsets = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');


const disablePageState = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  fielsets.forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

const activePageState = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  fielsets.forEach((element) => {
    element.setAttribute('disabled', false);
  });
};

export { disablePageState, activePageState};
