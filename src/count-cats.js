const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counterCats = 0;

  for (const item of matrix) {
    for (const elem of item) {
      if (elem === '^^') counterCats++;
    }
  }

  return counterCats;
}

module.exports = {
  countCats
};