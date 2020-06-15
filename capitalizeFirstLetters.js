const assert = require('assert')

const capitalizeFirst = (param) => {
  if (param == '') {
    return ''} else {
      let array = param.split('')
      array[0] = array[0].toUpperCase()
      mot = array.join('')
      return mot
    }
}

const capitalizeFirstLetters = (param) => {
  if (param == '') {
    return ''} else if (param.length===1) {
      return capitalizeFirst(param)} else {
      let mots = param.split(' ')
      let rep = mots.map(mot => capitalizeFirst(mot))
      res = rep.join(' ')
      return res
    }
}

assert.strictEqual(typeof capitalizeFirst, 'function')
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters('I am learning javaScript'), 'I Am Learning JavaScript');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');
assert.strictEqual(capitalizeFirstLetters(''), '');
