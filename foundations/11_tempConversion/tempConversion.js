const convertToCelsius = function(fahrenheitTemp) {
  let conversionResult = (fahrenheitTemp - 32) * 5/9;
  return parseFloat(conversionResult.toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  let conversionResult = (celsiusTemp * 9/5 + 32);
  return parseFloat(conversionResult.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
