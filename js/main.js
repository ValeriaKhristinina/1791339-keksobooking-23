/* eslint-disable no-console */

// https://www.w3schools.com/js/js_random.asp
const findRandomNumber = (from, to) =>
  from >= to || from < 0 ? -1 : Math.floor(Math.random() * to) + from;

console.log(findRandomNumber(0, 5));

const findRandomFloatNumber = (from, to, round) => {
  if (from >= to || from < 0 || round < 0) {
    return -1;
  } else if (round === 0) {
    return Math.floor(Math.random() * to) + from;
  }

  return Number((Math.random() * (to - from) + from).toFixed(round));
};

console.log(findRandomFloatNumber(1, 3, 2));
