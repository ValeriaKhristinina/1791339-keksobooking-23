import './modules/page-state.js';
import './modules/popup.js';
import {addValidationForRooms, addValidationForMinPrice} from './modules/form.js';
import {formSubmit} from './modules/form.js';
import './modules/filtration.js';
addValidationForRooms();
addValidationForMinPrice();

formSubmit();

