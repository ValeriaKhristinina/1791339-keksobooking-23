import './modules/page-state.js';
import './modules/popup.js';
import {addValidationForRooms, addValidationForMinPrice} from './modules/form.js';
import './modules/map.js';

addValidationForRooms();
addValidationForMinPrice();

