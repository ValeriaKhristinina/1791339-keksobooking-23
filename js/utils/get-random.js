const findRandomNumber = (from, to) =>
  from >= to || from < 0
    ? -1
    : Math.floor(Math.random() * (to - from + 1)) + from;

const findRandomFloatNumber = (from, to, round) => {
  if (from >= to || from < 0 || round < 0) {
    return -1;
  } else if (round === 0) {
    return Math.floor(Math.random() * to) + from;
  }

  return Number((Math.random() * (to - from) + from).toFixed(round));
};

const getRandomArrayElement = (elements) =>
  elements[findRandomNumber(0, elements.length - 1)];

const getRandomArray = (array) => {
  const items = [];

  for (let index = 0; index <= array.length - 1; index++) {
    const RANDOM_NUMBER = findRandomNumber(0, 1);
    if (RANDOM_NUMBER === 1) {
      items.push(array[index]);
    }
  }
  return items;
};

export {
  findRandomNumber,
  findRandomFloatNumber,
  getRandomArrayElement,
  getRandomArray
};
