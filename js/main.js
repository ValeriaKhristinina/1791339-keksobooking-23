// https://www.w3schools.com/js/js_random.asp
const findRandomNumber = (from, to) => {
  const result =
    from >= to || from < 0
      ? 'Please, write correct arrange'
      : Math.floor(Math.random() * to) + from;
  return result;
};

console.log(findRandomNumber(0, 500));
