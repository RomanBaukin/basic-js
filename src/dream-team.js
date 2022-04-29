const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';

  if (Array.isArray(members)) {
    members.filter(item => typeof item === 'string').map(item => item.toUpperCase().replace(/\s+/g, '')).sort().map((item) => {
      result += item[0];
    });
  } else {
    result = false;
  }

  return result
}

module.exports = {
  createDreamTeam
};