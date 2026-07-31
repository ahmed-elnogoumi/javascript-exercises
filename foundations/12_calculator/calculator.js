const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
  )
	return sumWithInitial;
};

const multiply = function(array) {
  const initialValue = array[0];
  const multiplyWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, 1
  )
  return multiplyWithInitial;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  let x = 1;
  if (n === 0 || n === 1) {
    return 1;
  } else {
    while (n > 1) {
      x = (x * n);
      n--;
    }
    return x;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
