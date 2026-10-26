class vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new vector(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return new vector(this.x - other.x, this.y - other.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
console.log(new vector(1, 2).plus(new vector(2, 3)));
console.log(new vector(1, 2).minus(new vector(2, 3)));
console.log(new vector(3, 4).length);
