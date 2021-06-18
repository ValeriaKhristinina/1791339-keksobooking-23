import './modules/popup.js';
import {disablePageState, activePageState} from './modules/page-state.js';


disablePageState();

window.addEventListener('load', () => {
  activePageState();
});
