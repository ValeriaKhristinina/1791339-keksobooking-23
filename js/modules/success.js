const successTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');


const removeElement = (element) => {
  body.removeChild(element);
};


const showSuccessMessege = () => {
  const successElement = successTemplate.cloneNode(true);
  body.appendChild(successElement);

  const handleEsc = (evt) => {
    evt.preventDefault();
    if (evt.keyCode === 27 && body.contains(successElement)) {
      removeElement(successElement);
      body.removeEventListener('keydown', handleEsc);
      // eslint-disable-next-line no-use-before-define
      successElement.removeEventListener('mousedown', handleClick);
    }
  };

  const handleClick = () => {
    if (body.contains(successElement)) {
      removeElement(successElement);
      body.removeEventListener('keydown', handleEsc);
      successElement.removeEventListener('mousedown', handleClick);
    }
  };


  body.addEventListener('keydown', handleEsc);
  successElement.addEventListener('mousedown', handleClick);
};


export {showSuccessMessege};

