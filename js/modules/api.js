const URL_API = 'https://23.javascript.pages.academy/keksobooking';

const getData = () => fetch(`${URL_API}/data`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

export {getData, URL_API};
