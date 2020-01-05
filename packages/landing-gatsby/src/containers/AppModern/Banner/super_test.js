class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' , this.name + '.');
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }

class Square extends Rectangle {
  constructor(length) {
    this.height;
    super(length, length);
    this.name ='Square';
  }
}