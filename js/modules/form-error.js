const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const removeElement = (element) => {
  body.removeChild(element);
};

const showErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  body.appendChild(errorElement);

  const handleEsc = (evt) => {
    evt.preventDefault();
    if (evt.keyCode === 27 && body.contains(errorElement)) {
      removeElement(errorElement);
      body.removeEventListener('keydown', handleEsc);
    }
  };

  const handleClick = () => {
    if (body.contains(errorElement)) {
      removeElement(errorElement);
      body.removeEventListener('keydown', handleEsc);
      errorElement.removeEventListener('mousedown', handleClick);
    }
  };


  body.addEventListener('keydown', handleEsc);
  errorElement.addEventListener('mousedown', handleClick);
};

export {showErrorMessage};
