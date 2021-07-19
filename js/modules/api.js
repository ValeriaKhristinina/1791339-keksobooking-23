import {showSuccessMesage} from './form-success.js';
import { showErrorMessage } from './form-error.js';
import {clearForm} from './form.js';

const URL_API = 'https://23.javascript.pages.academy/keksobooking';

const getData = () => fetch(`${URL_API}/data`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw 'error';
    }
  });

const sendData = (formData) => {
  fetch(URL_API,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessMesage();
        clearForm();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {getData, sendData};
