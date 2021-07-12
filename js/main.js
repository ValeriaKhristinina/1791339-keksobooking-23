import './modules/page-state.js';
import './modules/popup.js';
import {addValidationForRooms, addValidationForMinPrice} from './modules/form.js';
import {renderPopups} from './modules/map.js';
import {getData} from './modules/api.js';
import {showAlert} from './utils/show-alert.js';
import {formSubmit} from './modules/form.js';
import './modules/filtration.js';
import {setHousingType, setHousingPrice, setHousingRooms, setHousingGuests, setHousingFeatures} from './modules/filtration.js';


addValidationForRooms();
addValidationForMinPrice();

getData()
  .then((data) => {
    renderPopups(data);
    setHousingType(() => renderPopups(data));
    setHousingPrice(() => renderPopups(data));
    setHousingRooms(() => renderPopups(data));
    setHousingGuests(() => renderPopups(data));
    setHousingFeatures(() => renderPopups(data));
  })
  .catch(() => {
    showAlert('Произошла ошибка при загрузке данных');
  });

formSubmit();

