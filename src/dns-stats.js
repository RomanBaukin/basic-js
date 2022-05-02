const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  if (!domains.length) return obj;

  for (let item of domains) {
    item.split('.').reverse().reduce((acc, currentValue) => {
      acc = acc + `.${currentValue}`;
      obj[acc] ? obj[acc]++ : (obj[acc] = 1);
      return acc;
    }, '')
  };

  return obj
}

// getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])

module.exports = {
  getDNSStats
};