const assert = require('assert')
const capitalizeFirstLetters = require('../capitalizeFirstLetters')


describe ('test Marjo', () => {
  it ("C'est une fonction d'un seul paramètre",() => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function')
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  })
  it ("Le reste", () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    assert.strictEqual(capitalizeFirstLetters('I am learning javaScript'), 'I Am Learning JavaScript');
// Check that it works for an empty string
// assert.strictEqual(capitalizeFirst(''), '');
    assert.strictEqual(capitalizeFirstLetters(''), ''); 
  })
})

// Check that capitalizeFirst transforms javaScript correctly
// assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// // Check that it works for a 1-character string
// assert.strictEqual(capitalizeFirst('z'), 'Z');

