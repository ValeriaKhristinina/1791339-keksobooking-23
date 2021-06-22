import './modules/popup.js';
import {disablePageState, activePageState} from './modules/page-state.js';
import './modules/form.js';

disablePageState();

window.addEventListener('load', () => {
  activePageState();
});

