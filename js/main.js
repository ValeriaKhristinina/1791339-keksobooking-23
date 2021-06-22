import './modules/popup.js';
import {disablePageState, activePageState} from './modules/page-state.js';
import {addValidationForRooms} from './modules/form.js';

disablePageState();

window.addEventListener('load', () => {
  activePageState();
  addValidationForRooms();
});

