const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const tempArr1 = s1.split(''),
    tempArr2 = s2.split('');

  for (let i = 0; i < tempArr1.length; i++) {
    if (tempArr2.includes(tempArr1[i])) {
      count++;
      tempArr2.splice((tempArr2.indexOf(tempArr1[i])), 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};