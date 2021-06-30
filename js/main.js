import './modules/page-state.js';
import './modules/popup.js';
import {addValidationForRooms, addValidationForMinPrice} from './modules/form.js';
import {renderPopups} from './modules/map.js';
import {getData} from './modules/api.js';

addValidationForRooms();
addValidationForMinPrice();

getData()
  .then((data) => {
    renderPopups(data);
  });


