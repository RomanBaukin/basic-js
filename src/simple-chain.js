const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.result.length
  },
  addLink(value = '  ') {
    this.result.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (!Number(position) || !Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.result = []
      throw new Error(`You can't remove incorrect link!`);
    }

    this.result = this.result.filter((item, index) => index + 1 !== position)
    return this
  },
  reverseChain() {
    this.result = this.result.reverse()
    return this
  },
  finishChain() {
    let chain = this.result.join('~~')
    this.result = []
    return chain
  },
  result: [],
};

console.log(chainMaker.finishChain());

module.exports = {
  chainMaker
};