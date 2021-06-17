// Craete new HTML-element
const makeElement = (tagName, className, textDescription) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  newElement.textContent = textDescription;

  return newElement;
};


//Create new list of 'features' HTML-elements
const createListFeatures = (arrayElements) => {
  const fragment = document.createDocumentFragment();
  arrayElements.forEach((element) => {
    const newListItem = makeElement('li', 'popup__feature');
    newListItem.classList.add(`popup__feature--${element}`);
    fragment.appendChild(newListItem);
  });
  return fragment;
};

//Create new list of images
const createListPhotos = (arrayPhotos) => {
  const fragment = document.createDocumentFragment();
  arrayPhotos.forEach((element) => {
    const elementImg = makeElement('img', 'popup__photo');
    elementImg.width = 45;
    elementImg.height = 40;
    elementImg.alt = 'Фотография жилья';
    elementImg.src = element;
    fragment.appendChild(elementImg);
  });
  return fragment;
};


export {makeElement, createListFeatures, createListPhotos};
