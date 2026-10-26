const arrays = [[1, 2, 3], [4, 5], [6]];

const result = arrays.reduce((flat, array) => flat.concat(array), []);

console.log(result);
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
