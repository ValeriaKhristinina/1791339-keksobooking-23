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
  const result =
    from >= to || from < 0 || round <= 0
      ? 'Please, write correct arrange'
      : (Math.random() * to + from).toFixed(round);
  return result;
};

console.log(findRandomFloatNumber(1, 10, 3));
