// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    return (this.a===this.b) ? true : false 
  }

  getArea() {
    return (this.a*this.b)
  }

  getPerimeter() {
    return 2*(this.a+this.b)
  }
}

const rectangle = new Rectangle(10, 10);
rectangle.isSquare ()

module.exports = Rectangle;
