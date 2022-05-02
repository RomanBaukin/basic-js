const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const resultArr = [],
    repeatNumber = options.repeatTimes || 1;

  for (let i = 1; i <= repeatNumber; i++) {
    const tempArr = [];

    if (options.additionRepeatTimes) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        tempArr.push(String(options.addition));
      }
    }

    if (options.addition && !options.additionRepeatTimes) {
      tempArr.push(String(options.addition));
    }

    resultArr.push(str + tempArr.join(options.additionSeparator || "|"));
  }

  return resultArr.join(options.separator || "+");
}

console.log(repeater('STRING', {
  repeatTimes: 3,
  separator: '**',
  addition: 'PLUS',
  additionRepeatTimes: 3,
  additionSeparator: '00'
}));

module.exports = {
  repeater
};