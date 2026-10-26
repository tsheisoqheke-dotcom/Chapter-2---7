function everyLoop(array, predicate) {
  for (const element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function everySome(array, predicate) {
  return !array.some((element) => !predicate(element));
}

console.log(everyLoop([2, 4, 6], (n) => n % 2 === 0));
console.log(everySome([2, 4, 6], (n) => n % 2 === 0));

console.log(everyLoop([2, 3, 6], (n) => n % 2 === 0));
console.log(everySome([2, 3, 6], (n) => n % 2 === 0));

console.log(everyLoop(["cat", "car"], (word) => word.length === 3));
console.log(everySome(["cat", "car"], (word) => word.length === 3));
console.log(everyLoop([], (n) => n > 0));
console.log(everySome([], (n) => n > 0));
