const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultString = '',
    counter = 1;

  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i],
      nextSymbol = str[i + 1];

    if (currentSymbol === nextSymbol) {
      counter++;
    } else {
      if (counter !== 1) {
        resultString += counter;
      }
      resultString += currentSymbol;
      counter = 1;
    }
  }

  return resultString;
}

module.exports = {
  encodeLine
};