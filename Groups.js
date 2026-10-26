class Group {
  constructor() {
    this.values = [];
  }

  add(value) {
    if (!this.has(value)) this.values.push(value);
  }

  delete(value) {
    this.values = this.values.filter((v) => v !== value);
  }

  has(value) {
    return this.values.includes(value);
  }

  static from(iterable) {
    const group = new Group();
    for (const value of iterable) group.add(value);
    return group;
  }
}

const group = Group.from([1, 2, 2, 3]);

console.log(group.has(2));
group.delete(2);
console.log(group.has(2));
console.log(group.has(4));
