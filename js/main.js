/* eslint-disable no-console */

// https://www.w3schools.com/js/js_random.asp
const findRandomNumber = (from, to) => {
  const result =
    from >= to || from < 0
      ? 'Please, write correct arrange'
      : Math.floor(Math.random() * to) + from;
  return result;
};

console.log(findRandomNumber(0, 500));

const findRandomFloatNumber = (from, to, round) => {
  if (from >= to || from < 0 || round < 0) {
    return 'Please, write correct value';
  } else if (round === 0) {
    return Math.floor(Math.random() * to) + from;
  }

  return (Math.random() * to + from).toFixed(round);
};

console.log(findRandomFloatNumber(1, 10, 3));
