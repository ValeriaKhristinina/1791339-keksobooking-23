const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const featuredList = mapFilter.querySelectorAll('input[name="features"]');
const selectFilters = mapFilter.querySelectorAll('select');

const disablePageState = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  fieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  featuredList.forEach((feature) => {
    feature.disabled = true;
  });
  selectFilters.forEach((selectFilter) => {
    selectFilter.disabled = true;
  });
};

const activePageState = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  fieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });
  featuredList.forEach((feature) => {
    feature.disabled = false;
  });
  selectFilters.forEach((selectFilter) => {
    selectFilter.disabled = false;
  });
};

disablePageState();

export {activePageState};
