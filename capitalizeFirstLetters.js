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

assert.strictEqual(typeof capitalizeFirst, 'function')
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
assert.strictEqual(capitalizeFirst('I am learning javaScript'), 'I Am Learning JavaScript');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');
