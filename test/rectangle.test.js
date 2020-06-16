const assert = require('assert')
const Rectangle = require ('../rectangle')

const rectangle = (a,b) => {
  return new Rectangle(a, b)} ;


describe ('test Rectangle', () => {
  it ("Test de la méthode isSquare", () => {
    assert.strictEqual(rectangle(2,2).isSquare(), true);
    assert.strictEqual(rectangle(2,3).isSquare(), false);
  })
  it ("Test de la méthode getArea", () => {
    assert.strictEqual(rectangle(13,7).getArea(), 91);
  })
  it ("Test de la méthode getPerimeter", () => {
    assert.strictEqual(rectangle(13,7).getPerimeter(), 40);
  })
})
