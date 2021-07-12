import './modules/page-state.js';
import './modules/popup.js';
import {addValidationForRooms, addValidationForMinPrice} from './modules/form.js';
import {renderPopups} from './modules/map.js';
import {getData} from './modules/api.js';
import {showAlert} from './utils/show-alert.js';
import {formSubmit} from './modules/form.js';
import './modules/filtration.js';
import {setHousingType, setHousingPrice, setHousingRooms, setHousingGuests, setHousingFeatures} from './modules/filtration.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500;

addValidationForRooms();
addValidationForMinPrice();

getData()
  .then((data) => {
    renderPopups(data);

    setHousingType(debounce(
      () => renderPopups(data),
      RERENDER_DELAY,
    ));

    setHousingPrice(debounce(
      () => renderPopups(data),
      RERENDER_DELAY,
    ));

    setHousingRooms(debounce(
      () => renderPopups(data),
      RERENDER_DELAY,
    ));

    setHousingGuests(debounce(
      () => renderPopups(data),
      RERENDER_DELAY,
    ));

    setHousingFeatures(debounce(
      () => renderPopups(data),
      RERENDER_DELAY,
    ));
  })
  .catch(() => {
    showAlert('Произошла ошибка при загрузке данных');
  });

formSubmit();

