class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
const v1 = new Vec(1, 2);
const v2 = new Vec(2, 3);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.length);
