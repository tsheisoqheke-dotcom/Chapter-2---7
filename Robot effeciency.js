class PGroup {
  constructor(values) {
    this.values = values;
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.values.concat([value]));
  }

  delete(value) {
    return new PGroup(this.values.filter((v) => v !== value));
  }

  has(value) {
    return this.values.includes(value);
  }
}

PGroup.empty = new PGroup([]);
const a = PGroup.empty;
const b = a.add("hello");
const c = b.add("world");

console.log(a.has("hello"));
console.log(b.has("hello"));
console.log(c.has("world"));
